export interface ApiSuccessResponse<T> {
  success: true;
  data: T;
  requestId?: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    fieldErrors?: Record<string, string>;
  };
  requestId?: string;
}

export class ApiClientError extends Error {
  readonly status: number;
  readonly code: string;
  readonly fieldErrors?: Record<string, string>;

  constructor(
    message: string,
    status: number,
    code = 'API_ERROR',
    fieldErrors?: Record<string, string>,
  ) {
    super(message);
    this.name = 'ApiClientError';
    this.status = status;
    this.code = code;
    this.fieldErrors = fieldErrors;
  }
}

export function getApiBaseUrl(): string | null {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;
  if (typeof baseUrl !== 'string' || baseUrl.trim().length === 0) {
    return null;
  }
  return baseUrl.replace(/\/+$/, '');
}

export function isBackendConfigured(): boolean {
  return getApiBaseUrl() !== null;
}

export async function apiRequest<TResponse, TBody = unknown>(
  path: string,
  options: {
    method?: 'GET' | 'POST';
    body?: TBody;
    signal?: AbortSignal;
  } = {},
): Promise<ApiSuccessResponse<TResponse>> {
  const baseUrl = getApiBaseUrl();
  if (!baseUrl) {
    throw new ApiClientError(
      'Backend API URL is not configured (VITE_API_BASE_URL).',
      503,
      'BACKEND_NOT_CONFIGURED',
    );
  }

  const response = await fetch(`${baseUrl}${path}`, {
    method: options.method ?? 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    signal: options.signal,
  });

  const payload = (await response.json().catch(() => null)) as
    | ApiSuccessResponse<TResponse>
    | ApiErrorResponse
    | null;

  if (!response.ok || !payload || !payload.success) {
    const errPayload = payload && !payload.success ? payload.error : null;
    throw new ApiClientError(
      errPayload?.message ?? `Request failed with status ${response.status}`,
      response.status,
      errPayload?.code ?? 'REQUEST_FAILED',
      errPayload?.fieldErrors,
    );
  }

  return payload;
}
