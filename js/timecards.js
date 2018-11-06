$(document).ready(function(){
    // Different type of payments
    var Description =[
      "Regular",
      "Sick",
      "Holiday",
      "Vacation",
      "TOTAL" ];
      var Timesheet = {
        FName:"",  LName:"",
        initPeriod:"10/15/2018",
        endPeriod:"10/22/2018",
        Data11:1, Data12:2,Data13:3,Data14:4,Data15:5,Data16:6,Data17:7,
        Data21:1, Data22:2,Data23:3,Data24:4,Data25:5,Data26:6,Data27:7,
        Data31:1, Data32:2,Data33:3,Data34:4,Data35:5,Data36:6,Data37:7,
        Data41:1, Data42:2,Data43:3,Data44:4,Data45:5,Data46:6,Data47:7,
      }
    var totalWayPayments = Description.length;
    //Fill the begining and the End of the period in the timesheet week
    function setTimesheetPeriod(){
      var jsonURL ="data/periods.json";
      var usersFormat ={
                        format: "json"
                      };

        function getPeriod(data) {
              var PFlag = false;
              $.each(data,function(i, Period) {
                // Setup Structure Example
                // {"id-Period":"001", "from": "10/29/2018", "to": "11/04/2018", "active": "true"}
                console.log(Period);
                if ( document.getElementById("idPeriod").value === Period.idperiod) {
                  document.getElementById("period").innerHTML += Period.from + "to "+Period.from;
                  PFlag = true;
                  return false;
                }
                })
                if( !PFlag){
                  alert("Error. Period no found in the DataBase.");
                }
              }
        $.getJSON(jsonURL, usersFormat, getPeriod );
     }

    // Fill the info of the Comapany and about the user Company Name, active Period
    // The info is in data/setup.json file

    function setTimesheetHead(){
      var jsonURL ="data/setup.json";
      var usersFormat ={
                        format: "json"
                      };

        function getHead(data) {
              $.each(data,function(i, Setup) {
                // Setup Structure Example
                // {"Company":"Code-Louisville Training","activePeriod": "18001","Logo":"img/codelouisville.jpg",
                // "Web":"www.codelouisville.org"}
                //  document.getElementById("company-nav").text= Setup.Company;
                  document.getElementById("user-nav").innerHTML="cheooo";//Setup.Company;
                  document.getElementById("user-nav").href= Setup.Web;
                  document.getElementById("idPeriod").value = Setup.activePeriod;
                  //alert(document.getElementById("idPeriod").value);
                  return false;
                })
              }
        $.getJSON(jsonURL, usersFormat, getHead );
     }
    function getUser(UName, UPassword){
      var jsonURL ="data/users.json";
      var usersFormat ={
                        format: "json"
                      };
        //Check the info in he Loging Form with the data in the JSON File folder /data
        function checkUser(data) {
              $.each(data,function(i, User) {
                // User Structure
                //{"id-user":"001","user":"jr@ts.com","firstname": "Joseph","lastname":"Reynold","password":"123"}
                if ( User.user === UName && User.password === UPassword) { //Pack o Encript Password

                  //document.getElementById("user-nav").innerHTML= User.firstname+" "+User.lastname;
                  document.getElementById("idUser").value = User.iduser;
                  writeName(User.firstname, User.lastname );// write in the Timesheet form
                  menueHome();
                  return false;
                }
              })
        }
        $.getJSON(jsonURL, usersFormat, checkUser );
        return false;
    }
    // Check the User and password introduced in Login Form. And set the System.
     $('#buttonlogin').click(function () {//function validate() {
        var username = document.getElementById("user-name").value;
        var password = document.getElementById("user-password").value;
        if (username == null || username == "" ) {
            alert("Please enter the username.");
            return false;
          } else if (password == null || password == "") {
              alert("Please enter the password.");
              return false;
          }
        getUser(username, password);
        setTimesheetHead(); // Set info about the company in the file data/setup.json
        setTimesheetPeriod(); //Set the info about the beginning and end of the period
      });

    function writeName(fName, lName){
       var objDate = new Date();
        document.getElementById("fullname").innerHTML += fName+" "+lName;
        document.getElementById("id-date").innerHTML += objDate.getMonth()+"/"+objDate.getDate()+"/"+objDate.getFullYear();
    }
    // Write in the DOM the Content of the Column Description of the Timecards
    function writeDescription(){
      //Add the description to the column
        function addDescrption(value){
          var p = document.createElement("h5");
              p.innerHTML= value;
              document.getElementById("column-0").appendChild(p)
        }
         document.getElementById("column-0").innerHTML ="Description";
         Description.forEach(addDescrption);
      }
      // Function to Update the Total Column and Total Row with any change
      function updateTotal(){
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
      function menueAbout() {
          // document.getElementById("timesheet").style.display = "none";
          // document.getElementById("jumbotron").style.display = "none";
           document.getElementById("main").style.display = "none";
           document.getElementById("about").style.display = "block";
           return false;
      }
      function menueHome() {
           document.getElementById("about").style.display = "none";
           //document.getElementById("loginform").style.display = "none";
           //document.getElementById("timesheet").style.display = "none";
           document.getElementById("jumbotron").style.display = "block";
           document.getElementById("timesheet").style.display = "block";
           document.getElementById("loginform").style.display = "none";
           return false;
      }

    writeDescription();
    writeDays();
    document.getElementById("about-menu").addEventListener("click", menueAbout);
    document.getElementById("home-menu").addEventListener("click", menueHome);
    document.getElementById("timesheet").style.display = "none";
    document.getElementById("loginform").style.display = "block";
    ajax.reload();
}); // end ready
