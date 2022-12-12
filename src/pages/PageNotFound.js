import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components/macro";
import Button from "../styles/Button";
import { Container } from "../styles/Container";
import SubTitle from "../styles/SubTitle";
import Title from "../styles/Title";

const ContainerCentered = styled(Container)`
  height: calc(100vh - 8rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function PageNotFound() {
  return (
    <ContainerCentered>
      <Title>404</Title>
      <SubTitle>Page Not Found</SubTitle>
      <Link to="/">
        <Button>Take Me Home</Button>
      </Link>
    </ContainerCentered>
  );
}
