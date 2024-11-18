import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals.js';  // This line should be intact
import RegistrationForm from './components/RegistrationForm.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RegistrationForm />
  </React.StrictMode>
);

reportWebVitals();  // This line should also be intact
