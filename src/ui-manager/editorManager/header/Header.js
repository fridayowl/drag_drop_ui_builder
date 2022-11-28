import React from 'react';
import { SlScreenDesktop, SlScreenTablet } from 'react-icons/sl';
import { CiMobile3 } from 'react-icons/ci';
import { RiSave3Line,RiCodeSSlashLine,RiDownload2Line } from 'react-icons/ri';
import { BsFillEyeFill } from 'react-icons/bs';
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.editor_header}>
      <div>
        <h4>Ui Editor Panel</h4>
        <button><RiSave3Line /> Save</button>
      </div>
      <div>
        <button>
          <CiMobile3 />
        </button>
        <button>
          <SlScreenTablet />
        </button>
        <button>
          <SlScreenDesktop />
        </button>
      </div>
      <div>
        <button> <BsFillEyeFill /> Preview</button>
        <button> <RiCodeSSlashLine/> Code</button>
        <button> <RiDownload2Line/> Download</button>
      </div>
    </header>
  )
}

export default Header