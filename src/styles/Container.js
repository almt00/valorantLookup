import styled from "styled-components";
import polygon from "../assets/polygon.svg";

const Container = styled.div`
  margin-right: auto;
  margin-left: auto;
  //max-width: 1440px;
  min-height: 100%;
  padding-right: 8vw;
  padding-left: 8vw;
  padding-top: 5vh;
  padding-bottom: 5vh;

  a {
    color: red;
    display: inline;
  }
`;

const AltContainer = styled(Container)`
  margin-right: 0;
  padding-bottom: 0;
  background: url(${polygon});
  background-repeat: no-repeat;
  background-position: right top;
  background-size: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export { Container, AltContainer };
