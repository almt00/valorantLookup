import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import SubTitle from "../styles/SubTitle";
import { useDispatch, useSelector } from "react-redux";
import { addAgents, getAllAgents } from "../features/AgentsSlice";
import Flex from "../styles/Flex";
import {
  DisplayGalleryItem,
  Gallery,
  GalleryItem,
  GalleryItemTitle,
  ItemImage,
  ItemImageBig,
} from "../styles/Gallery";

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

  const agents = useSelector(getAllAgents);
  function renderRandomAgent() {
    if (agents.status === 200) {
      let allAgents = [...agents.data];
      let randomAgent = allAgents[Math.floor(Math.random() * allAgents.length)];
      let randomAgentAbilities = randomAgent.abilities.map((ability, index) => {
        return (
          <GalleryItem key={index}>
            <GalleryItemTitle>{ability.slot}</GalleryItemTitle>
            <p key={index}>{ability.displayName}</p>
            <ItemImage src={ability.displayIcon}></ItemImage>
          </GalleryItem>
        );
      });
      return (
        <>
          <DisplayGalleryItem bgImg={randomAgent.background}>
            <ItemImageBig src={randomAgent.fullPortrait}></ItemImageBig>
          </DisplayGalleryItem>
          <div>
            <SubTitle>{randomAgent.displayName} </SubTitle>
            <Link to={`agents/${randomAgent.uuid}`}>see more</Link>
            <p>{randomAgent.description}</p>
            <Gallery>{randomAgentAbilities}</Gallery>
          </div>
        </>
      );
    } else {
      return <h1>loading</h1>;
    }
  }

  return (
    <Container>
      <div>
        <Title>Valorant Lookup</Title>
        <SubTitle>agent of the day</SubTitle>
      </div>
      <Flex margin="1rem">{renderRandomAgent()}</Flex>
    </Container>
  );
}
