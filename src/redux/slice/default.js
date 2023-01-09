import { createSlice } from "@reduxjs/toolkit";

export const defaultSlice = createSlice({
    name: "default",
    initialState: {
        width: "100%",
        height: "100%",
        tabletOriented: null,
        preview: false,
        showCode: false
    },
    reducers: {
        viewPort: (state, action) => {
            state.view = action.payload;
        },
        screenSize: (state, action) => {
            state.width = action.payload.width;
            state.height = action.payload.height;
        },
        tabletOrientedMode: (state, action) => {
            state.tabletOriented = action.payload;
        }
    }

})