document.[pickYourSelector].[addEventListener]

getElementByClassName
getElementByTagName

select = where you want me to select
listener = when do you want me to execute
fucntion = what 

  <body>
    <p id="example">Lorem ipsum dolor sit amet <br> Yes, this is a random paragraph </p>
    <button type="button" onclick="modifyColor()">Click Me</button>
    <script>
    function modifyColor() {
        document.getElementById("example").style.color = "aqua";
        document.getElementById("example").style.backgroundColor = "gray";
    }
    </script>
  </body>