# AAIRI Backend API Specification & Integration Contract

**Version:** `v1`  
**Base Path:** `/api/v1`  
**Target Frontend:** `aairi-website` (Vite + React + TypeScript)  
**Environment Variable (Frontend):** `VITE_API_BASE_URL` (e.g., `https://api.aairi.africa`)

---

## 1. Global Standards & Security Requirements

### 1.1 Transport, Headers & CORS
- **HTTPS Only:** Reject plain HTTP in production.
- **Content-Type:** `application/json` for all JSON endpoints.
- **CORS:** Allow only approved frontend origins (e.g. `https://www.aairi.africa`, `https://aairi.africa`, and local dev `http://localhost:5173`).
- **Request ID:** Return `X-Request-Id` header on every response for traceability.

### 1.2 Anti-Spam, Rate Limiting & Validation
- **Server-Side Validation:** Validate all payloads server-side (never trust client validation).
- **Rate Limiting:**
  - Public form endpoints (`/contact`, `/sponsorship`, `/investors/interest`): max **5 requests / 15 minutes** per IP.
  - Application intake (`/applications`, `/applications/upload-url`): max **10 requests / hour** per IP.
- **Spam Protection:** Accept an optional/required `captchaToken` (Cloudflare Turnstile or hCaptcha) and verify it server-side before processing.
- **Data Protection:** Encrypt PII and uploaded business documents at rest (AES-256 / KMS). Never log sensitive business financials or personal phone/email payloads in plaintext application logs.

### 1.3 Standardised Response Envelopes

**Success (`200 OK` / `201 Created`)**
```json
{
  "success": true,
  "data": {},
  "requestId": "req_01J..."
}
```

**Validation Error (`422 Unprocessable Entity`)**
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "One or more fields failed validation.",
    "fieldErrors": {
      "email": "Please provide a valid email address."
    }
  },
  "requestId": "req_01J..."
}
```

**Rate Limit (`429 Too Many Requests`)**
```json
{
  "success": false,
  "error": {
    "code": "RATE_LIMITED",
    "message": "Too many requests. Please wait before trying again."
  },
  "requestId": "req_01J..."
}
```

---

## 2. Contact Enquiry Endpoint

### `POST /api/v1/contact`
Handles general, agribusiness application, bootcamp, awards, media, and strategic partnership enquiries from `/contact`.

**Request Body**
```json
{
  "fullName": "Adaeze Okafor",
  "organisation": "GreenHarvest Foods Ltd",
  "email": "adaeze@greenharvest.ng",
  "category": "Strategic partnership",
  "message": "We would like to discuss technical mentorship collaboration for Phase 2.",
  "captchaToken": "turnstile-token-optional"
}
```

**Validation Rules**
- `fullName`: string, 2–120 chars, required
- `organisation`: string, max 150 chars, optional
- `email`: valid email, required
- `category`: enum (`Agribusiness application`, `Bootcamp enquiry`, `Investor enquiry`, `Awards and recognition`, `Sponsorship`, `Strategic partnership`, `Media enquiry`, `General enquiry`), required
- `message`: string, 15–4000 chars, required

**Response (`201 Created`)**
```json
{
  "success": true,
  "data": {
    "enquiryId": "ENQ-2026-00412",
    "receivedAt": "2026-11-25T13:30:00Z"
  },
  "requestId": "req_01J..."
}
```

**Side Effects:** Send notification email to AAIRI secretariat (`ibeere@aairi.africa` / configured inbox) and auto-acknowledgement email to sender.

---

## 3. Sponsorship Enquiry Endpoint

### `POST /api/v1/sponsorship`
Handles institutional sponsorship enquiries from `/sponsorship`.

**Request Body**
```json
{
  "fullName": "Chidi Nwosu",
  "organisation": "Pan-African AgriBank",
  "email": "c.nwosu@agribank.org",
  "focusArea": "Botswana Pre-Investors Forum",
  "requestProspectus": true,
  "message": "Interested in reviewing sponsorship opportunities for the Botswana Forum.",
  "captchaToken": "turnstile-token-optional"
}
```

**Validation Rules**
- `fullName`: string, 2–120 chars, required
- `organisation`: string, 2–150 chars, required
- `email`: valid email, required
- `focusArea`: enum (`Programme & Bootcamp Support`, `Awards & Recognition Conference`, `Botswana Pre-Investors Forum`, `Toronto Follow-Up Forum`, `General Programme Sponsorship`), required
- `requestProspectus`: boolean, default `true`
- `message`: string, 15–4000 chars, required

**Response (`201 Created`)**
```json
{
  "success": true,
  "data": {
    "sponsorshipId": "SPN-2026-00108",
    "receivedAt": "2026-11-25T13:32:00Z"
  },
  "requestId": "req_01J..."
}
```

---

## 4. Investor Interest Endpoint

### `POST /api/v1/investors/interest`
Registers interest from impact investors, DFIs, agricultural funds, and institutional investors from `/investors`, `/investors/botswana`, and `/investors/toronto`.

**Request Body**
```json
{
  "fullName": "Dr. Samuel Mensah",
  "organisation": "West Africa Impact Capital",
  "role": "Managing Partner",
  "email": "s.mensah@waic.org",
  "phone": "+233 20 123 4567",
  "investorType": "Impact Investor",
  "forumInterest": ["Botswana Forum", "Toronto Forum"],
  "focusValueChains": ["Cold chain logistics", "Agro-processing"],
  "ticketSizeRange": "$250k – $1M",
  "notes": "Seeking bankable post-harvest and agro-processing SMEs.",
  "consentToContact": true,
  "captchaToken": "turnstile-token-optional"
}
```

**Validation Rules**
- `fullName`, `organisation`, `email`: required
- `investorType`: enum (`Impact Investor`, `Development Finance Institution (DFI)`, `Financial Institution`, `Agricultural Investment Fund`, `Institutional Investor`, `Private / HNW Investor`, `International Business Network`), required
- `forumInterest`: non-empty array of (`Botswana Forum`, `Toronto Forum`, `Virtual Deal Pipeline`), required
- `consentToContact`: boolean, must be `true`

**Response (`201 Created`)**
```json
{
  "success": true,
  "data": {
    "investorRegistrationId": "INV-2026-00054",
    "receivedAt": "2026-11-25T13:35:00Z"
  },
  "requestId": "req_01J..."
}
```

---

## 5. Secure Phase 1 Application Intake Endpoints

### 5.1 `POST /api/v1/applications/upload-url`
Generates a short-lived (e.g., 5-minute) presigned object-storage URL (S3 / Cloudflare R2 / GCS) so confidential business plans and pitch decks never pass through the web server memory.

**Request Body**
```json
{
  "fileName": "GreenHarvest-Pitch-Deck.pdf",
  "contentType": "application/pdf",
  "fileSizeBytes": 2450120,
  "documentType": "pitch_deck"
}
```

**Validation Rules**
- Allowed `contentType`: `application/pdf`, `application/vnd.openxmlformats-officedocument.wordprocessingml.document`, `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
- Max `fileSizeBytes`: `10485760` (10 MB)
- `documentType`: enum (`pitch_deck`, `business_registration`, `financial_summary`, `supporting_document`)

**Response (`200 OK`)**
```json
{
  "success": true,
  "data": {
    "uploadUrl": "https://storage.aairi.africa/presigned/...",
    "fileKey": "applications/2026/tmp/uuid-GreenHarvest-Pitch-Deck.pdf",
    "expiresInSeconds": 300
  },
  "requestId": "req_01J..."
}
```

### 5.2 `POST /api/v1/applications`
Submits the complete 7-step Phase 1 SME application, verifies uploaded `fileKey`s exist and passed malware scanning, generates an application reference number, and triggers confirmation email.

**Request Body**
```json
{
  "personalInfo": {
    "fullName": "Amina Bello",
    "roleTitle": "Founder & Managing Director",
    "email": "amina@sahelgrains.ng",
    "phone": "+234 800 000 0000",
    "countryOfResidence": "Nigeria",
    "inclusiveGroupFlags": ["Women-led", "Youth-led"]
  },
  "businessInfo": {
    "enterpriseName": "Sahel Grains & Milling Ltd",
    "countryOfOperation": "Nigeria",
    "yearsInOperation": 4,
    "isLegallyRegistered": true,
    "registrationNumber": "RC-1234567",
    "websiteOrSocial": "https://sahelgrains.example"
  },
  "valueChain": {
    "primaryValueChain": "Agro-processing and food manufacturing",
    "secondaryValueChains": ["Crop production and processing", "Cold chain logistics"]
  },
  "developmentAndInvestment": {
    "businessStage": "Growth / Revenue-generating",
    "annualRevenueBand": "$100k – $500k",
    "scalabilitySummary": "Expanding automated grain processing across Northern Nigeria.",
    "marketPotentialSummary": "Supplying regional retailers and West African export buyers.",
    "capitalNeededUsd": 350000,
    "readinessNeeds": ["Financial modelling", "Investor pitch preparation", "AGOA export readiness"]
  },
  "socialAndEnvironmentalImpact": {
    "womenYouthPwdRetireeImpact": "Employs 42 women and 18 youth across aggregation and milling.",
    "environmentalSustainability": "Solar-hybrid drying reduces post-harvest loss and diesel usage."
  },
  "supportingDocuments": [
    {
      "documentType": "pitch_deck",
      "fileKey": "applications/2026/tmp/uuid-GreenHarvest-Pitch-Deck.pdf",
      "fileName": "GreenHarvest-Pitch-Deck.pdf"
    }
  ],
  "consent": {
    "accurateInformationDeclared": true,
    "privacyPolicyAccepted": true,
    "bootcampFeeAcknowledged": true
  },
  "captchaToken": "turnstile-token-optional"
}
```

**Response (`201 Created`)**
```json
{
  "success": true,
  "data": {
    "referenceNumber": "AAIRI-2026-000189",
    "status": "received",
    "submittedAt": "2026-11-25T13:40:00Z"
  },
  "requestId": "req_01J..."
}
```

### 5.3 `GET /api/v1/applications/:referenceNumber/status`
Lightweight status check (requires matching `email` query parameter `?email=...` to prevent enumeration).

**Response (`200 OK`)**
```json
{
  "success": true,
  "data": {
    "referenceNumber": "AAIRI-2026-000189",
    "status": "under_review",
    "updatedAt": "2026-11-26T09:00:00Z"
  },
  "requestId": "req_01J..."
}
```

---

## 6. Recommended Database Tables (PostgreSQL)

1. `contact_enquiries` (`id`, `enquiry_code`, `full_name`, `organisation`, `email`, `category`, `message`, `ip_hash`, `created_at`)
2. `sponsorship_enquiries` (`id`, `sponsorship_code`, `full_name`, `organisation`, `email`, `focus_area`, `request_prospectus`, `message`, `created_at`)
3. `investor_interests` (`id`, `registration_code`, `full_name`, `organisation`, `role`, `email`, `phone`, `investor_type`, `forum_interest_json`, `value_chains_json`, `ticket_size_range`, `notes`, `consent_at`, `created_at`)
4. `applications` (`id`, `reference_number`, `applicant_email`, `enterprise_name`, `country_of_operation`, `primary_value_chain`, `payload_jsonb`, `status`, `consent_at`, `created_at`, `updated_at`)
5. `application_documents` (`id`, `application_id`, `document_type`, `file_key`, `file_name`, `scan_status`, `created_at`)
6. `audit_logs` (`id`, `entity_type`, `entity_id`, `action`, `actor`, `created_at`)

---

## 7. Backend Environment Variables Checklist

```env
PORT=8080
NODE_ENV=production
ALLOWED_ORIGINS=https://www.aairi.africa,https://aairi.africa
DATABASE_URL=postgresql://...
OBJECT_STORAGE_BUCKET=aairi-applications-prod
OBJECT_STORAGE_REGION=...
OBJECT_STORAGE_ACCESS_KEY=...
OBJECT_STORAGE_SECRET_KEY=...
SMTP_HOST=...
SMTP_PORT=587
SMTP_USER=...
SMTP_PASS=...
SECRETARIAT_NOTIFICATION_EMAIL=ibeere@aairi.africa
TURNSTILE_SECRET_KEY=...
```
