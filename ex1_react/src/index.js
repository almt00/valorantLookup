import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./ex1/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Counter from "./ex3/features/counter/Counter";
import store from "./app/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
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
              <li>
                <Link to="/ex3">Exercício 3</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ex1" element={<App />} />
            <Route path="/ex3" element={<Counter />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>
);
