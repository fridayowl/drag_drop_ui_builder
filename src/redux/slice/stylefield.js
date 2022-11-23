import { createSlice } from '@reduxjs/toolkit';

export const stylefieldslice = createSlice({
    name: 'Style Fields',
    initialState: {
        font_size: "",
        font_family: "",
        font_weight: "",
        text_align: "",
        color: "",
        background_color: "",
        text_decoration: "",
        line_height: "",
        font_style: "",
        border:"",
        border_radius:"",
        text_transformation:"",
        margin:"",
        padding:"",
        with:"",
        height:"",
        background_image:"",
    },
    reducers: {
        font_size: (state, action) => {
            state.data = action.payload
        },
        font_family: (state, action) => {
            state.data = action.payload
        },
        font_weight: (state, action) => {
            state.data = action.payload
        },
        text_align: (state, action) => {
            state.data = action.payload
        },
        color: (state, action) => {
            state.data = action.payload
        },
        background_color: (state, action) => {
            state.data = action.payload
        },
        text_decoration: (state, action) => {
            state.data = action.payload
        },
        line_height: (state, action) => {
            state.data = action.payload
        },
        font_style: (state, action) => {
            state.data = action.payload
        },
        border: (state, action) => {
            state.data = action.payload
        },
        border_radius: (state, action) => {
            state.data = action.payload
        },
        text_transformation: (state, action) => {
            state.data = action.payload
        },
        margin: (state, action) => {
            state.data = action.payload
        },
        padding: (state, action) => {
            state.data = action.payload
        }
    },
})
