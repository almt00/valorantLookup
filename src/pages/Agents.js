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

export default function Agents() {
  const agents = useSelector(getAllAgents);

  console.log(agents.data);
  let renderAgents = "";
  renderAgents =
    agents.status === 200 ? (
      agents.data.map((agent, index) => {
        return <GalleryItemAgent key={index} agent={agent} />;
      })
    ) : (
      <Spinner />
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
