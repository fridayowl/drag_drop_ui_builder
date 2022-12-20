export const doc = {
  "doc": `
    <!DOCTYPE html>
<html lang="en">

<head>
<style>
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#body {
    width:100%;
    margin: 0 auto;
    height:100vh;
    background:#ffff;
}

#body section,
#body div {
    width:100%;
    min-height: 40px;
    margin: 5px;
    border: 1.8px solid rgba(170, 170, 170, 0.7);
}

.active {
    border: 1.8px solid rgba(0, 183, 255, 0.77) !important;
    cursor: pointer !important;
}
</style>
    <style title="preview_css">
    
        .container {
            width: 100%;
            padding-left: 15px;
            padding-right: 15px;
            margin: 0 auto;
        }

        .row {
            display: flex;
            justify-content: space-between;
        }

        .col-1 {
            width: 100%;
            min-height: 80px;
        }

        .col-2 {
            width: 50%;
            min-height: 80px;
        }

        .col-3 {
            width: 25%;
            min-height: 80px;
        }

        .col-4 {
            width: 25%;
            min-height: 80px;
        }

        .col-6 {
            width: 17%;
            min-height: 80px;
        }

        img {
            width: 100%;
            height: auto;
        }

        @media (max-width:425px) {
            .row {
                flex-wrap: wrap;
            }
            .col-1 ,.col-2,.col-3, .col-4,.col-6 {
                width: 100%;
            }
        }
    </style>
</head>

<body>
    <div id="body">
    </div>
</body>

</html>
    `
}