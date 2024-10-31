import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { AuthProvider } from './authContext'; // Import the AuthProvider
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <I18nextProvider i18n={i18n}>
     <AuthProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </AuthProvider>
    </I18nextProvider>
  </React.StrictMode>,
)
