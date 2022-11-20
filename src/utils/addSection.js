const addSection = () => {
    const sc = parser.parseFromString(section, 'text/html');
    document.getElementById("body").appendChild(sc.body.children[0]);
  }