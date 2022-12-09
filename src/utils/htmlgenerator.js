import { generateString } from './generateString';
import tagdata from '../ui-manager/tagManager/tag.json';
import { getDoc } from './getDocument';

export const htmlgenerator = (arg) => {
    let data = arg;
    let tagData = tagdata.filter((item => item.tag === data.tag));
    let id = generateString();
    let className = generateString();
    if (data.name === "col") {
        let col = document.createElement("div");
        col.id = id;
        col.className = className;
        col.className = "row";
        for (let i = 0; i < data.tag; i++) {
            let id = generateString();
            let div = document.createElement("div");
            div.id = id;
            div.className = `col-${data.tag}`;
            col.appendChild(div);
        }
        return col;
    }
    else if (data.name === "section") {
        let s_id = generateString();
        let c_id = generateString();
        let sec = document.createElement("section");
        let con = document.createElement("div");
        sec.id = s_id;
        con.id = c_id;
        sec.className = "section";
        con.className = "container";
        sec.appendChild(con);
        return sec;
    }
    else if (data.name === 'typography') {
        let typography = document.createElement(data.tag);
        typography.id = id;
        typography.className = className;
        typography.textContent = tagData[0].text;
        return typography;
    }
    else if (data.name === 'photo') {
        let image = document.createElement(data.tag);
        image.id = id;
        image.className = className;
        image.src = tagData[0].defaultSrc;
        return image;
    }
    else if (data.name === 'input') {
        let input = document.createElement(data.tag);
        input.id = id;
        input.className = className;
        input.placeholder = tagData[0].data.placeholder;
        input.type = tagData[0].data.type;
        return input;
    }
    else {
        let tag = document.createElement(data.tag);
        tag.id = id;
        tag.className = className;
        tag.textContent = tagData[0].text;
        return tag;
    }
}