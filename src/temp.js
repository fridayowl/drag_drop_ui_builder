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




// https://i.ibb.co/M1WVGx2/icons8-todo-list-96.png
// https://i.ibb.co/VqT2Dz7/icons8-laptop-play-video-96.png

// https://i.ibb.co/HpSVL9s/icons8-section-96.png
// https://i.ibb.co/YRNJCb6/icons8-view-column-96.png
// https://i.ibb.co/F747c89/icons8-columns-96.png
// https://i.ibb.co/HgRp2vz/icons8-lowercase-96.png
// https://i.ibb.co/1LffBrj/icons8-header-96.png