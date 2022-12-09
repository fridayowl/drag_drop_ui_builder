import React from 'react';
import { updateTagContent } from '../../../../../utils/updateTagContent';
import { useSelector } from 'react-redux';

const Tags = () => {
  const tagClassName = useSelector(state=>state.styleFields.styleClassName);
  const tagcontent = useSelector(state=>state.content.tag_content);
  return (
    <div>
        <textarea defaultValue={tagcontent} type="text" name="tag_content" onChange={(e)=>updateTagContent(e.target.value,tagClassName)}/>
    </div>
  )
}

export default Tags