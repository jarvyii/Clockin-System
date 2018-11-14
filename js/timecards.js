$(document).ready(function(){
    // Different type of payments
    var Description =[
                        "Regulars ",
                        "Sicks ",
                        "Holidays ",
                        "Vacations ",
                        "TOTAL "
                      ];
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
/* ************************************************************************************************
This function read from the JSON file TIMESHEETS.JSON the info using de ID of the logged User and the ID of the period
 Write this the worked hour in the timesheet Form.
 FUNCTION setTSInfo()
 ************************************************************************************************ */
function setTSInfo(){
    /* Structure of timesheets.json File
        {
         "iduser" :  "001",
         "idperiod":"18001",
         "timesheet":[ "Data11": "1", "Data12": "2", "Data13": "3","Data14": "4","Data15": "5","Data16":"6","Data17":"7",
                       "Data21": "1", "Data22": "2", "Data23": "3","Data24": "4","Data25": "5","Data26":"6","Data27":"7",
                       "Data31": "1", "Data32": "2", "Data33": "3","Data34": "4","Data35": "5","Data36":"6","Data37":"7",
                       "Data41": "1", "Data42": "2", "Data43": "3","Data44": "4","Data45": "5","Data46":"6","Data47":"7"
                     ] */
    var jsonURL ="data/timesheets.json";
    var tsFormat ={
                     format: "json"
                   };
    // /FUNCTION getTS()  read from active period and logged user from data Object
    function getTS(data) {
      var  tsFlag = false;
      var activeUser = document.getElementById("idUser").value;
      var activePeriod = document.getElementById("idPeriod").value;
      $.each(data,function(i, Timecard) {
        if ( (activePeriod === Timecard.idperiod) &&  (activeUser === Timecard.iduser))  {
           writeDays(Timecard.timesheet);
           tsFlag = true;
           return false;
         }
        })
         if (!tsFlag){
           alert("Error: User without INFO in the Database record" );
              // writeDays( Timesheet. Data);
            }
          }   //****** \FUNCTION getTS() *****
  $.getJSON(jsonURL, tsFormat, getTS );
  return false;
} // \FUNCTION setTSInfo()
 /***************************************************************************
  Fill the begining and the End of the period in the timesheet week
  FUNCTION setTSPeriod()
*****************************************************************************/
function setTSPeriod(){
  var jsonURL ="data/periods.json";
  /* Setup.json Structure Example
   {
    "id-Period":"001",
    "from": "10/29/2018",
    "to": "11/04/2018",
    "active": "true"
  }*/
  var usersFormat ={
                    format: "json"
                  };
    // /FUNCTION getPeriod
    function getPeriod(data) {
          var PeriodFlag = false;
          $.each(data,function(i, Period) {
           if ( document.getElementById("idPeriod").value === Period.idperiod) {
              document.getElementById("period").innerHTML += Period.from + "<span class='headlabel'> To </span>"+Period.to;
              document.getElementById("activePeriod").value = Period.active;
              PeriodFlag = true;
              return false;
            }
            })
            if( !PeriodFlag){
              alert("Error. Period no found in the DataBase.");
            }
          }
        // \FUNCTION getPeriod
    $.getJSON(jsonURL, usersFormat, getPeriod );
    return false;
 } // \FUNCTION setTSPeriod()
/**************************************************************
 Fill the info of the Company and about the user Company Name, active Period and write it in the DOM
 FUNCTION setTimesheetHead()
***************************************************************/
function setTimesheetHead(){
      /* SETUP.JSON  Structure Example
       { "Company":"Code-Louisville Training",
         "activePeriod": "18001",
         "Logo":"img/codelouisville.jpg",
         "Web":"www.codelouisville.org"
       }       */
    var jsonURL ="data/setup.json";
    var usersFormat ={
                      format: "json"
                    };
      // /FUNCTION getHead()
      function getHead(data) {
            $.each(data,function(i, Setup) {

                document.getElementById("user-nav").innerHTML=Setup.Company;
                document.getElementById("user-nav").href= Setup.Web;
                document.getElementById("image-exit-nav").src= "img/exit.png";
                document.getElementById("idPeriod").value = Setup.activePeriod;
                //alert(document.getElementById("idPeriod").value);
                return false;
              })
            }  //  \FUNCTION getHead()
      $.getJSON(jsonURL, usersFormat, getHead );
      return false;
   }   // \FUNCTION setTimesheetHead()
/*****************************************************************
   FUNCTION  getUser(): Get the info fron the JSON file and write it to the form in the document.
******************************************************************/
    function getUser(UName, UPassword){
      /* USERS.JSON Data Structure Example
      {
        "id-user":"001",
        "user":"jr@ts.com",
        "firstname": "Joseph",
        "lastname":"Reynold",
        "password":"123"
      } */
      var jsonURL ="data/users.json";
      var usersFormat ={
                        format: "json"
                      };
        // /FUNCTION checkUser() Check the info in he Loging Form with the data in the JSON File folder /data
        function checkUser(data) {
              $.each(data,function(i, User) {
              if ( User.user === UName && User.password === UPassword) { //Pack o Encript Password

                  //document.getElementById("user-nav").innerHTML= User.firstname+" "+User.lastname;
                  document.getElementById("idUser").value = User.iduser;
                  writeName(User.firstname, User.lastname );// write in the Timesheet form
                //  menueHome();
                  return false;
                }
              })
        }  // \FUNCTION checkUser()
        $.getJSON(jsonURL, usersFormat, checkUser );
        return false;
    }   // \FUNCTION  getUser()
/************************************************************************
Submit the INFO of the week, afetr this the employee can't do any change.
*************************************************************************/
$('#submmit').click(function () {
  alert("Sorry, this Option is under construction.");
}); // /$('#submmit').click(function ())
/**************************************************************************
 Save all INFO to the Database, the employee can continue working on it later.
**************************************************************************/
$('#save').click(function () {
  alert("Sorry, this Option is under construction.");
}); // /$('#save').click(function ());
/***************************************************************************
Delete all new introduce worked hour and restore it with the value in the Database.
****************************************************************************/
$('#restore').click(function () {
  alert("Sorry, this Option is under construction.");
}); // /$('#restore').click(function ())
/**************************************************************************
 Print the info of the wek in a  official form.
***************************************************************************/
$('#print').click(function () {
  alert("Sorry, this Option is under construction.");
}); // /$('#print').click(function ())
/*****************************************************************
Delete the introduce iNFO in the Login Form
*****************************************************************/
$('#buttoncancel').click(function () {
  document.getElementById("user-name").value="";
  document.getElementById("user-password").value = "";
}); // / $('#buttoncancel').click(function () in Loging)
/**********************************************************************************
 Check valid the User and password introduced in Login Form. And setup all INFO in the System.
 FUNCTION  $('#buttonlogin').click(function ())
**********************************************************************************/
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
    document.getElementById("jumbotron").style.display = "block";
    document.getElementById("timesheet").style.display = "block";
    document.getElementById("loginform").style.display = "none";
    menueHome();
    getUser(username, password);
    setTimesheetHead(); // Set info about the company in the file data/setup.json
    setTSPeriod(); //Set the info about the beginning and end of the period
    setTSInfo(); //Set the worked hour of the week in the Timesheet
    document.getElementById("about-menu").addEventListener("click", menueAbout);
    document.getElementById("home-menu").addEventListener("click", menueHome);
    document.getElementById("search-form").style.display = "block";
  }); // \FUNCTION  $('#buttonlogin').click(function ())
/*********************************************************************************
  FUNCTION writeName()
*********************************************************************************/
function writeName(fName, lName){
   var objDate = new Date();
    document.getElementById("fullname").innerHTML += fName+" "+lName;
    document.getElementById("id-date").innerHTML += objDate.getMonth()+"/"+objDate.getDate()+"/"+objDate.getFullYear();
} // \FUNCTION writeName()
/*********************************************************************************
 Write in the DOM the Content of the Column Description of the Timecards
 FUNCTION writeDescription().
*********************************************************************************/
function writeDescription(){
  //Add the description to the column
    function addDescrption(value){
        var p = document.createElement("INPUT");
            p.style.margin =0;
          //  p.border-style = none;
            p.className="form-control description bg-success";
            p.setAttribute("type", "text");
            p.setAttribute("value", value);
          //  p.disabled = true;
            document.getElementById("column-0").appendChild(p);
          /*
          var p = document.createElement("h5");
              p.innerHTML= value;
              document.getElementById("column-0").appendChild(p) */
        } // \FUNCTION addDescrption()
     document.getElementById("column-0").innerHTML ="Payments";
     Description.forEach(addDescrption);
  } // \FUNCTION writeDescription()
/*******************************************************************************
 Function to Update the Total Column and Total Row with any change in the Timesheet Form
 FUNCTION updateTotalOnChange()
 ********************************************************************************/
function updateTotalOnChange(){
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
} // \FUNCTION updateTotalOnChange()
/******************************************************************************
 Fill all info of the JSON timesheets.json File to create the scaque in the Timecards Sheet
 FUNCTION writeDays()
******************************************************************************/
function writeDays( Timesheet){
  var columnTotal=0;
  var rowTotal =0;
  // /Function: This internal function add to the timesheet Form evry day of the weeke
  function addDay(i, j, value, disabledValue){
         var p = document.createElement("INPUT");
         p.id= "Data"+i+j;
         p.className="form-control";
         p.setAttribute("type", "number");
         p.setAttribute("value", value);
        p.min="0";
        p.max="24";
        p.step="0.5";
        p.addEventListener("input", updateTotalOnChange);
        p.disabled = disabledValue;
        document.getElementById("column-"+j).appendChild(p);
     }
  // \Function   addDay ()
  for(var i=1; i < Description.length; i++ ){
      columnTotal =0;
      for(var j=1; j<8; j++){
          addDay(i, j, Timesheet["Data"+i+j], !document.getElementById("activePeriod").value )
          columnTotal += Number(Timesheet["Data"+i+j]);
        }
      addDay(i, j, columnTotal, true); // Fill the Info in the TOTAL  of the i row
    }
  var grantTotal = 0; // Total of hour worked in the week.
  for(var j=1; j<8; j++){
        rowTotal=0;
        for(var i=1; i < Description.length; i++ ){
          rowTotal += Number(Timesheet["Data"+i+j])
        }
        addDay(i, j, rowTotal, true);// Fill the Info in the TOTAL of the i row
        grantTotal += rowTotal;
    }
    addDay(i, j, grantTotal, true);
  //  var p = document.createElement("INPUT");
}// \FUNTION    writeDays()
/*****************************************************************************
  Switch between de Main Menu and the About Menu
   FUNCTION menueAbout()
******************************************************************************/
function menueAbout() {
   document.getElementById("main").style.display = "none";
   document.getElementById("about").style.display = "block";
   return false;
} // \FUNCTION menueAbout()
/**********************************************************************
 Switch between the About menu and the  Home MENU
  FUNCTION menueHome()
**********************************************************************/
function menueHome() {
  document.getElementById("main").style.display = "block";
  document.getElementById("about").style.display = "none";
  /*   document.getElementById("about").style.display = "none";
     //document.getElementById("loginform").style.display = "none";
     //document.getElementById("timesheet").style.display = "none";
     document.getElementById("jumbotron").style.display = "block";
     document.getElementById("timesheet").style.display = "block";
     document.getElementById("loginform").style.display = "none"; */
     return false;
} // \  FUNCTION menueHome()
/************************************************************************
  Main Block
***********************************************************************/
writeDescription();
/* document.getElementById("about-menu").addEventListener("click", menueAbout);
document.getElementById("home-menu").addEventListener("click", menueHome); */
document.getElementById("timesheet").style.display = "none";
document.getElementById("loginform").style.display = "block";
document.getElementById("search-form").style.display = "none";
}); // end ready
