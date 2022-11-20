import React from 'react'

const htmlPreview = () => {
  return (
    <div onClick={(e) => cpature(e)} draggable={false} onDragOver={(e) => e.preventDefault()} onDrop={getData} dangerouslySetInnerHTML={{
        __html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>":"</title>
          <style>
          </style>
        </head>
        <body>
        <div id="body">
        </div>
        </body>
        </html>`
      }}>
      </div>
  )
}

export default htmlPreview