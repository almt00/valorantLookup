/* eslint-disable */

import { useSelector, useDispatch } from "react-redux";
import { getAllAgents, fetchAsyncAgents } from "../features/AgentsSlice";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import { Gallery } from "../styles/Gallery";
import SelectorFilter from "../components/SelectorFilter";
import Flex from "../styles/Flex";
import GalleryItemAgent from "../components/GalleryItemAgent";
import Spinner from "../components/Spinner";
import { useState } from "react";

export default function Agents() {
  const dispatch = useDispatch();
  const agents = useSelector(getAllAgents);
  const [filter, setFilter] = useState("All");
  if (Object.keys(agents).length === 0 || agents === undefined) {
    console.log("dispatch");
    dispatch(fetchAsyncAgents());
  }

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
