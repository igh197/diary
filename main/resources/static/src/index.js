import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import * as ServiceWorker from './serviceWorker';
import { RecoilRoot } from 'recoil';
import LoadingPage from './pages/LoadingPage';

createRoot(document.getElementById('root')).render(
  <RecoilRoot>
    <React.Fragment>
      <React.Suspense fallback={<LoadingPage />}>
        <App />
      </React.Suspense>
    </React.Fragment>
  </RecoilRoot>,
);

ServiceWorker.unregister();
