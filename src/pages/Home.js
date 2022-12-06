import React from "react";
import agent_image from "../assets/agent_image.png";
import styled from "styled-components";

export default function Home() {
  const Title = styled.p`
    font-family: "Mulish", sans-serif;
    font-style: normal;
    font-weight: 900;
    font-size: 3rem;
  `;
  const SubTitle = styled.p`
    font-family: "Mulish", sans-serif;
    font-style: normal;
    font-weight: 800;
    font-size: 2rem;
    color: #ff4655;
  `;

  const Container = styled.div`
    margin-right: auto;
    margin-left: auto;
    max-width: 1440px;
    padding-right: 5vw;
    padding-left: 5vw;
    padding-top: 5vh;
    padding-bottom: 5vh;
  `;

  return (
    <Container>
      <div>
        <Title>Valorant Lookup</Title>
        <SubTitle>agent of the day</SubTitle>
      </div>
      <div>
        <div>
          <img src={agent_image}></img>
        </div>
        <div>
          <h3>harbor</h3>
          <p href="">see more</p>
          <p>
            Hailing from India's coast, Harbor storms the field wielding ancient
            technology with dominion over water. He unleashes frothing rapids
            and crushing waves to shield his allies and to pummel those that
            oppose him.
          </p>
          <div>
            <div>
              <p>Ability 1</p>
              <p>Cove</p>
              <img></img>
            </div>
            <div>
              <p>Grenade</p>
              <p>Cascade</p>
              <img></img>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
