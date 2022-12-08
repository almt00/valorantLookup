import React, { useState, useEffect } from "react";
import agent_image from "../assets/agent_image.png";
import styled from "styled-components";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import SubTitle from "../styles/SubTitle";
import { useDispatch } from "react-redux";
import { addAgents } from "../features/AgentsSlice";
import Flex from "../styles/Flex";


const Gallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 1rem;
  align-items: flex-start;
  flex-wrap: wrap;
  align-self: flex-end;
`;

const GalleryItem = styled.div`
  background-color: #636363;
  color: #ffffff;
  padding: 1rem;
  height: 10rem;
  width: 10rem;
  border-radius: 10px;
`;

export default function Home() {
  const dispatch = useDispatch();
  // calling the API
  useEffect(() => {
    fetch(`https://valorant-api.com/v1/agents?isPlayableCharacter=true`)
      .then((response) => response.json())
      .then((actualData) => {
        dispatch(addAgents(actualData));
        console.log(actualData.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <Container>
      <div>
        <Title>Valorant Lookup</Title>
        <SubTitle>agent of the day</SubTitle>
      </div>
      <Flex margin="1rem">
        <div>
          <img src={agent_image}></img>
        </div>
        <div>
          <SubTitle>harbor </SubTitle>
          <a href="">see more</a>
          <p>
            Hailing from India's coast, Harbor storms the field wielding ancient
            technology with dominion over water. He unleashes frothing rapids
            and crushing waves to shield his allies and to pummel those that
            oppose him.
          </p>
          <Gallery>
            <GalleryItem>
              <p>Ability 1</p>
              <p>Cove</p>
              <img></img>
            </GalleryItem>
            <GalleryItem>
              <p>Grenade</p>
              <p>Cascade</p>
              <img></img>
            </GalleryItem>
            <GalleryItem>
              <p>Ability 1</p>
              <p>Cove</p>
              <img></img>
            </GalleryItem>
            <GalleryItem>
              <p>Grenade</p>
              <p>Cascade</p>
              <img></img>
            </GalleryItem>
          </Gallery>
        </div>
      </Flex>
    </Container>
  );
}
