import "./App.css";
import logo from "./assets/valorant_logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import TestFetch from "./components/TestFetch";

function App() {
  return (
    <>
      <nav>
        <ul>
        <li>
            <img src={logo}></img>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/agents">Agents</Link>
          </li>
          <li>
            <Link to="/abilities">Abilities</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<TestFetch/>} />
        <Route path="/abilities" element={<h1>Abilities</h1>} />
        <Route path="/search" element={<h1>Search</h1>} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/agents/:id" element={<h1>Agent Detail</h1>} />

      </Routes>
    </>
  );
}

export default App;
