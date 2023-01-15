export const doc = {
  "doc": `
    <!DOCTYPE html>
<html lang="en">

<head>
<style>
body {
    width:100%;
    margin: 0 auto;
    height:100vh;
    background:#ffff;
    padding-top:20px;
}
#body section,
#body div {
  min-height: 150px;
  padding: 5px 2px;
  outline: 1px dashed rgba(170, 170, 170, 0.7);
  outline-offset: -2px;
}

.active{
  outline: 1.8px solid rgba(0, 183, 255, 0.77) !important;
  outline-offset: -2px !important;
  cursor: pointer !important;
}

::-webkit-scrollbar {
  width: 2px;
}


::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 

::-webkit-scrollbar-thumb {
  background: #888; 
}


::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
</style>
    <style title="preview_css">
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      .container {
        width: 100%;
        margin: 0 auto;
      }
      
      .row {
        display: flex;
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
        width: 33%;
        min-height: 80px;
      }
      
      .col-4 {
        width: 25%;
        min-height: 80px;
      }
      
      .col-6 {
        min-height: 80px;
      }
      
      img {
        width: 100%;
        height: auto;
      }
      
      @media (max-width:1024px) {}
      
      @media (max-width:768px) {}
      
      @media (max-width:425px) {
        .row {
          flex-wrap: wrap;
        }
      
        .col-1,
        .col-2,
        .col-3,
        .col-4,
        .col-6 {
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