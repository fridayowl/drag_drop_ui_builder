import React from 'react';
import margin from './margin.json';
import padding from './padding.json';
import { handlePostHtml } from '../../../../../services/api';
import styles from './specing.module.css';
import { UpdatedCssAppend } from '../../../../../utils/updateAndAppendCss';
import { useSelector } from 'react-redux';

const Specing = () => {
    const siteSettings = useSelector(state => state.siteSettings);
    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={true}>
            <summary><strong>Specing</strong></summary>
            <div className={styles.margin_box_container}>
                <h6>Margin:</h6>
                <div className={styles.margin_box}>
                    {
                        margin.db.map(({ title, name, unitName }) => (
                            <div className={styles.edit_box}>
                                <h6>{title}</h6>
                                <div className={styles.edit_box_content}>
                                    <input name={name} type="text" onChange={handleChange} onBlur={()=>handlePostHtml(siteSettings)}/>
                                    <span>{unitName}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.padding_box_container}>
                <h6>Padding:</h6>
                <div className={styles.padding_box}>
                    {
                        padding.db.map(({ title, name, unitName }) => (
                            <div className={styles.edit_box}>
                                <h6>{title}</h6>
                                <div className={styles.edit_box_content}>
                                    <input name={name} type="text" onChange={handleChange} onBlur={()=>handlePostHtml(siteSettings)}/>
                                    <span>{unitName}</span>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </details>
    )
}

export default Specing