function cc(){
   
  var col = parseInt(document.getElementById("col").value);
  console.log(col) ;
  var row = parseInt(document.getElementById("row").value);
  console.log(row);
  
  
  var htmlContainer = "<table border='1' id='tab'>";
  
  for (var i = 1; i <= row; i++){ 
    htmlContainer += "<tr>";
    for (var x = 1; x <= col; x++) {
      htmlContainer += "<td id='tab1'>"+ (i*x) + "</td>";
    }
    
    htmlContainer += "</tr>";
  }
  
  htmlContainer += "</table>";
  
  document.getElementById("multiTable").innerHTML = htmlContainer;
}

function bcolor(){
  var color=document.getElementById("bgcolor").value;

  document.getElementById("tab").style.backgroundColor = color;
}

function tcolor(){
  var color=document.getElementById("txcolor").value;

  document.getElementById("tab").style.color = color;
}