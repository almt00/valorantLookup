import styled from "styled-components/macro";

const Nav = styled.nav`
  font-family: "Mulish", sans-serif;
  font-weight: 800;
  background-color: #242424;
  border-bottom: 5px solid #ff4655;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 5vw;
  color: #ffffff;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 999;
  img {
    max-height: 2rem;
  }
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 3rem;
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

  @media screen and (max-width: 650px) {
    gap: 2rem;
    padding: 0;
  }
`;
export { Nav, Ul };
