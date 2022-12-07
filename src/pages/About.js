import React from "react";
import agent_group from "../assets/agent_group.png";
import polygon from "../assets/polygon.svg";
import styled from "styled-components";
import Title from "../styles/Title";
import SubTitle from "../styles/SubTitle";
import { AltContainer } from "../styles/Container";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Left = styled.div`
  align-self:flex-start;
  width: 50vw ;
`
const Right = styled.div`
  align-self:flex-end;
  width: 50vw ;
`

export default function Home() {
  return (
    <AltContainer>
      <div>
        <Title>Valorant Lookup</Title>
        <SubTitle>about this project</SubTitle>
      </div>
      <Flex>
        <Left>
        <p>
          This app was made for a university project for the class of web
          development technologies, making use of React and Redux to fetch data
          from an API and display it.
        </p>
        <p>
          I chose the unofficial Valorant API as I am familiar with its content
          (since I play the game and it's one of my favorites) and it has a lot
          of information about the game's agents, weapons, contracts, maps and
          more.
        </p>
        </Left>
        
        <Right>
          <img src={agent_group}></img>
        </Right>
      </Flex>
    </AltContainer>
  );
}
