import { combineReducers } from "redux";
import { contentSlice } from "../slice/content";
import { defaultSlice } from "../slice/default";
import { siteSettingsSlice } from "../slice/siteSettings";
import { stylefieldslice } from "../slice/stylefield";

export const rootReducer = combineReducers({
    styleFields: stylefieldslice.reducer,
    default: defaultSlice.reducer,
    content: contentSlice.reducer,
    siteSettings: siteSettingsSlice.reducer
});
