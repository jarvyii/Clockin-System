Timecards System
Description
The purpose is to create a website where the employee can update their timesheet per week and have the historic of it.
Every Monday morning the system will close automatic the last week and the employee can't modified it.
The HH-RR can access to the system and they can do any change to the timesheet in the preview week before the payment process is closed.
The Supervisor must approobe it every week and must have access to all his employee.

Custom CSS Classes
The class(es) I created are:

1. class name ex( .main-info-section )
.. what class does, ex( adds padding & changes background color of .main-info-section )

2.

Custom JavaScript Functions
The javascript functions I created are:

1. writeDescription()
   This is use to write the name of the different ways of payments in this Column. This is dynamic.
2. function updateTotal()
    This is the responsible of automatically update the TOTAL Column and TOTAL Row when any info is changed in the Timecards Sheet.   
2. function writeDays()
   For every days of the week and for the TOTAL Column and the TOTAL Row, in a dynamic way this function create the IMPUT element with the neccesary properties inside of each escaque in the Timecard Sheet.
