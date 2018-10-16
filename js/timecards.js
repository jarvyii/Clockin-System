// Different type of payments
var Description =[
  "Regular",
  "Sick",
  "Holiday",
  "Vacation",
  "TOTAL" ];
var totalWayPayments = Description.length;
// Write in the DOM the Content of the Column Description of the Timecards
function writeDescription(){
  //Add the description to the column
    function addDescrption(value){
      var p = document.createElement("h4");
          p.innerHTML= value;
          document.getElementById("column-0").appendChild(p)
    }
     document.getElementById("column-0").innerHTML ="Description";
     Description.forEach(addDescrption);
  }
  // Funtion to Update the Total Column and Total Row with any change
  function updateTotal(  ){
    var numColumn =  this.id[5];
    var numRow = this. id[4];
    // To update the Total of the Row
    document.getElementById("Data"+numRow+8).value=0;
    var valTotal = 0;
    for (var j=1; j<= 8; j++ ){
      valTotal += Number(document.getElementById("Data"+numRow+j).value)
      }
    document.getElementById("Data"+numRow+8).value = valTotal;
    valTotal = 0;
    for (var i=1; i< totalWayPayments; i++ ){
      valTotal += Number(document.getElementById("Data"+i+numColumn).value)
      }
    document.getElementById("Data"+totalWayPayments+numColumn).value = valTotal;
    document.getElementById("Data"+totalWayPayments+8).value = 0;
    valTotal=0;
    for( j= 1; j <=7; j++){
      valTotal += Number(document.getElementById("Data"+totalWayPayments+j).value);
    }
    document.getElementById("Data"+totalWayPayments+8).value = valTotal;
  }
  //Fill all info to create the scaque in the Timecards
  function writeDays(){
    for(var i=1; i <= Description.length; i++ ){
      for(var j=1; j<=8; j++){
          var p = document.createElement("INPUT");
           p.id= "Data"+i+j;
            p.className="form-control";
            p.setAttribute("type", "number");
            p.min="0";
            p.max="24";
            p.setAttribute("value", "0");
            p.step="0.5";
            p.addEventListener("input", updateTotal);
          //  p.oninput = function() {updateTotal};
            if ( i=== Description. length || j === 8 ) {
               p. disabled = true;
            }
            document.getElementById("column-"+j).appendChild(p);
      }
    }
//Ojooooo;
//oninput Event

  }

writeDescription();
writeDays();
