var cssjson = {
    ".card": {
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
    styleStr += "}\n"
    console.log(styleStr)
  }