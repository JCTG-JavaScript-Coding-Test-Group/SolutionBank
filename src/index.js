import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>🔍 프로그래머스 해설 은행</h1>
    <div className="loading"/>
    <App />
  </React.StrictMode>
);

