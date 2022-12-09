import React from 'react'
import db from './db.json';
import styles from './styles.module.css';

const Basic = () => {
    return (
        <details open={true}>
            <summary><strong>Basic</strong></summary>
            {
                db.map((item => (
                    <button className={styles.coloumn} draggable={true} onDragStart={e => e.dataTransfer.setData("text", JSON.stringify(item.data))}>
                        {item.icon}
                        <h4>{item.title}</h4>
                    </button>
                )))
            }
        </details>
    )
}

export default Basic