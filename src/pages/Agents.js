//import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAllAgents } from "../features/AgentsSlice";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import { Gallery, GalleryItemBig } from "../styles/Gallery";
import { ItemImageBig } from "../styles/Gallery";
import SelectorFilter from "./SelectorFilter";
import Flex from "../styles/Flex";

export default function Agents() {
  const agents = useSelector(getAllAgents);

  console.log(agents.data);
  let renderAgents = "";
  renderAgents =
    agents.status === 200 ? (
      agents.data.map((agent, index) => {
        return (
          <Link to={`${agent.uuid}`} key={index}>
            <>
              <GalleryItemBig bgImg={agent.background} key={index}>
                <ItemImageBig src={agent.fullPortrait}></ItemImageBig>
              </GalleryItemBig>
            </>
          </Link>
        );
      })
    ) : (
      <h1>erro</h1>
    );
  return (
    <Container>
      <Flex>
        <Title>Agents</Title>
        <SelectorFilter />
      </Flex>

      <Gallery>{renderAgents}</Gallery>
    </Container>
  );
}
