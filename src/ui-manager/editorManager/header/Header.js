import React, { useState } from 'react';
import { SlScreenDesktop, SlScreenTablet } from 'react-icons/sl';
import { CiMobile3 } from 'react-icons/ci';
import { IoIosTabletLandscape } from 'react-icons/io';
import { RiSave3Line, RiCodeSSlashLine, RiDownload2Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { BsFillEyeFill, BsLaptop } from 'react-icons/bs';
import styles from './header.module.css';
import { getOrientedMode, getScreenSize } from '../../../redux/action/default';

const Header = () => {
  const dispatch = useDispatch();
  const screenSize = (width, height) => {
    dispatch(getScreenSize({
      width: width,
      height: height
    }))
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
        <button> <RiCodeSSlashLine /> Code</button>
        <button> <RiDownload2Line /> Download</button>
      </div>
    </header>
  )
}

export default Header