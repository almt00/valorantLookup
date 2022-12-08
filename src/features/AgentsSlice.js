import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  agents: {},
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    addAgents: (state, {payload}) => {
      state.agents = payload;
    },
  },
});

export const { addAgents } = agentsSlice.actions;
export const getAllAgents = (state) => state.agents.agents; // nome da slice (agents) e nome da propriedade (agents)
export default agentsSlice.reducer;
