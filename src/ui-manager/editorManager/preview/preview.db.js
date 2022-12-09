export const doc = {
  "doc": `
    <!DOCTYPE html>
<html lang="en">

<head>
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

        #body {
            margin: 0 auto;
            outline: 1px dashed rgba(170, 170, 170, 0.7);
            outline-offset: -2px;
            height:100vh;
        }

        #body section,
        #body div {
            min-height: 40px;
            padding: 5px;
            outline: 1px dashed rgba(170, 170, 170, 0.7);
            outline-offset: -2px;
        }

        .active {
            outline: 1.8px solid rgba(0, 183, 255, 0.77) !important;
            outline-offset: -2px !important;
            cursor: pointer !important;
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