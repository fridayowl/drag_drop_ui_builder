import React, { useState } from 'react';
import { CiText } from 'react-icons/ci';
import { CgImage } from 'react-icons/cg';
import { FiColumns } from 'react-icons/fi';
import { BsLayoutThreeColumns } from 'react-icons/bs';
import { FaBars, FaAlignCenter, FaAlignJustify, FaAlignLeft, FaAlignRight } from 'react-icons/fa';
import styles from './panel.module.css';

const EditorPanel = () => {
  const [tab, setTabs] = useState("block");
  const [inputs, setInputs] = useState({});
  const handleChange = e => setInputs(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
  const handleClick = (arg) => {
    setTabs(arg)
  };
  const drag = (ev, data) => {
    ev.dataTransfer.setData("text", data);
  };

  let style = {
    "font_size": "",
    "font_family": "",
    "font_weight": "",
    "text_align": "",
    "color": "",
    "background-color": "",
    "text_decoration": "",
    "line_height": "",
    "font-style": "italic"
  };

  let margin_data = [
    {
      id: 1,
      title: "Top",
      name: "margin_top",
      unitName: "px",
    },
    {
      id: 2,
      title: "Bottom",
      name: "margin_bottom",
      unitName: "px",
    },
    {
      id: 3,
      title: "Left",
      name: "margin_left",
      unitName: "px",
    },
    {
      id: 4,
      title: "Right",
      name: "margin_right",
      unitName: "px",
    }
  ];
  let padding_data = [
    {
      id: 1,
      title: "Top",
      name: "padding_top",
      unitName: "px",
    },
    {
      id: 2,
      title: "Bottom",
      name: "padding_bottom",
      unitName: "px",
    },
    {
      id: 3,
      title: "Left",
      name: "padding_left",
      unitName: "px",
    },
    {
      id: 4,
      title: "Right",
      name: "margin_right",
      unitName: "px",
    }
  ];
  let font_data = [
    {
      id: 1,
      title: "Font size",
      name: "font_size",
      unitName: "px",
    },
    {
      id: 2,
      title: "Font weight",
      name: "font_weight",
      unitName: "px",
    },
    {
      id: 3,
      title: "Line height",
      name: "line_height",
      unitName: "px",
    }
  ];
  let block_data = [
    {
      id: 1,
      icon: <CiText />,
      title: "Heading",
      data: {
        name: "typography",
        tag: "h1"
      }
    },
    {
      id: 2,
      icon: <CiText />,
      title: "Paragraph",
      data: {
        name: "typography",
        tag: "p"
      }
    },
    {
      id: 3,
      icon: <CgImage />,
      title: "Photo/media",
      data: {
        name: "photo",
        tag: "img"
      }
    },
  ]
  let col_data = [
    {
      id: 1,
      icon: <BsLayoutThreeColumns />,
      data: {
        name: "col",
        tag: 1
      },
      title: "12/12",
    },
    {
      id: 2,
      icon: <FiColumns />,
      data: {
        name: "col",
        tag: 2
      },
      title: "6/12",
    },
    {
      id: 3,
      icon: <FiColumns />,
      data: {
        name: "col",
        tag: 3
      },
      title: "4/12",
    },
    {
      id: 4,
      icon: <FiColumns />,
      data: {
        name: "col",
        tag: 4
      },
      title: "3/12",
    },
    {
      id: 5,
      icon: <FiColumns />,
      data: {
        name: "col",
        tag: 6
      },
      title: "2/12",
    }
  ]
  return (
    <div className={styles.editorPanel}>
      <div className={styles.tab_panel}>
        <button onClick={() => handleClick("block")}>Block</button>
        <button onClick={() => handleClick("style")}>Style</button>
        <button onClick={() => handleClick("site_setting")}>Site setting</button>
      </div>
      {tab === "block" && <div className={styles.block_list}>
        <details open={true}>
          <summary><strong>Columns</strong></summary>
          {
            col_data.map((item => (
              <button draggable={true} onDragStart={e => drag(e, JSON.stringify(item.data))}>
                {item.icon}
                <h4>{item.title}</h4>
              </button>
            )))
          }
        </details>
        <details open={true}>
          <summary><strong>Elements</strong></summary>
          {
            block_data.map((item => (
              <button draggable={true} onDragStart={e => drag(e, JSON.stringify(item.data))}>
                {item.icon}
                <h4>{item.title}</h4>
              </button>
            )))
          }
        </details>
      </div>}
      {tab === "style" && <div className={styles.style_manager}>
        <details open={true}>
          <summary><strong>Specing</strong></summary>
          <div className={styles.margin_box_container}>
            <h6>Margin:</h6>
            <div className={styles.margin_box}>
              {
                margin_data.map(({ title, name, unitName }) => (
                  <div className={styles.edit_box}>
                    <h6>{title}</h6>
                    <div className={styles.edit_box_content}>
                      <input name={name} type="text" onChange={handleChange} />
                      <span>{unitName}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className={styles.padding_box_container}>
            <h6>Padding:</h6>
            <div className={styles.padding_box}>
              {
                padding_data.map(({ title, name, unitName }) => (
                  <div className={styles.edit_box}>
                    <h6>{title}</h6>
                    <div className={styles.edit_box_content}>
                      <input name={name} type="text" onChange={handleChange} />
                      <span>{unitName}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </details>
        <details open={true}>
          <summary><strong>Alignment</strong></summary>
          <div className={styles.typograpy_box_container}>
            <h6>Text align:</h6>
            <div className={styles.typograpy_box}>
              <button onClick={handleChange} name="text_align" value="left">
                Left
                <FaAlignLeft />
              </button>
              <button onClick={handleChange} name="text_align" value="center">
                center
                <FaAlignCenter />
              </button>
              <button onClick={handleChange} name="text_align" value="right">
                right
                <FaAlignRight />
              </button>
              <button onClick={handleChange} name="text_align" value="justify">
                justify
                <FaAlignJustify />
              </button>
            </div>
          </div>
        </details>
        <details open={true}>
          <summary><strong>Typography</strong></summary>
          <div className={styles.typograpy_box_container}>
            <h6>Typograpy:</h6>
            <div className={styles.typograpy_box}>
              <div className={styles.edit_box}>
                <h6>font family</h6>
                <div className={styles.edit_box_content}>
                  <select type="select" name="font_family" onChange={handleChange} value="">
                    <option value="san serif">san sarif</option>
                    <option value="popin">popin</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className={styles.edit_box}>
                <h6>font style</h6>
                <div className={styles.edit_box_content}>
                  <select type="select" name="font_style" onChange={handleChange} value="">
                    <option value="san serif">normal</option>
                    <option value="popin">italic</option>
                    <option value="opel">Opel</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              {
                font_data.map(({ title, name, unitName }) => (
                  <div className={styles.edit_box}>
                    <h6>{title}</h6>
                    <div className={styles.edit_box_content}>
                      <input name={name} type="text" onChange={handleChange} />
                      <span>{unitName}</span>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </details>
        <details open={true}>
          <summary><strong>Border</strong></summary>
          <p>Border</p>
          <div>
            <span>size:</span>
            <input type="text" name="border_unit_size" onChange={handleChange} />{"px "}
            <span>type:</span>
            <select type="select" name="border_type" onChange={handleChange} >
              <option value="san serif">san sarif</option>
              <option value="popin">popin</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <span>color:</span>
            <input type="color" name="border_color" defaultValue="#ff0000" onChange={handleChange} />
          </div>
        </details>
        <details open={true}>
          <summary><strong>Decoration and transformation</strong></summary>
          <p>Text decoration:</p>
          <div className={styles.typograpy_box}>
            <button onClick={handleChange} name="text_decoration" value="underline">
              Under line
              <FaAlignLeft />
            </button>
            <button>
              doted
              <FaAlignCenter />
            </button>
            <button>
              right
              <FaAlignRight />
            </button>
            <button>
              justify
              <FaAlignJustify />
            </button>
          </div>
          <p>Text transformation:</p>
          <div className={styles.typograpy_box}>
            <button onClick={handleChange} name="text_decoration" value="underline">
              Uppercase
              <FaAlignLeft />
            </button>
            <button>
              Capitalize
              <FaAlignCenter />
            </button>
            <button>
              lower case
              <FaAlignRight />
            </button>
          </div>
        </details>
        <details open={true}>
          <summary><strong>color and background</strong></summary>
          <p>color and background</p>
          <div>
            <span>color:</span>
            <input type="color" name="color" defaultValue="#ff0000" onChange={handleChange} />
          </div>
          <div>
            <span>background:</span>
            <input type="color" name="background_color" defaultValue="#ff0000" onChange={handleChange} />
          </div>
        </details>
      </div>}
      {tab === "site_setting" && <div className={styles.site_setting}>
        <button>add favIcon</button>
        <button>site title</button>
        <button>meta-content</button>
      </div>}
    </div>
  )
}

export default EditorPanel