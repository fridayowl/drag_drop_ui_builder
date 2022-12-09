import React, { useState } from 'react';
import styles from './style.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFavIconUrl, getMetaDescription, getMetaTags, getSiteTitle } from '../../../../redux/action/siteSettings';

const SiteSettings = () => {
  const state = useSelector(state => state.siteSettings);
  const [add, setAdd] = useState(false);
  const dispatch = useDispatch();

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {

      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        dispatch(getFavIconUrl(reader.result))
      }
    }
  };

  const handleChange = (e) => { console.log(e); dispatch(getMetaTags(e.target.value)) }

  return (
    <div className={styles.site_setting}>
      <label for="avatar">add favIcon:</label>
      {state.favIconUrl && <img width={"50px"} height={"50px"} src={state.favIconUrl} alt='' />}
      <input type="file" name="avatar" accept="image/png, image/jpeg" onChange={imageChange} />
      <h6>site title</h6>
      <input name="site_title" onChange={(e) => dispatch(getSiteTitle(e.target.value))} />
      <h6>meta-tag</h6>
      <div>
        <div>
          {state.metaTags.map((t, i) => <><span key={i}>{t}</span> {""}</>)}
        </div>
        {add && <input name="meta_tag" onBlur={handleChange} />}
        <button onClick={() => setAdd(!add)}>Add</button>
      </div>
      <h6>meta-description</h6>
      <textarea name="meta_description" onChange={(e) => dispatch(getMetaDescription(e.target.value))} />
    </div>
  )
}

export default SiteSettings