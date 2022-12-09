import React from 'react';
import styles from '../../../styles/panel.module.css';
import SiteSettings from './siteSettings/index';
import StyleBoxs from './styleBoxs/index';
import ElementBoxs from './elementBoxs/index';
import { FiSettings } from 'react-icons/fi';
import ContentEditor from './contentEditor';
import { useDispatch, useSelector } from 'react-redux';
import { getOpenEditorData } from '../../../redux/action/stylefield';

const EditorPanel = () => {
  const open = useSelector(state => state.styleFields);
  const dispatch = useDispatch()
  return (
    <div className={styles.editorPanel}>
      <div className={styles.tab_panel}>
        <button onClick={() => dispatch(getOpenEditorData("block"))}>
          Block
        </button>
        <button onClick={() => dispatch(getOpenEditorData("content"))}>
          Content
        </button>
        <button onClick={() => dispatch(getOpenEditorData("style"))}>
          Style
        </button>
        <button onClick={() => dispatch(getOpenEditorData("site_setting"))}>
          <FiSettings /> Site setting
        </button>
      </div>
      <div className={styles.elementContainer}>
        {open?.openEditor === "block" && <ElementBoxs />}
        {open?.openEditor === "content" && <ContentEditor />}
        {open?.openEditor === "style" && <StyleBoxs />}
        {open?.openEditor === "site_setting" && <SiteSettings />}
      </div>
    </div >
  )
}

export default EditorPanel