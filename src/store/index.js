import { createStore } from "redux";
import reducer from "../reducers";

const initialState = {
  message: "hello this is a message from the initial state",
  message2: "hello this is the second message from the initial state",
  color: "black"
};

export const store = createStore(reducer, initialState);
