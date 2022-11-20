const cpature = (event) => {
    event.target.style.outline = '1.7px solid yellow';
    console.log(event.target);
    let className = event.target.className;
    console.log("className", className);
    // also find the classname index number
    let css = document.styleSheets[2];
    console.log(css.cssRules)
    // find the specefic rules by class Name
    let index = []
    function csss(a) {
      var sheets = document.styleSheets[2], o = [];
      a.matches = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
      var rules = sheets.rules || sheets.cssRules;
      for (var r in rules) {
        if (a.matches(rules[r].selectorText)) {
          o.push(rules[r]);
          index.push(r); //store css index
        }
      }
      return o;
    }
    console.log(index)

    let find = csss(document.querySelector("." + className));
    let currStyle = find[0].cssText;
    let updatedStyle = ""
    css.removeRule(index[0]);
    css?.insertRule(".applo { font-family: Poppins; font-style: normal; font-weight: 600; font-size: 40px; line-height: 30px; text-align: center; cursor: default; }", index[0] - 1);
    console.log(css.cssRules)
    let rules = []
    for (var r in find[0].style) {
      if (find[0].style[r] !== "") {
        console.log(find[0].style[r]);
        // console.log(find[0].styleMap.size);
        rules.push()
      }
    }
    // console.log(rules)
    //need to replace css with updated css
  };