Jobsclocking System Version 1.0

**************************************************************************************
REQUIREMENTS

 -----> The WEB uses JSON Files store in a WEB Server.
  1)- WEB Server like Apache. In my case, I used NAMP and WAMP.
  
  2)- An specific user to Login:
  
      - User: jr@ts.com    Password: 123
	  
	    or
		
	  - User: av@ts.com    Password: 123
	  
	  You can create your own User and Password updating the JSON file:  users.json	  
*****************************************************************************************
Description
This is a dinamic WEB aplication. Its designed to be sale and use for different kind of Companies or individual person.
You have to initiate the system  with the Costumer information (Company Name, WEB address). It is store in a JSON file (setup.json).

The purpose is to create a website where the employee can update their timesheet per weekly periods and they can access to see and print old periods.
PENDING: HH-RR department will have the access to add or delete users from the system and modify the timesheet of the last closed period.
         The Supervisor must approobe it every week and must have access to all his employee.
		 

1. Custom CSS Classes
   The class(es) I created are:

  .headlabel 
  .img-jumbo
  .cancelbtn
  
2- JSONs Files.Example of files with specific contents.
           SETUP.JSON
	**********************************
     { 
	   Company:"Code-Louisville Training",
       activePeriod": "18001",
       "Logo":"img/codelouisville.jpg",
       "Web":"www.codelouisville.org
	 }
	 
	      USERS.JSON
	 *********************************
	 {
       "iduser":"001",
       "user": "jr@ts.com",
       "firstname": "Joseph",
       "lastname": "Reynold",
       "password":"123"
     }
	 
	      PERIODS.JSON
	 *********************************
	 {
       "idperiod":"18001",
       "from": "10/22/2018",
       "to": "10/28/2018",
       "active": "false"

     }
	 
	      TIMESHEETS.JSON
	 **********************************
	 {
       "iduser" :  "001",
       "idperiod":"18001",
       "timesheet":{ "Data11": "4", "Data12": "7", "Data13": "4","Data14": "6","Data15": "8","Data16":"0","Data17":"0",
                     "Data21": "1", "Data22": "0", "Data23": "1","Data24": "0","Data25": "0","Data26":"0","Data27":"0",
                     "Data31": "1", "Data32": "0", "Data33": "0","Data34": "1","Data35": "0","Data36":"0","Data37":"0",
                     "Data41": "1", "Data42": "0", "Data43": "0","Data44": "1","Data45": "0","Data46":"0","Data47":"0"
                   }
     }
    
3. Custom JavaScript Functions
   My functions:
   
  1-)function setTSInfo()
	 This function read from the JSON file TIMESHEETS.JSON the info using de ID of the logged User and the ID of the period.
     Write this the worked hour in the timesheet Form.
 
  2-) function setTSPeriod()
      Fill the begining and the End of the period in the timesheet Form.

  3-) function setTimesheetHead()
      Fill the info of the Company and about the user Company Name, active Period and write it in the DOM.

  4-) function getUser(UName, UPassword)
	  Get the info fron the JSON file and write it to the form in the document.
	
  5-) submmit').click(function ())
      Submit the INFO of the week, afetr this the employee can't do any change.
  
  6-) $('#save').click(function ())
      Save all INFO to the Database, the employee can continue working on it later.
  
  7-) $('#restore').click(function ())
      Delete all new introduce worked hour and restore it with the value in the Database.
 
  8-) $('#print').click(function ())
      Print the info of the wek in a  official form.
 
  9-) $('#buttoncancel').click(function ())
      Delete the introduce iNFO in the Login Form
 
 10-) $('#buttonlogin').click(function ())
      Check valid the User and password introduced in Login Form. And setup all INFO in the System.
 
 11-) function writeName(fName, lName)) 

 12-) function writeDescription())
      Write in the DOM the Content of the Column Description of the Timecards

 13-) function updateTotalOnChange())
      To Update the Total Column and Total Row with any change in the Timesheet Form

 14-) function writeDays( Timesheet))
      Fill all info of the JSON timesheets.json File to create the scaque in the Timecards Sheet

 15-) function menueAbout() 
      Switch between de Main Menu and the About Menu

 16-) function menueHome() 
      Switch between the About menu and the  Home MENU

 17-) writeDescription()

