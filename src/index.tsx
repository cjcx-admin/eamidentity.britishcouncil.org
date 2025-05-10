// This must be the first line in src/index.js
import 'react-app-polyfill/ie11';
import './polyfill';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

import { createRoot } from 'react-dom/client';
import { Providers } from './Providers';

import './common/i18n';
import './index.scss';

import App from './App';

const rootEl = document.getElementById('root');

const render = () => {
  const root = createRoot(rootEl!);
  root.render(
    <Providers>
      <App />
    </Providers>
  );
};

render();
