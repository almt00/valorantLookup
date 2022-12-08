import React from "react";
import agent_group from "../assets/agent_group.png";
import styled from "styled-components";
import Title from "../styles/Title";
import SubTitle from "../styles/SubTitle";
import { AltContainer } from "../styles/Container";
import Button from "../styles/Button";

const Flex = styled.div`
  /* isplay: flex;
  flex-direction: column;
  gap: 1rem; */
  display: grid;
`;

const Left = styled.div`
  /* align-self: flex-start;
  max-width: 50vw; */
  grid-row: 1 / span 2;
  grid-column: 1 / span 2;
`;
const Right = styled.div`
  /* align-self: flex-end;
  height: 50%; */
  grid-row: 3 / span 1;
  grid-column: 3 / span 2;
`;

const AgentsImg = styled.img`
  width: 100%;
`;

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
            development technologies, making use of React and Redux to fetch
            data from an API and display it.
          </p>
          <p>
            I chose the unofficial Valorant API as I am familiar with its
            content (since I play the game and it&apos;s one of my favorites)
            and it has a lot of information about the game&apos;s agents,
            weapons, contracts, maps and more.
          </p>
          <a
            href="https://dash.valorant-api.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button type="button">go to API</Button>
          </a>
        </Left>

        <Right>
          <AgentsImg src={agent_group}></AgentsImg>
        </Right>
      </Flex>
    </AltContainer>
  );
}
