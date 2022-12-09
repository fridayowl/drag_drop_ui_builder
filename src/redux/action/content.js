import {contentSlice } from "../slice/content";

const { actions: slice } = contentSlice;

export const getTagContent = (data) => (dispatch) => {
    dispatch(slice.tagContent(data))
}
export const getTagName = (data) => (dispatch) => {
    dispatch(slice.tagName(data))
}
