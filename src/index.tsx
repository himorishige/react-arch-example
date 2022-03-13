import { StrictMode } from 'react';
import { render } from 'react-dom';
import { App } from 'src/App';

import 'regenerator-runtime';
import 'tailwindcss/tailwind.css';

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root'),
);
