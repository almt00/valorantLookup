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

export const fetchAsyncAgentDetail = createAsyncThunk(
  "agents/fetchAsyncAgentDetail",
  async (id) => {
    const response = await fetch(`https://valorant-api.com/v1/agents/${id}`);
    let actualData = await response.json();
    //actualData = actualData.data;
    return actualData;
  }
);

const initialState = {
  agents: {},
  selectedAgent: {},
};

const agentsSlice = createSlice({
  name: "agents",
  initialState,
  reducers: {
    addAgents: (state, { payload }) => {
      state.agents = payload;
    },
    removeSelectedAgent: (state) => {
      state.selectedAgent = {};
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
    [fetchAsyncAgentDetail.fulfilled]: (state, { payload }) => {
      console.log("fetched successfully!", payload);

      return { ...state, selectedAgent: payload };
    },
  },
});

export const { removeSelectedAgent } = agentsSlice.actions;
export const getAllAgents = (state) => state.agents.agents; // nome da slice (agents) e nome da propriedade (agents)
export const getSelectedAgent = (state) => state.agents.selectedAgent;

export default agentsSlice.reducer;
