import React from 'react';
import db from './db.json';
import styles from './styles.module.css';

const Element = () => {
    return (
        <details open={true}>
            <summary><strong>Elements</strong></summary>
            {
                db.block_data.map((item => (
                    <button className={styles.element_item} draggable={true} onDragStart={e => e.dataTransfer.setData("text", JSON.stringify(item.data))}>
                        {item.icon}
                        <h4>{item.title}</h4>
                    </button>
                )))
            }
        </details>
    )
}

export default Element