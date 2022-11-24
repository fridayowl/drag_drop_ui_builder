var cssjson = {
  ".card": {
    "font-family": "san-serif",
    "padding": " 20px 20px 20px 20px"
  },
   ".card .body": {
    "font-family": "san-serif",
    "padding": " 20px 20px 20px 20px"
  },
   ".card .body .p": {
    "font-family": "san-serif",
    "padding": " 20px 20px 20px 20px"
  }
}

var styleStr = "";
for (var i in cssjson) {
  styleStr += i + " {\n"
  for (var j in cssjson[i]) {
    styleStr += "\t" + j + ":" + cssjson[i][j] + ";\n"
  }
  styleStr += "}\n";
};
console.log(styleStr)

//css replace method

const sheet = new CSSStyleSheet();

// replace all styles synchronously:
sheet.replaceSync('a { color: red; }');

// replace all styles:
sheet.replace('a { color: blue; }')
  .then(() => {
    console.log('Styles replaced');
  })
  .catch(err => {
    console.error('Failed to replace styles:', err);
  });

// Any @import rules are ignored.
// Both of these still apply the a{} style:
sheet.replaceSync('@import url("styles.css"); a { color: red; }');
sheet.replace('@import url("styles.css"); a { color: red; }');
// Console warning: "@import rules are not allowed here..."