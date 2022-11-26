import React from 'react';
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import db from './db.json';
import { UpdatedCssAppend } from '../../../../../utils/updateAndAppendCss';

const Typography = () => {

    const style = useSelector(state => state.styleFields);
    const handleChange = (e) => {
        let cssProperty = { [e.target.name]: e.target.value };
        UpdatedCssAppend(cssProperty, style);
    }
    return (
        <details open={true}>
            <summary><strong>Typography</strong></summary>
            <div className={styles.typograpy_box_container}>
                <h6>Typograpy:</h6>
                <div className={styles.typograpy_box}>
                    <div className={styles.edit_box}>
                        <h6>font family</h6>
                        <div className={styles.edit_box_content}>
                            <select type="select" name="font-family" onChange={handleChange}>
                                <option value="sans-serif">san sarif</option>
                                <option value="popin">popin</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles.edit_box}>
                        <h6>font style</h6>
                        <div className={styles.edit_box_content}>
                            <select type="select" name="font-style" onChange={handleChange}>
                                <option value="normal">normal</option>
                                <option value="italic">italic</option>
                                <option value="opel">Opel</option>
                                <option value="audi">Audi</option>
                            </select>
                        </div>
                    </div>
                    {
                        db.map(({ title, name, unitName }) => (
                            <div className={styles.edit_box}>
                                <h6>{title}</h6>
                                <div className={styles.edit_box_content}>
                                    <input name={name} type="text" onChange={handleChange} />
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

export default Typography