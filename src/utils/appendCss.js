import css from '../ui-manager/styleManager/css.json';
import { getDoc } from './getDocument';

export const appendCss = (pr_id, elm, type) => {
  let document = getDoc();
  let styleSheets = document.styleSheets[1];
  let types = type;
  let getStyle = css.filter(item => item.tag === types.tag);
  let selector = `#${pr_id} .${elm.className} {${getStyle[0].style}}`;
  styleSheets.insertRule(selector, styleSheets.length);

}
