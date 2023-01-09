import {contentSlice } from "../slice/content";

const { actions: slice } = contentSlice;
//getImageUrl
export const getTagContent = (data) => (dispatch) => {
    dispatch(slice.tagContent(data))
}
export const getImageUrl = (data) => (dispatch) => {
    dispatch(slice.imageUrl(data))
}
export const getTagName = (data) => (dispatch) => {
    dispatch(slice.tagName(data))
}
