import "./App.css";
import logo from "./assets/valorant_logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Agents from "./pages/Agents";
import AgentDetail from "./pages/AgentDetail";
import { Nav, Ul } from "./styles/Nav";

function App() {
  return (
    <>
      <Nav>
        <img src={logo}></img>
        <Ul>
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
        </Ul>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/abilities" element={<h1>Abilities</h1>} />
        <Route path="/search" element={<h1>Search</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
      </Routes>
    </>
  );
}

export default App;
