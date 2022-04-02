import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from 'src/App';
import 'regenerator-runtime';
import 'tailwindcss/tailwind.css';
import { initMocks } from 'src/test/server';

initMocks();

const container = document.getElementById('root');
if (!container) throw new Error('Failed to find the root element');
const root = createRoot(container);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
