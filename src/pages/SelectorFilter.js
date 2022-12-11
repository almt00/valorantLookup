/* eslint-disable */

import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getAllAgents } from "../features/AgentsSlice";

const Selector = styled.select`
  width: 10rem;
  background-color: #ffffff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  margin: 0 1rem 0 1rem;
  border: 2px solid #e6e6e6;
  -moz-appearance: none; /* Firefox */
  -webkit-appearance: none; /* Safari and Chrome */
  appearance: none;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 7px;
`;

const Form = styled.form`
  width: 100%;
  font-family: "Inter", sans-serif;
`;

export default function SelectorFilter(props) {
  let setFilter = props.setFilter;

  const selected = () => {
    let selectedOption = document.getElementById("agentClasses").value;
    setFilter(selectedOption);
  };

  return (
    <div>
      <Form>
        <label htmlFor="agentClasses" style={{ color: "#FF4655" }}>
          <b>Class:</b>
        </label>
        <Selector name="agentClasses" id="agentClasses" onChange={selected}>
          <option value="All" defaultValue>
            All
          </option>
          <option value="Duelist">Duelist</option>
          <option value="Initiator">Initiator</option>
          <option value="Sentinel">Sentinel</option>
          <option value="Controller">Controller</option>
        </Selector>
      </Form>
    </div>
  );
}
