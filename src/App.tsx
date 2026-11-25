import { MotionConfig } from 'motion/react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from '@/routes/AppRouter';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </MotionConfig>
  );
}

export default App;
