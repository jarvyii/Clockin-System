function getUsers(UName, UPassword){
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
            //  alert("I got it"+User.firstname);
              document.getElementById("user-nav").text= User.firstname+" "+User.lastname;
              writeName(User.firstname, User.lastname );// write in the Timesheet form
              document.getElementById("loginform").style.display = "none";
              return false;
            }
          })
    }
    $.getJSON(jsonURL, usersFormat, checkUser );
};
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == null || username == "") {
        alert("Please enter the username.");
        return false;
    }
    if (password == null || password == "") {
        alert("Please enter the password.");
        return false;
    }
    getUsers(username, password);

  };
