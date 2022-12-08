import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAsyncAgents = createAsyncThunk(
  "agents/fetchAsyncAgents",
  async () => {
    const response = await fetch(
      `https://valorant-api.com/v1/agents?isPlayableCharacter=true`
    );
    let actualData = await response.json();

    return actualData;
  }
);

const initialState = {
  agents: {},
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    addAgents: (state, { payload }) => {
      state.agents = payload;
    },
  },
  extraReducers: {
    [fetchAsyncAgents.pending]: () => {
      console.log("pending...");
    },
    [fetchAsyncAgents.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully!", payload);
      return { ...state, agents: payload };
    },
    [fetchAsyncAgents.rejected]: () => {
      console.log("rejected :( ");
    },
  },
});

export const { addAgents } = agentsSlice.actions;
export const getAllAgents = (state) => state.agents.agents; // nome da slice (agents) e nome da propriedade (agents)
export default agentsSlice.reducer;
