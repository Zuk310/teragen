import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ReviewsProvider } from './context/reviews.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReviewsProvider>
      <App />
    </ReviewsProvider>
  </React.StrictMode>
);

reportWebVitals();
