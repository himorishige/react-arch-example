import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from 'src/App';

import 'regenerator-runtime';
import 'tailwindcss/tailwind.css';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

render(
  <StrictMode>
    <ErrorBoundary fallback={<div role="alert">Something went wrong...</div>}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
  document.getElementById('root'),
);
