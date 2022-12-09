/* eslint-disable */
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SubTitle from "../styles/SubTitle";
import Flex from "../styles/Flex";
import { Container } from "../styles/Container";
import Title from "../styles/Title";
import Spinner from "./Spinner";
import {
  DisplayGalleryItem,
  Gallery,
  GalleryItem,
  GalleryItemTitle,
  ItemImage,
  ItemImageBig,
} from "../styles/Gallery";
import {
  fetchAsyncAgentDetail,
  getSelectedAgent,
  removeSelectedAgent,
} from "../features/AgentsSlice";
import styled from "styled-components";
import AbilityDetail from "./AbilityDetail";

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto 3rem auto;
  grid-template-rows: auto 2rem 15rem;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 10px;
  margin-top: 1rem;
`;
const GridImage = styled.div`
  grid-column: 1 /1;
  grid-row: 1;
  max-height: 18rem;
  max-width: 20rem;
  background-image: url(${(prop) => prop.bgImg});
  background-color: #525252;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  overflow: hidden;
  border-radius: 10px;

  img {
    max-width: 100%;
    max-height: 100%;
    margin-left: 3rem;
    margin-top: 2rem;
  }
`;

const AgentInfo = styled.div`
  grid-row: 2;
  max-width: 20rem;
`;

const GridMain = styled.div`
  grid-column: 3;
  grid-row: 1;
`;

const AbilityAbout = styled.div`
  /* grid-column: 3;
  grid-row: 3; */
  padding: 1rem;
  border: 2px solid #e6e6e6;
  width: fit-content;
  height: fit-content;
  border-radius: 10px;
`;

export default function AgentDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const agent = useSelector(getSelectedAgent);
  const [clickedAbility, setClickedAbility] = useState([]);

  useEffect(() => {
    dispatch(fetchAsyncAgentDetail(id));

    return function () {
      dispatch(removeSelectedAgent());
      setClickedAbility([]);
    };
  }, [dispatch, id]);

  function renderAgent() {
    if (agent.status === 200) {
      let agentData = { ...agent }.data;
      let agentAbilities = agentData.abilities.map((ability, index) => {
        return (
          <AbilityDetail
            ability={ability}
            key={index}
            setClickedAbility={setClickedAbility}
            clickedAbility={clickedAbility}
          />
        );
      });
      return (
        <>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <GridImage bgImg={agentData.background}>
              <img src={agentData.fullPortrait}></img>
            </GridImage>
            <AgentInfo>
              <p>
                <b>Developer Name:</b> {agentData.developerName}
              </p>
              <p>
                <b>Class:</b> {agentData.role.displayName}
              </p>
              <p> {agentData.role.description}</p>
              <Link to={`../agents/`}>see more from this class</Link>
            </AgentInfo>
          </div>
          <GridMain>
            <SubTitle>{agentData.displayName} </SubTitle>
            <p>{agentData.description}</p>
            <Gallery>
              {agentAbilities}
              {clickedAbility.length != 0 ? (
                (console.log("estado", clickedAbility),
                (
                  <AbilityAbout>
                    <p>{clickedAbility[1]}</p>
                  </AbilityAbout>
                ))
              ) : (
                <></>
              )}
            </Gallery>
          </GridMain>
        </>
      );
    } else {
      return <Spinner />;
    }
  }
  return (
    <Container>
      <div>
        <Title>About</Title>
      </div>
      <Grid margin="1rem">{renderAgent()}</Grid>
    </Container>
  );
}