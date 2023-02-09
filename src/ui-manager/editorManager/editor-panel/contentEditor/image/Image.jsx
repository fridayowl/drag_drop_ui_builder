import React, { useState } from 'react'
import { updateImgUrl } from '../../../../../utils/updateImge';
import { useSelector } from 'react-redux';
import { handlePostHtml } from '../../../../../services/api';

const Image = () => {
  const imgurl = useSelector(state => state.content.imageUrl);
  const siteSettings = useSelector(state => state.siteSettings);
  const [imageurl, setUrl] = useState(imgurl);

  const tagClassName = useSelector(state => state.styleFields.styleClassName);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        // you can update html file by calling api
        setUrl(reader.result)
         updateImgUrl(reader.result, tagClassName);
        handlePostHtml(siteSettings);
      }
    }
  };

  return (
    <div>
      <h6>Image add</h6>
      <img height={"150px"} src={imageurl} alt="" srcset="" />
      <input type="file" name="avatar" accept="image/png, image/jpeg,image/webp" onChange={(e)=>imageChange(e)} />
    </div>
  )
}

export default Image