import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FormContextprovider } from './context/FormContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FormContextprovider>
    <App />
  </FormContextprovider>
);
