/* eslint-disable */

import { useSelector } from "react-redux";
import { getAllAgents } from "../features/AgentsSlice";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import { Gallery } from "../styles/Gallery";
import SelectorFilter from "./SelectorFilter";
import Flex from "../styles/Flex";
import GalleryItemAgent from "./GalleryItemAgent";
import Spinner from "./Spinner";
import { useState } from "react";

export default function Agents() {
  const agents = useSelector(getAllAgents);
  const [filter, setFilter] = useState("All");

  console.log(agents.data);
  let renderAgents = "";
  renderAgents =
    agents.status === 200 ? (
      agents.data.map((agent, index) => {
        if (agent.role.displayName === filter) {
          return <GalleryItemAgent key={index} agent={agent} />;
        } else if (filter === "All") {
          return <GalleryItemAgent key={index} agent={agent} />;
        }
      })
    ) : (
      <Spinner />
    );
  return (
    <>
      <Container>
        <Flex>
          <Title>Agents</Title>
          <SelectorFilter setFilter={setFilter} />
        </Flex>
        <Gallery>{renderAgents}</Gallery>
      </Container>
    </>
  );
}
