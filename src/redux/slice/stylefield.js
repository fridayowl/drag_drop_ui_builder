import { createSlice } from '@reduxjs/toolkit';

export const stylefieldslice = createSlice({
    name: 'Style Fields',
    initialState: {
        styleId:"",
        styleClassName:"",
        style:"",
        openEditor:"block",
    },
    reducers: {
        styleId: (state, action) => {
            state.styleId = action.payload
        },
        styleClassName: (state, action) => {
            state.styleClassName = action.payload
        },
        styleData: (state, action) => {
            state.style = action.payload
        },
        openEditor: (state, action) => {
            state.openEditor = action.payload
        }
    },
})
