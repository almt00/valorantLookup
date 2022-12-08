//import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllAgents } from "../features/AgentsSlice";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import { Gallery, GalleryItemBig } from "../styles/Gallery";
import { ItemImageBig } from "../styles/Gallery";

export default function Agents() {
  const agents = useSelector(getAllAgents);

  console.log(agents.data);
  let renderAgents = "";
  renderAgents =
    agents.status === 200 ? (
      agents.data.map((agent, index) => {
        return (
          <GalleryItemBig bgImg={agent.background} key={index}>
            <ItemImageBig src={agent.fullPortrait}></ItemImageBig>
          </GalleryItemBig>
        );
      })
    ) : (
      <h1>erro</h1>
    );
  return (
    <Container>
      <Title>Agents</Title>
      <Gallery>{renderAgents}</Gallery>
    </Container>
  );
}
