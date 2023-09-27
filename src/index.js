import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import { RouterProvider } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Hello } from './components/router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={Hello}/>
  </React.StrictMode>
);

reportWebVitals();