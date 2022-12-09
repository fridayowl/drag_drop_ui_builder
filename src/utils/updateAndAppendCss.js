import { getDoc } from "./getDocument";

export const UpdatedCssAppend = (property, selector) => {
    let stringUnit = ["color", "background-color", "font-family", "text-decoration", "text-transform", "font-style", "text-align", "font-weight", "outline"];
    let pxUnit = ["margin-top", "margin-bottom", "margin-left", "margin-right", "padding-top", "padding-bottom", "padding-left", "padding-right", "font-size", "line-height", "letter-specing", "width", "height", "border-radius"];
    let document = getDoc();
    let s_Sheets = document.styleSheets[0];
    let selectorText = `#${selector.styleId} .${selector.styleClassName}`;
    let propertyName = Object.keys(property);
    let propertyValue = Object.values(property);
    for (const s in s_Sheets.cssRules) {
        if (s_Sheets.cssRules[s].selectorText !== undefined) {
            for (const punit in pxUnit) {
                if (pxUnit[punit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0] + "px");
                    }
                }
            }
            for (const sunit in stringUnit) {
                if (stringUnit[sunit] === propertyName[0]) {
                    if (s_Sheets.cssRules[s].selectorText === selectorText) {
                        s_Sheets.cssRules[s].style.setProperty(propertyName[0], propertyValue[0]);
                    }
                }
            }
        }

    }
}

