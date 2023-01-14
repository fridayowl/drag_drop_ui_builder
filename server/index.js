const JSZip = require('jszip');
const zip = new JSZip();
const fs = require('fs');
const express = require("express");
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
const port = process.env.PORT || 4000
app.use(cors());
app.use(express.json());
app.use(express.static("outputFile"));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res) => {
    res.send('hlloe')
})
app.post('/getFile', async (req, res) => {
    const { html, css,others } = req.body;
    let htmldoc = `
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8" />
  <link rel="icon" href=${others.favurl} />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <meta name="description" content=${others.metadesc} />
  <link rel="stylesheet" href="style.css">
  <title>${others.sitetitle}</title>
</head>

<body>
${html}
</body>

</html>
    `
    await createdFile(htmldoc, css)
    await createdZip(htmldoc,css)
})


const createdFile = async (html, css) => {
    await fs.writeFile(`./outputFile/index.html`,html, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
    await fs.writeFile(`./outputFile/style.css`, css, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}

const createdZip = async (html, css) => {
    try {
        await zip.file("index.html", html);
        await zip.file("style.css", css);

        await zip.generateNodeStream({ type: 'nodebuffer', streamFiles: true })
            .pipe(fs.createWriteStream(`./outputFile/output.zip`))
            .on('finish', function () {
                console.log("output.zip written.");
            });

    } catch (err) {
        console.error(err)
    }
}

app.listen(port, () => {
    console.log(`Server running at port ${port}`)
})


