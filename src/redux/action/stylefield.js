import { stylefieldslice } from './../slice/stylefield';

const { actions: slice } = stylefieldslice;

export const getId = (data) => (dispatch) => {
    dispatch(slice.styleId(data))
}
export const getClassName = (data) => (dispatch) => {
    dispatch(slice.styleClassName(data))
}
export const getStyleData = (data) => (dispatch) => {
    dispatch(slice.styleData(data))
}
export const getOpenEditorData = (data) => (dispatch) => {
    dispatch(slice.openEditor(data))
}



