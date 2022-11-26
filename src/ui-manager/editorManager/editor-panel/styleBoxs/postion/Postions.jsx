import React from 'react'
import styles from './style.module.css';
import { useSelector } from 'react-redux';
import { UpdatedCssAppend } from './../../../../../utils/updateAndAppendCss';

const Postions = () => {
  const style = useSelector(state => state.styleFields);
  const handleChange = (e) => {
    let cssProperty = { [e.target.name]: e.target.value };
    UpdatedCssAppend(cssProperty, style);
  }
  return (
    <details open={true}>
      <summary><strong>Postions</strong></summary>
      <p>Positions</p>
      <div>
        <span>Positions:</span>
        <button>Static</button>
        <button>relative</button>
        <button>absloute</button>
      </div>
    </details>
  )
}

export default Postions