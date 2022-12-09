import { defaultSlice } from "../slice/default";

const { actions: slice } = defaultSlice;

export const getScreenSize = (data) => (dispatch) => {
    dispatch(slice.screenSize(data))
}
export const getOrientedMode = (data) => (dispatch) => {
    dispatch(slice.tabletOrientedMode(data))
}
