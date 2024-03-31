import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Favicon from "react-favicon"
import { createRoot } from 'react-dom/client';




const containerElement = document.querySelector(".react");
if (containerElement) {
    createRoot(containerElement).render(
        <div>
            <Favicon url="./assets/images/favicon/favicon.ico" />
        </div>
    );
}


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
