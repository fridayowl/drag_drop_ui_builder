export const getDoc = () => {
    let iFrame = document.getElementById("dropframe");
    let iFrameWindow = iFrame.contentWindow;
    let s_Sheets = iFrameWindow.document;
    return s_Sheets;
}