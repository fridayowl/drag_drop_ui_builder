import React from 'react';
import styles from './preview.module.css';
import { htmlgenerator } from './../../../utils/htmlgenerator';
import { appendCss } from './../../../utils/appendCss';
import { useDispatch } from 'react-redux';
import { getClassName, getId, getOpenEditorData } from './../../../redux/action/stylefield';

const HtmlPreview = () => {
  const dispatch = useDispatch();

  const OpenStyleEditor = (e) => {
    dispatch(getId(e.target.parentNode.id));
    dispatch(getClassName(e.target.className));
    dispatch(getOpenEditorData(true));

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
    <div className={styles.htmlPreview} onClick={(e) => OpenStyleEditor(e)} draggable={false} onDragOver={(e) => e.preventDefault()} onDrop={getAndSetData} dangerouslySetInnerHTML={{
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