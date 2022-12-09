import { createSlice } from "@reduxjs/toolkit";

export const siteSettingsSlice = createSlice({
    name: "siteSettings",
    initialState: {
        siteTitle: "",
        metaTags: [],
        metaDescription: "",
        favIconUrl: null
    },
    reducers: {
        siteTitle: (state, action) => {
            state.siteTitle = action.payload;
        },
        metaTags: (state, action) => {
            state.metaTags.push(action.payload);
        },
        metaDescription: (state, action) => {
            state.metaDescription = action.payload;
        }
        ,
        favIconUrl: (state, action) => {
            state.favIconUrl = action.payload;
        }
    }

})