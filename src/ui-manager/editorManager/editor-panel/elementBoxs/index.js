import React from 'react';
import styles from '../../../../styles/elements.module.css';
import Advanced from './advanced';
import Basic from './basics/index';
import Elements from './elements/Elements';

const ElementBoxs = () => {
  return (
    <div className={styles.block_list}>
          <Basic />
          <Elements/>
          <Advanced/>
        </div>
  )
}

export default ElementBoxs