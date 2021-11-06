import { combineReducers } from "redux";
import auth from "./auth";
import message from "./message";
import user from "./user";
import shop from "./shop";

export default combineReducers({
  auth,
  message,
  user,
  shop
});
