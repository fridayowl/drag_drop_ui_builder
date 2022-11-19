import React, { useState } from 'react'
import './App.css'
import { saveAs } from 'file-saver';

const App = () => {
  const [count, setcount] = useState(1);
  const [tab, setTab] = useState("elm");
  const [edit, setEdit] = useState();
  const [styles, setStyle] = useState([]);
  console.log(styles)
  // function getAppliedSelectors(node) {
  //   var selectors = [];


  //   var i = rules.length;
  //   while (i--) {
  //     selectors.push(rules[i].selectorText);
  //   }
  //   return selectors;
  // }

  const [data, setdata] = useState({
    site_title: "example site",
    heading_type: "h1",
    text: "Heading text",
    color: "#ffff",
    background: "gainsboro",
    size: "",
    padding_top: "0",
    padding_right: "0",
    padding_bottom: "0",
    padding_left: "0",
    textAlign: "start"
  });

  const style =
    `
    .container {
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
      margin: 0 auto;
    }
    
    .hm_row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .hm_col-3 {
      width: 375px;
    }
    .hm_2{
      font-size:22px;
      color:red;
    }
    .image_card{
      width: 100%;
      height: 100%;
    }
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
  }
  
  li {
    float: left;
  }
  
  li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
  }
  
  li a:hover:not(.active) {
    background-color: #111;
  }
  
  .active {
    background-color: #04AA6D;
  }

  .card {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 90%;
    margin:10px;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  .applo{
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    cursor:default;
  }

  .card_body {
    padding: 2px 16px;
  }
  
  @media screen and (max-width:425px) {
    .hm_col_3 {
      border: 2px dashed rgb(152, 150, 150);
    }  
  }
  `

  let db = localStorage;

  const onChange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    })
  }
  const tag = `<${data.heading_type} class="hm_heading">${data.text}</${data.heading_type}>`;

  const section = `
  <section id="sec_${parseInt(Math.random() * (1000 - 0) + count)}" class="hm_section">
    <div id="sec_${parseInt(Math.random() * (1000 - 0) + count)}" class="container">
    </div>
  </section>`;
  const row = `
  <div id="row_${parseInt(Math.random() * (1000 - 2) + count)}" class="hm_row">
  </div>
  `
  const header = `
  <ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li style="float:right"><a class="active" href="#about">About</a></li>
</ul>
  `
  const col = `
  <div id="col_${parseInt(Math.random() * (1000 - 3) + count)}" class="hm_col_3">
  </div>

  <div id="col_${parseInt(Math.random() * (1000 - 4) + count)}" class="hm_col_3">
  </div>
  
  <div id="col_${parseInt(Math.random() * (1000 - 5) + count)}" class="hm_col_3">
  </div>
  `
  const card = `
  <div class="card">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" style="width:100%">
  <div class="card_body">
    <h4><b>John Doe</b></h4> 
    <p>Architect & Engineer</p> 
  </div>
</div>
  `
  var parser = new DOMParser();
  // var htmlDoc = parser.parseFromString(Html(), 'text/html');
  // console.log(htmlDoc)
  //important to add section dyanamically
  const addSection = () => {
    const sc = parser.parseFromString(section, 'text/html');
    document.getElementById("body").appendChild(sc.body.children[0]);
    setcount(prev => prev + 1)
  }
  function drag(ev, data) {
    ev.dataTransfer.setData("text", data);
  }

  function getData(e) {
    const tag = parser.parseFromString(e.dataTransfer.getData("text"), 'text/html');
    const pr = document.querySelector(`#${e.target.id}`);
    var newChildNodes = tag.body.childNodes;
    // var newElement = document.createElement('div');
    // newElement.className = 'green_gradient';
    // newElement.id = 'content';

    for (var i = 0; i < newChildNodes.length; i++) {

      pr.appendChild(newChildNodes.item(i));
    }
    // pr.appendChild(newElement)
    // for (let i = 0; i < tag.body.children.length; i++) {
    //   console.log(i)
    //   pr.append(tag.body.children[i])
    // }
  }
  // React.createElement('div', { className: 'first-css-class' }, 'First ele')
  // function exportCSS() {
  //   event.preventDefault();
  //   sSheet = document.styleSheets[2];
  //   myRules = sSheet.cssRules;
  //   len = myRules.length;
  //   for (i = 0; i < 50; i++) {
  //     cssOutputString = cssOutputString + myRules[i].cssText + "\n";
  //   }
  //   console.log(cssOutputString);
  //   var blob = new Blob([cssOutputString]);
  //   saveAs(blob, "file.css");
  // }

  // var blob = new Blob([style]);
  // saveAs(blob, "file.css");

  // Your CSS as text

  // var styleSheet = document.createElement("style")
  // styleSheet.innerText = styles
  // document.head.appendChild(styleSheet)
  /**
   cssRules => length of css

   */
  let css = document.styleSheets[2];
  let appendCss = css?.insertRule(`.comola{
  text-align: center;
  color: #000;
  font-size: 40px;
}`, 1);

  let cssLength = css?.cssRules.length;
  let replaceCss;
  // let removeCss = css.removeRule(0);
  css?.cssRules.item(0) // get any style by index number

  console.log(cssLength)
  console.log(css?.cssRules)

  console.log(cssLength)
  console.log(css?.media.mediaText)

  // capture user which element clicked!

  const cpature = (event) => {
    event.target.style.outline = '1.7px solid yellow';
    console.log(event.target);
    let className = event.target.className;
    console.log("className", className);
    let css = document.styleSheets[2];
    console.log(css.cssRules)
    // find the specefic rules by class Name

    function csss(a) {
      var sheets = document.styleSheets[2], o = [];
      a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
      var rules = sheets.rules || sheets.cssRules;
      for (var r in rules) {
        if (a.matches(rules[r].selectorText)) {
          o.push(rules[r]);
        }
      }
      return o;
    }
    var cssjson = {
      ".card":{
          "font-family":" san-serif",
          "padding":" 20px 20px 20px 20px"
      }
  }

  var styleStr = "";
  for(var i in cssjson){
      styleStr += i + " {\n"
      for(var j in cssjson[i]){
          styleStr += "\t" + j + ":" + cssjson[i][j] + ";\n"
      }
      styleStr += "}\n"
      console.log(styleStr)
  }
    let find = csss(document.querySelector("." + className));
    let currStyle = find[0].cssText;

    // css?.cssRules["." + className].style.color = '#FFF';

    currStyle.replace("font-size: 20px","font-size: 50px");
    console.log(currStyle)

    css?.insertRule(".applo { font-family: Poppins; font-style: normal; font-weight: 600; font-size: 40px; line-height: 30px; text-align: center; cursor: default; }", cssLength-1);

    console.log(css.cssRules)
    for (var r in find[0].style) {
      if (find[0].style[r] !== "") {
        console.log(r);
      }
    }
    //need to replace css with updated css
    // var openFile = function (event) {
    //   var input = event.target;

    //   var reader = new FileReader();
    //   reader.onload = function () {
    //     var text = reader.result;
    //     var node = document.getElementById('output');
    //     node.innerText = text;
    //     console.log(reader.result.substring(0, 200));
    //   };
    //   reader.readAsText(input.files[0]);
    // };

  };
  //kept css style into a state then map in style tag in head tag
  return (
    <div className="main">
      <div className="editor">
        <div className="button">
          <button onClick={() => setTab("elm")}>ELement</button>
          <button onClick={() => setTab("eds")}>Edit style</button>
        </div>
        {tab === "elm" &&
          <div className="element">
            <button draggable={true} onDragStart={e => drag(e, col)}>Col</button>
            <button draggable={true} onDragStart={e => drag(e, row)}>Row</button>
            <button draggable={true} onDragStart={e => drag(e, `<p class="applo">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni dolorum sint facere aliquam quas. Doloremque, quidem? Magni officiis quia tenetur quisquam. Accusamus?</p>`)}>
              Paragraph
            </button>
            <button draggable={true} onDragStart={e => drag(e, card)}>
              Card
            </button>
            <button draggable={true} onDragStart={e => drag(e, header)}>
              Header
            </button>
            <button draggable={true} onDragStart={e => drag(e, `<button class="hm_button">Click more</button>`)}>
              Button
            </button>
            <button draggable={true} onDragStart={e => drag(e, `<h4 class="hm_heading">Bangladesh</h4>`)}>
              Heading
            </button>
            <button draggable={true} onDragStart={e => drag(e, `
            <div class="image_card">
            <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>`)}>
              Image
            </button>
          </div>
        }
        {tab === "eds" &&
          <div className="edit_field">
            <input name="site_title" type="text" onChange={e => setEdit(e.target.value)} placeholder="site title" />
            <input name="site_title" type="text" onChange={onChange} placeholder="site title" />
            <input name="heading_type" type="text" onChange={onChange} placeholder="heading type" />
            <input name="text" type="text" onChange={onChange} placeholder="enter text" />
            <input name="hm_color" type="text" onChange={onChange} placeholder="hm_color" />
            <input name="background" type="text" onChange={onChange} placeholder="background" />
            <input name="size" type="text" onChange={onChange} placeholder="font size" />
            <input name="padding_top" type="text" onChange={onChange} placeholder="padding top" />
            <input name="padding_right" type="text" onChange={onChange} placeholder="padding right" />
            <input name="padding_bottom" type="text" onChange={onChange} placeholder="padding bottom" />
            <input name="padding_left" type="text" onChange={onChange} placeholder="padding left" />
            <select onChange={onChange} name="textAlign">
              <option value="center">center</option>
              <option value="start">start</option>
              <option value="right">right</option>
            </select>
          </div>
        }
      </div>

      <div className="preview">
        <div onClick={(e) => cpature(e)} draggable={false} onDragOver={(e) => e.preventDefault()} onDrop={getData} dangerouslySetInnerHTML={{
          __html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${data.site_title}</title>
            <style>
            ${style}
            </style>
          </head>
          <body>
          <div id="body">
          </div>
          </body>
          </html>`
        }}>
        </div>
        <button className='add' onClick={() => addSection()}>add section</button>
      </div>
    </div>
  )
}

export default App