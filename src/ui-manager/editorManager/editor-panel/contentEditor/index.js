import React from 'react';
import { useSelector } from 'react-redux';
import Image from './image/Image';
import Tags from './tags/Tags';

const ContentEditor = () => {
  const tagName = useSelector(state => state.content.tag_name)
  return (
    <div>
      {(tagName === "h1" || tagName === "p" || tagName === "button" || tagName === "span") && <Tags />}
      {tagName === "img" && < Image />}
    </div>
  )
}

export default ContentEditor;