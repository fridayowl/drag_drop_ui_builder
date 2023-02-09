import axios from "axios";
import { getDoc } from "../utils/getDocument";

export const handlePostHtml = async (siteSettings) => {
    let document = await getDoc();
    const elements = await document.querySelectorAll('.active');
    elements.forEach((element) => {
      element.classList.remove('active');
    });
    let htmlDoc = await document.getElementById("body").innerHTML.toString();
    let s_Sheets = await document.styleSheets[1];
    var css_data = '';
    for (const s in s_Sheets.cssRules) {
      if (s_Sheets.cssRules[s].cssText !== undefined)
        css_data +=
          s_Sheets.cssRules[s].cssText + "\n"
          ;
    }
    function addSpace(str) {
      return str.split(">").join('>\n');
    }
    const htmldata = await addSpace(htmlDoc);
    await axios.post('http://localhost:4000/getFile', {
      html: htmldata,
      css: css_data,
      others: {
        metatags: siteSettings.metaTags?.map(i => i + " "),
        metadesc: siteSettings?.metaDescription,
        favurl: siteSettings?.favIconUrl,
        sitetitle: siteSettings?.siteTitle
      }
    })
      .then((res) => {
        console.log(res);
      }, (err) => {
        console.log(err);
      });
  }