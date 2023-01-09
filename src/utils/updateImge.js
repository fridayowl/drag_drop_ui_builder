import { getDoc } from "./getDocument";

export const updateImgUrl = (content,className) => {
    const doc = getDoc();
    const element = doc.querySelector(`.${className}`);
    element.src = content;
}