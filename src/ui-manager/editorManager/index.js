import React from 'react';
import styles from '../../styles/editor.board.module.css';
import Header from './header/Header';
import EditorPanel from './editor-panel/index';
import HtmlPreview from './preview/htmlPreview';

const EditorBoard = () => {

    return (
        <div className={styles.editorManager}>
            <div className={styles.headerPanel}>
                <Header />
            </div>
            <div className={styles.main_wrapper}>
                <div className={styles.editPanel}>
                    <EditorPanel />
                </div>
                <div className={styles.previewBoard}>
                    <div className={styles.preview}>
                        <HtmlPreview />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditorBoard;