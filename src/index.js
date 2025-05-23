import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle'; // Import global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle /> {/* Apply global styles */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();