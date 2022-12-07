import "./App.css";
import logo from "./assets/valorant_logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import styled from "styled-components";

import TestFetch from "./components/TestFetch";

const Nav = styled.nav`
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  background-color: #242424;
  border-bottom: 7px solid #ff4655;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 2vw;
  color: #ffffff;
  position: sticky;
  top: 0;
  width: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 60px;
  color: #ffffff;
  list-style: none;

  a,
  p {
    color: #ffffff;
    text-decoration: none;
  }
`;
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
        <Route path="/agents" element={<TestFetch />} />
        <Route path="/abilities" element={<h1>Abilities</h1>} />
        <Route path="/search" element={<h1>Search</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/agents/:id" element={<h1>Agent Detail</h1>} />
      </Routes>
    </>
  );
}

export default App;
