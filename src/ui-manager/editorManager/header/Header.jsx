import React, { useEffect,useState } from 'react';
import { SlScreenDesktop, SlScreenTablet } from 'react-icons/sl';
import { CiMobile3 } from 'react-icons/ci';
import { IoIosTabletLandscape } from 'react-icons/io';
import { RiSave3Line, RiCodeSSlashLine, RiDownload2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { BsFillEyeFill, BsLaptop } from 'react-icons/bs';
import styles from './header.module.css';
import { getOrientedMode, getScreenSize } from '../../../redux/action/default';
import { getDoc } from '../../../utils/getDocument';
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { PrismCode } from 'react-prism';
import axios from 'axios';

const Header = () => {

  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [showCode, setShowCode] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
    
  }, []);

  const dispatch = useDispatch();
  const screenSize = (width, height) => {
    dispatch(getScreenSize({
      width: width,
      height: height
    }))
  }

  const handlePostHtml = async() => {
    let document = await getDoc()
    setShowCode(!showCode);
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
    const htmldata = await addSpace(htmlDoc)
    setHtml(htmldata);
    setCss(css_data);

   await axios.post('http://localhost:4000/getFile', {
      html: html,
      css: css,
      others:{
        metatags:"",
        metadesc:"",
        favurl:"",
        sitetitle:""
      }
    })
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }

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
        <button> <BsFillEyeFill /> Preview</button>
        <button onClick={() => handlePostHtml()}> <RiCodeSSlashLine /> Code</button>
        <button> <RiDownload2Line /> Download</button>
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