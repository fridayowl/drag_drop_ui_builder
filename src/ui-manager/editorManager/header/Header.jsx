import React, { useEffect, useState } from 'react';
import { SlScreenDesktop, SlScreenTablet } from 'react-icons/sl';
import { CiMobile3 } from 'react-icons/ci';
import { IoIosTabletLandscape } from 'react-icons/io';
import { RiSave3Line, RiCodeSSlashLine, RiDownload2Line } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { BsFillEyeFill, BsLaptop } from 'react-icons/bs';
import styles from './header.module.css';
import { getOrientedMode, getScreenSize } from '../../../redux/action/default';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { PrismCode } from 'react-prism';
import { handlePostHtml } from '../../../services/api';
import { getDoc } from '../../../utils/getDocument';

const Header = () => {

  const siteSettings = useSelector(state => state.siteSettings);

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleShowCode = () => {
    let document = getDoc();
    let htmlDoc = document.getElementById("body").innerHTML.toString();
    let s_Sheets = document.styleSheets[1];
    var css_data = '';
    for (const s in s_Sheets.cssRules) {
      if (s_Sheets.cssRules[s].cssText !== undefined)
        css_data +=
          s_Sheets.cssRules[s].cssText + "\n"
          ;
    }
    setHtml(htmlDoc);
    setCss(css_data);
  }

  const dispatch = useDispatch();
  const screenSize = (width, height) => {
    dispatch(getScreenSize({
      width: width,
      height: height
    }))
  }


  useEffect(() => {
    const iFrame = document.getElementById("dropframe");
    const iFrameWindow = iFrame.contentWindow;
    iFrame.addEventListener("load", function (e) {
      iFrameWindow.document.getElementById("body").addEventListener("DOMSubtreeModified", (e) => {
        handlePostHtml(siteSettings);
        handleShowCode();
      });
      iFrameWindow.document.getElementById("body").addEventListener("input", function () {
        handlePostHtml(siteSettings);
        handleShowCode();
      });
    });
  },)


  return (
    <header className={styles.editor_header}>
      <div className={styles.left_side_content}>
        <h4>Ui Editor Panel</h4>
        <button><RiSave3Line /> Save</button>
      </div>
      <div className={styles.sizeButtonContainer}>
        <button onClick={() => screenSize("320px", "526px")}>
          <CiMobile3 />
        </button>
        <button onClick={() => screenSize("375px", "526px")}>
          <CiMobile3 />
        </button>
        <button onClick={() => screenSize("425px", "526px")}>
          <CiMobile3 />
        </button>
        <button onClick={() => screenSize("768px", "526px")}>
          <SlScreenTablet />
        </button>
        <button onClick={() => dispatch(getOrientedMode("landscape"))}>
          <IoIosTabletLandscape />
        </button>
        <button onClick={() => screenSize("1024px", "100%")}>
          <BsLaptop />
        </button>
        <button onClick={() => screenSize("1440px", "100%")}>
          <SlScreenDesktop />
        </button>
      </div>
      <div className={styles.button_container}>
        <button onClick={() => { window.open("http://localhost:4000/index.html", "_blank") }}> <BsFillEyeFill /> Preview</button>
        <button onClick={() => setShowCode(!showCode)}> <RiCodeSSlashLine /> Code</button>
        <a target="_blank" href="http://localhost:4000/output.zip" download="output.zip" rel="noreferrer"><RiDownload2Line /> Download</a>
      </div>
      {
        showCode && <div className={styles.codePreview}>
          <div className="code_header">
            <h4>Code preview</h4>
            <button onClick={() => setShowCode(!showCode)}>close</button>
          </div>
          <div className={styles.code_container}>
            <div className={styles.code_box}>
              <h4>Html</h4>
              <div className={styles.codeContent}>

                <PrismCode component="pre" className="language-markup">
                  {html}
                </PrismCode>
              </div>
            </div>
            <div className={styles.code_box}>
              <h4>Css</h4>
              <PrismCode component="pre" className="language-css">
                {css}
              </PrismCode>
            </div>
          </div>
        </div>
      }
    </header>
  )
}

export default Header