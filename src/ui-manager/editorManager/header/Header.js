import React from 'react'
import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.editor_header}>
      <div>
        <h4>Ui Editor Panel</h4>
        <button>Save</button>
      </div>
      <div>
        <button>
          Mobile
        </button>
        <button>
          Tablet
        </button>
        <button>
          Desktop
        </button>
      </div>
      <div>
        <button>Preview</button>
        <button>Code</button>
        <button>Download</button>
      </div>
    </header>
  )
}

export default Header