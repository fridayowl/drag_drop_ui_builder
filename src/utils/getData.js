var parser = new DOMParser();
function getData(e) {
    const tag = parser.parseFromString(e.dataTransfer.getData("text"), 'text/html');
    const pr = document.querySelector(`#${e.target.id}`);
    var newChildNodes = tag.body.childNodes;
    for (var i = 0; i < newChildNodes.length; i++) {
        pr.appendChild(newChildNodes.item(i));
    }
}