import { getDoc } from "./getDocument";

let stringUnit = ["color", "background-color", "font-family", "text-decoration", "text-transform", "font-style", "text-align", "font-weight", "outline"];

let pxUnit = ["margin-top", "margin-bottom", "margin-left", "margin-right", "padding-top", "padding-bottom", "padding-left", "padding-right", "font-size", "line-height", "letter-specing", "width", "height", "border-radius"];

export const appendMediaCss = (property, selector, defaults) => {
    let document = getDoc();
    let s_Sheets = document.styleSheets[1];
    console.log(s_Sheets.cssRules)
    let propertyName = Object.keys(property);
    let propertyValue = Object.values(property);
    let selectorText1 = `#${selector.styleId} .${selector.styleClassName}`;
    let selectorText2 = `#${selector.styleId}`;
    let className = selector.styleClassName;
    if (className === "body" || className === "section" || className === "container" || className === "col-1" || className === "col-2" || className === "col-4" || className === "col-6") {
        for (const s in s_Sheets.cssRules) {
            for (const punit in pxUnit) {
                if (pxUnit[punit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText2) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0] + "px");
                    }
                    else {
                        s_Sheets.insertRule(`#${selector.styleId} { ${propertyName[0]}: ${propertyValue[0]}px }`, s_Sheets.cssRules[s].length);
                    }
                }
            }
            for (const sunit in stringUnit) {
                if (stringUnit[sunit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText2) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0]);
                    }
                    else {
                        s_Sheets.insertRule(`#${selector.styleId} { ${propertyName[0]}: ${propertyValue[0]}}`, s_Sheets.length);
                    }
                }
            }
        }
    }
    else {
        for (const s in s_Sheets.cssRules) {
            for (const punit in pxUnit) {
                if (pxUnit[punit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText1) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0] + "px");
                    }
                }
            }
            for (const sunit in stringUnit) {
                if (stringUnit[sunit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText1) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0]);
                    }
                }
            }
        }
    }
}