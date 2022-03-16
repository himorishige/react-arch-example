import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from 'src/App';
import 'regenerator-runtime';
import 'tailwindcss/tailwind.css';
import { initMocks } from 'src/test/server';

initMocks();

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
