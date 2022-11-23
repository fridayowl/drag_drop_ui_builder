import React from 'react';
import { GrFormAdd } from 'react-icons/gr';
import styles from './editor.board.module.css';
import Header from './header/Header';
import EditorPanel from './editor-panel/index';
import { generateString } from '../../utils/generateString';
import HtmlPreview from './preview/htmlPreview';


const EditorBoard = () => {
    //css.cssRules[0].style.setProperty("text-align","center");
    const addContainer = () => {
        let parser = new DOMParser();
        let s_id = generateString();
        let c_id = generateString();
        let container = `
        <section id=${s_id} class="hm_section">
            <div id=${c_id} class="hm_container">
            </div>
        </section>
        `
        let htmlDoc = parser.parseFromString(container, 'text/html');
        document.getElementById("body").appendChild(htmlDoc.body.children[0]);
    }
    return (
        <>
            <Header />
            <div className={styles.main_wrapper}>
                <div className={styles.editPanel}>
                    <EditorPanel />
                </div>
                <div className={styles.preview}>
                    <HtmlPreview />
                    <div className={styles.add_element}>
                        <button onClick={() => addContainer()}>
                            <GrFormAdd />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditorBoard;