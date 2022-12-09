import { siteSettingsSlice } from "../slice/siteSettings";

const { actions: slice } = siteSettingsSlice;

export const getSiteTitle = (data) => (dispatch) => {
    dispatch(slice.siteTitle(data))
}
export const getMetaTags = (data) => (dispatch) => {
    dispatch(slice.metaTags(data))
}
export const getMetaDescription = (data) => (dispatch) => {
    dispatch(slice.metaDescription(data))
}
export const getFavIconUrl = (data) => (dispatch) => {
    dispatch(slice.favIconUrl(data))
}