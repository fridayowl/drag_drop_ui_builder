import css from '../ui-manager/styleManager/css.json';

export const appendCss = (pr_id, elm, type) => {

  let styleSheets = document.styleSheets;
  let types = type;
  let getStyle = css.filter(item => item.tag === types.tag);
  let selector = `#${pr_id} .${elm.className} {${getStyle[0].style}}`;
  for (var r in styleSheets) {
    if (styleSheets[r].title === "preview_css") {
      let s_Sheets = styleSheets[r];
      s_Sheets.insertRule(selector, s_Sheets);
    }
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