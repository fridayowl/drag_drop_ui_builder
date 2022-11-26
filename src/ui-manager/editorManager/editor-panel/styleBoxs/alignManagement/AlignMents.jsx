import React from 'react'
import styles from './alignment.module.css';
import { useSelector } from 'react-redux';
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';
import { FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';

const AlignMents = () => {
    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={true}>
            <summary><strong>Alignment</strong></summary>
            <div className={styles.typograpy_box_container}>
                <h6>Text align:</h6>
                <div className={styles.typograpy_box}>
                    <button onClick={handleChange} name="text-align" value="left">
                        Left
                        <FaAlignLeft />
                    </button>
                    <button onClick={handleChange} name="text-align" value="center">
                        center
                        <FaAlignCenter />
                    </button>
                    <button onClick={handleChange} name="text-align" value="right">
                        right
                        <FaAlignRight />
                    </button>
                    <button onClick={handleChange} name="text-align" value="justify">
                        justify
                        <FaAlignJustify />
                    </button>
                </div>
            </div>
        </details>
    )
}

export default AlignMents