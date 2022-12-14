import logo from "./assets/valorant_logo.svg";
import { Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Agents from "./pages/Agents";
import AgentDetail from "./pages/AgentDetail";
import { Nav, Ul } from "./styles/Nav";
import Footer from "./components/Footer";
import styled from "styled-components/macro";
import PageNotFound from "./pages/PageNotFound";

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 3rem;
`;

function App() {
  return (
    <Wrapper>
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
            <Link to="/about">About</Link>
          </li>
        </Ul>
      </Nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agents" element={<Agents />} />
        <Route path="/about" element={<About />} />
        <Route path="/agents/:id" element={<AgentDetail />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Wrapper>
  );
}

export default App;
