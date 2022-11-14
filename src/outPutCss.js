export const outPutCss = (props)=>{
    return `
    ${props.common.map(item=>(
        `
        *{
        ${item} +\n
        }`
        ))}
        \n
        ${props.main.map(item =>
        `
        ${item.selector} {
            ${item.Width && `width: ${item.width.size}px;`}\n
            ${item.FontSize && `width: ${item.width.size}px;`}\n
            ${item.TextDecoration && `width: ${item.width.size}px;`}\n
            ${item.TextAlign && `width: ${item.width.size}px;`}\n
            ${item.FontFamily && `width: ${item.width.size}px;`}\n
            ${item.Cursor && `width: ${item.width.size}px;`}\n
            ${item.PaddingTop && `width: ${item.width.size}px;`}\n
            ${item.PaddingBottom && `width: ${item.width.size}px;`}\n
            ${item.PaddingLeft && `width: ${item.width.size}px;`}\n
            ${item.PaddingRight && `width: ${item.width.size}px;`}\n
        }\n \n`
        )}
        \n
        \n
        \n
        ${props.media.map(item=>
        `@media screen and (max-width:${item.screenSize}px) {
        ${item.style.map(item=>
            `${item.selector} {
                ${item.Width && `width: ${item.width.size}px;`}\n
                ${item.FontSize && `width: ${item.width.size}px;`}\n
                ${item.TextDecoration && `width: ${item.width.size}px;`}\n
                ${item.TextAlign && `width: ${item.width.size}px;`}\n
                ${item.FontFamily && `width: ${item.width.size}px;`}\n
                ${item.Cursor && `width: ${item.width.size}px;`}\n
                ${item.PaddingTop && `width: ${item.width.size}px;`}\n
                ${item.PaddingBottom && `width: ${item.width.size}px;`}\n
                ${item.PaddingLeft && `width: ${item.width.size}px;`}\n
                ${item.PaddingRight && `width: ${item.width.size}px;`}\n
            }\n \n`
        )}
        }`
        )}
    `
}