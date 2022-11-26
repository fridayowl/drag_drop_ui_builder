import React from 'react';
import styles from '../../../../styles/elements.module.css';
import Coloumns from './coloumns/Coloumns';
import Elements from './elements/Elements';

const ElementBoxs = () => {
  return (
    <div className={styles.block_list}>
          <Coloumns />
          <Elements/>
        </div>
  )
}

export default ElementBoxs