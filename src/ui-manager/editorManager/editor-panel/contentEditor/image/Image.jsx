import React from 'react'

const Image = () => {
  return (
    <div>
      <h6>Image add</h6>
      <input type="file" name="avatar" accept="image/png, image/jpeg,image/webp" />
    </div>
  )
}

export default Image