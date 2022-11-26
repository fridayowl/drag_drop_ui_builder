import React from 'react'

const DisplayManager = () => {
  return (
    <details open={true}>
    <summary><strong>Display</strong></summary>
    <p>Display:</p>
    <div>
      <button>None</button>
      <button>Block</button>
      <button>hidden</button>
    </div>
  </details>
  )
}

export default DisplayManager