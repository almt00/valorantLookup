import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./ex1/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ex1">Exercício 1</Link>
            </li>
            <li>
              <Link to="/ex2">Exercício 2</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ex1" element={<App />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
