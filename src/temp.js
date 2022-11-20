let css = document.styleSheets[2];


let cssLength = css?.cssRules.length;
let replaceCss;
// let removeCss = css.removeRule(0);
css?.cssRules.item(0) // get any style by index number
console.log(cssLength)
console.log(css?.cssRules)
console.log(cssLength)
console.log(css?.media.mediaText)
  var parser = new DOMParser();
  // var htmlDoc = parser.parseFromString(Html(), 'text/html');
  // console.log(htmlDoc)


  
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