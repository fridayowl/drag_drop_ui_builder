import React from 'react';
import styles from '../../../../styles/style.box.module.css';
import Specing from './specing/Specing';
import AlignMents from './alignManagement/AlignMents';
import BorderManagement from './borderManagement/BorderManagement';
import DecorationTransfrom from './decorationTransfrom/DecorationTransfrom';
import ColorBackground from './colorBackground/ColorBackground';
import Typography from './typography/Typography';
import Postions from './postion/Postions';
import DisplayManager from './displayManager/DisplayManager';
import Shadow from './shadow/Shadow';
import Sizing from './sizingManager/Sizing';


const StyleBoxs = () => {
  return (
    <div className={styles.style_manager}>
      <DisplayManager/>
      <Shadow/>
      <Postions/>
      <Specing />
      <AlignMents />
      <Sizing/>
      <Typography/>
      <BorderManagement />
      <DecorationTransfrom />
      <ColorBackground />
    </div>
  )
}

export default StyleBoxs