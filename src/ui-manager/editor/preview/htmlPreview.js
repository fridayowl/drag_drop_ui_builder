import React from 'react';
import styles from './preview.module.css';
import { htmlgenerator } from './../../../utils/htmlgenerator';
import { appendCss } from './../../../utils/appendCss';

const HtmlPreview = () => {
  let styleSheets = document.styleSheets;
  const findTag = (e) => {
    let pid = e.target.parentNode.id;
    let cid = e.target.className;
    console.log(e,{pid},{cid})
    for (var r in styleSheets) {
      if (styleSheets[r].title === "preview_css") {
        console.log(styleSheets[r])
      }
    }
  }

  const getAndSetData = (e) => {
    const type = JSON.parse(e.dataTransfer.getData("text"));
    let item = htmlgenerator(type);
    document.querySelector(`#${e.target.id}`).appendChild(item);
    let pid = e.target.id;
    if (type.name !== "col") {
      appendCss(pid, item, type);
    }
  }

  return (
    <div className={styles.htmlPreview} onClick={(e) => findTag(e)} draggable={false} onDragOver={(e) => e.preventDefault()} onDrop={getAndSetData} dangerouslySetInnerHTML={{
      __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <style title="preview_css">
          </style>
        </head>
        <body>
        <div id="body">
        </div>
        </body>
        </html>`
    }}>
    </div>
  )
}

export default HtmlPreview