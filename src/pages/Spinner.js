import React from "react";
import spinner from "../assets/spinner.gif";
import styled from "styled-components/macro";

const SpinnerStyle = styled.div`
  align-self: center;
  justify-self: center;
  text-align: center;
`;

export default function Spinner() {
  return (
    <SpinnerStyle>
      <img src={spinner}></img>
    </SpinnerStyle>
  );
}
