import { combineReducers } from "redux";
import { stylefieldslice } from "../slice/stylefield";

export const rootReducer = combineReducers({ styleFields: stylefieldslice.reducer});
