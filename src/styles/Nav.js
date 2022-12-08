import styled from "styled-components";

const Nav = styled.nav`
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  background-color: #242424;
  border-bottom: 7px solid #ff4655;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 1vh 5vw;
  color: #ffffff;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
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

  a:hover {
    color: #ff4655;
  }
`;
export { Nav, Ul };
