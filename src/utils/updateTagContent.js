import { getDoc } from "./getDocument";

export const updateTagContent = (content,className) => {
    const doc = getDoc();
    const element = doc.querySelector(`.${className}`);
    element.innerHTML = content;
    console.log(element)
}