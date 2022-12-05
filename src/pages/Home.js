import React from "react";
import agent_image from "../assets/agent_image.png";

export default function Home() {
  return (
    <>
      <div>
        <h1>Valorant Lookup</h1>
        <h2>agent of the day</h2>
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
    </>
  );
}
