export const getDoc = () => {
    let iFrame = document.getElementById("dropframe");
    let iFrameWindow = iFrame.contentWindow;
    let doc = iFrameWindow.document;
    return doc;
}