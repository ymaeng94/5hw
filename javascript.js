var timeBlocks = [
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
    "9pm"
    ];

var timeDiv = document.getElementById("time-options");
var todoDiv = document.getElementById("todo-text");

    for (var i=0; i<timeBlocks.length; i++){
        var newDiv = document.createElement("p");
        newDiv.textContent = timeBlocks[i];
        timeDiv.appendChild(newDiv);
    };


timeDiv.appendChild(todoDiv);