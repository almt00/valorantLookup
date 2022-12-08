import styled from "styled-components";

const Button = styled.button`
  padding: 1rem 3rem;
  margin: 1rem 0 1rem 0;
  border-radius: 10px;
  border: 0;
  color: #ffffff;
  background-color: #242424;
  font-family: "Inter", sans-serif;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  :hover {
    background-color: #ffffff;
    color: #242424;
    outline: 2px solid #e6e6e6;
  }
`;

export default Button;
