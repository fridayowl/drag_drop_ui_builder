import { createSlice } from "@reduxjs/toolkit";

export const contentSlice = createSlice({
    name: "content",
    initialState: {
        tag_content: "",
        tag_name: "",
        imageUrl:""
    },
    reducers: {
        tagContent: (state, action) => {
            state.tag_content = action.payload;
        },
        imageUrl: (state, action) => {
            state.imageUrl = action.payload;
        },
        tagName: (state, action) => {
            state.tag_name = action.payload;
        }
    }

})