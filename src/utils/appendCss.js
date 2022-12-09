import css from '../ui-manager/styleManager/css.json';
import { getDoc } from './getDocument';

export const appendCss = (pr_id, elm, type) => {

  let document = getDoc();
  let styleSheets = document.styleSheets[0];
  let types = type;
  if (types.name !== "section") {
    let getStyle = css.filter(item => item.tag === types.tag);
    let selector = `#${pr_id} .${elm.className} {${getStyle[0].style}}`;
    styleSheets.insertRule(selector, styleSheets.length);
  }
}


/**
 *   var styleStr = "";
  for(var i in cssjson){
      styleStr += i + " {\n"
      for(var j in cssjson[i]){
          styleStr += "\t" + j + ":" + cssjson[i][j] + ";\n"
      }
      styleStr += "}\n"
      console.log(styleStr)
  }
 */