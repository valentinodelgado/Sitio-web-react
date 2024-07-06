import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB4It6EaaeiB2KpZhU6GHh57seWlI3XK00",
  authDomain: "react-coder-8392d.firebaseapp.com",
  projectId: "react-coder-8392d",
  storageBucket: "react-coder-8392d.appspot.com",
  messagingSenderId: "867987068637",
  appId: "1:867987068637:web:96c20db20a9e91191e6d34"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
