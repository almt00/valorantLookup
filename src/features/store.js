import { configureStore } from "@reduxjs/toolkit";
import agentsReducer from "./AgentsSlice";

export const store = configureStore({
  reducer: {
    agents: agentsReducer,
  },
});
