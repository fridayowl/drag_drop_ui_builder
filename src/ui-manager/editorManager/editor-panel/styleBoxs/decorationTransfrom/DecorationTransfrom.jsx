import React from 'react'
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';
import { UpdatedCssAppend } from '../../../../../utils/updateAndAppendCss';
import { handlePostHtml } from '../../../../../services/api';

const DecorationTransfrom = () => {
    const siteSettings = useSelector(state => state.siteSettings);
    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
        handlePostHtml(siteSettings);
    }
    return (
        <details open={false}>
            <summary><strong>Decoration and transformation</strong></summary>
            <p>Text decoration:</p>
            <div className={styles.typograpy_box}>
                <button onClick={handleChange} name="text-decoration" value="underline">
                    Under line
                    <FaAlignLeft />
                </button>
                <button>
                    doted
                    <FaAlignCenter />
                </button>
                <button onClick={handleChange} name="text-decoration" value="none">
                    None
                    <FaAlignRight />
                </button>
                <button>
                    justify
                    <FaAlignJustify />
                </button>
            </div>
            <p>Text transformation:</p>
            <div className={styles.typograpy_box}>
                <button onClick={handleChange} name="text-transform" value="uppercase">
                    Uppercase
                    <FaAlignLeft />
                </button>
                <button onClick={handleChange} name="text-transform" value="capitalize">
                    Capitalize
                    <FaAlignCenter />
                </button>
                <button onClick={handleChange} name="text-transform" value="lowercase">
                    lower case
                    <FaAlignRight />
                </button>
            </div>
        </details>
    )
}

export default DecorationTransfrom