import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "../features/counter/counterSlice";
import { catalogReduser } from "./catalogSlice";

export const store = configureStore({
  reducer: {    
    catalog: catalogReduser,
  },
});
