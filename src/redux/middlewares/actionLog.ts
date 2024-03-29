import { Middleware } from "redux";

export const actionLog: Middleware = (store) => (next) => (action) => {
  //console.log("Redux store info:");
  //console.log("current states: ", store.getState());
  //console.log("fire action ", action);
  next(action);
  //console.log("updated states: ", store.getState());
};
