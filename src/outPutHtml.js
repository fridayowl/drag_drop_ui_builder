export const outputHtml = (props) => {
  return `
    
    <!DOCTYPE html>
    <html lang=${props.html.lang}>
    
    <head>
      ${props.html.meta.map((item) => `
      <meta name=${item.name} content=${item.content} />`)}
      ${props.html.link.map((item) => `
      <link rel=${item.rel} href=${item.href}>`)}
      <title>${props.html.head.title}</title>
    </head>
    
    <body>
      ${props.html.body.map(item => (
    `<${item.name}>
      </${item.name}>`
  ))}
    </body>
    
    </html>
`
}

/**
 * let str = "@media(max-width:1200px)";
let mediaSize = str.replace(/[^\d]/g,'')
console.log(mediaSize)
 */
/**
 *   //   const stylesheets = document.styleSheets;
  //   let stylesheet = stylesheets[15];
  //   console.log("a",stylesheet.rules[13].conditionText);
 */