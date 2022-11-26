import { generateString } from './generateString';
import tagdata from '../ui-manager/tagManager/tag.json';
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
    else  {
        let tag = document.createElement(data.tag);
        tag.id = id;
        tag.className = className;
        tag.textContent = tagData[0].text;
        return tag;
    }
}