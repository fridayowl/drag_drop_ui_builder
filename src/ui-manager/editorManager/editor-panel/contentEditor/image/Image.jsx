import React, { useState } from 'react'
import { updateImgUrl } from '../../../../../utils/updateImge';
import { useSelector } from 'react-redux';

const Image = () => {
  const imgurl = useSelector(state => state.content.imageUrl);

  const [imageurl, setUrl] = useState(imgurl);

  const tagClassName = useSelector(state => state.styleFields.styleClassName);
  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      let reader = new FileReader()
      reader.readAsDataURL(e.target.files[0])
      reader.onload = () => {
        setUrl(reader.result)
        updateImgUrl(reader.result, tagClassName);
      }
    }
  };

  return (
    <div>
      <h6>Image add</h6>
      <img src={imageurl} alt="" srcset="" />
      <input type="file" name="avatar" accept="image/png, image/jpeg,image/webp" onChange={imageChange} />
    </div>
  )
}

export default Image