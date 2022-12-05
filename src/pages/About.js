import React from "react";
import agent_group from "../assets/agent_group.png";

export default function Home() {
  return (
    <>
      <div>
        <h1>Valorant Lookup</h1>
        <h2>about this project</h2>
      </div>
      <div>
        <p>
          This app was made for a university project for the class of web
          development technologies, making use of React and Redux to fetch data
          from an API and display it.
        </p>
        <p>
          I chose the unofficial Valorant API as I am familiar with its content
          (since I play the game and it's one of my favorites) and it has a lot
          of information about the game's agents, weapons, contracts, maps and
          more.
        </p>
      </div>
      <div>
        <img src={agent_group}></img>
      </div>
    </>
  );
}
