import React, { useState } from 'react';
import styles from '../../../styles/panel.module.css';
import SiteSettings from './siteSettings/index';
import StyleBoxs from './styleBoxs/index';
import ElementBoxs from './elementBoxs/index';
import { FiSettings } from 'react-icons/fi';
import ContentEditor from './contentEditor';

const EditorPanel = () => {
  const [tab, setTabs] = useState("block");

  return (
    <div className={styles.editorPanel}>
      <div className={styles.tab_panel}>
        <button onClick={() => setTabs("block")}>
          Block
        </button>
        <button onClick={() => setTabs("content")}>
          Content
        </button>
        <button onClick={() => setTabs("style")}>
          Style
        </button>
        <button onClick={() => setTabs("site_setting")}>
          <FiSettings /> Site setting
        </button>
      </div>
      {tab === "block" && <ElementBoxs />}
      {tab === "content" && <ContentEditor />}
      {tab === "style" && <StyleBoxs />}
      {tab === "site_setting" && <SiteSettings />}
    </div>
  )
}

export default EditorPanel