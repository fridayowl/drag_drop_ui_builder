import React, { useEffect } from 'react';
import styles from '../../../styles/preview.module.css';
import { htmlgenerator } from './../../../utils/htmlgenerator';
import { appendCss } from './../../../utils/appendCss';
import { useDispatch, useSelector } from 'react-redux';
import { getClassName, getId, getOpenEditorData } from './../../../redux/action/stylefield';
import { doc } from './preview.db';
import { getTagContent, getTagName } from '../../../redux/action/content';
import { getDoc } from '../../../utils/getDocument';

const HtmlPreview = () => {
  const state = useSelector(state => state.default);
  const dispatch = useDispatch();

  const OpenStyleEditor = (e) => {
    e.target.classList.remove("active");
    dispatch(getId(e.target.parentNode.id));
    dispatch(getClassName(e.target.className));
    dispatch(getTagContent(e.target.innerHTML));
    dispatch(getTagName(e.target.localName));
    dispatch(getOpenEditorData("style"));
  }
  const handleMouseOver = (e) => {
    // console.log(e.target.localName);
    e.target.classList.add("active");
  }
  const handleMouseOut = (e) => {
    e.target.classList.remove("active");
  }
  const onDragEnter = (e) => {
    e.target.classList.add("active")

  }
  const handledragOut = (e) => {
    e.target.classList.remove("active")
  }
  const getAndSetData = (e) => {
    let doc = getDoc();
    const type = JSON.parse(e.dataTransfer.getData("text"));
    let item = htmlgenerator(type);
    if (type.name === "section") {
      doc.getElementById("body").appendChild(item);
    }
    if (type.name !== "section") {
      doc.querySelector(`#${e.target.id}`).appendChild(item);
    }
    let pid = e.target.id;
    appendCss(pid, item, type);
  }
  useEffect(() => {
    const iFrame = document.getElementById("dropframe");
    const iFrameWindow = iFrame.contentWindow;

    iFrame.addEventListener("load", function (event) {
      iFrameWindow.document.body.addEventListener('dragstart', function (event) {
        event.preventDefault();
      });
      iFrameWindow.document.body.addEventListener('dragenter', function (event) {
        onDragEnter(event)
      });
      iFrameWindow.document.body.addEventListener('dragover', function (event) {
        event.preventDefault();
      });
      iFrameWindow.document.body.addEventListener('dragleave', function (event) {
        handledragOut(event)
      });
      iFrameWindow.document.body.addEventListener('click', function (event) {
        OpenStyleEditor(event)
      });
      iFrameWindow.document.body.addEventListener('drop', function (event) {
        getAndSetData(event)
      });
      iFrameWindow.document.body.addEventListener('mouseout', function (event) {
        handleMouseOut(event)
      });
      iFrameWindow.document.body.addEventListener('mouseover', function (event) {
        handleMouseOver(event)
      });
    });

    return () => {
      iFrameWindow.document.body.removeEventListener('dragenter', function (event) {
        onDragEnter(event)
      });
      iFrameWindow.document.body.removeEventListener('dragleave', function (event) {
        handledragOut(event)
      });
      iFrameWindow.document.body.removeEventListener('click', function (event) {
        OpenStyleEditor(event)
      });
      iFrameWindow.document.body.removeEventListener('drop', function (event) {
        getAndSetData(event)
      });
      iFrameWindow.document.body.removeEventListener('mouseout', function (event) {
        handleMouseOut(event)
      });
      iFrameWindow.document.body.removeEventListener('mouseover', function (event) {
        handleMouseOver(event)
      });
    }
  })

  return (

    <iframe width={state.width} height={state.height} frameBorder={"none"} className={styles.htmlPreview} id="dropframe" title='preview' srcDoc={doc.doc}>
    </iframe>
  )
}

export default HtmlPreview