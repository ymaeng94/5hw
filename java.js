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



var timeDiv = document.getElementById("timeBlock");


// The application displays timeblocks for standard business hours (9 a.m. to 5 p.m.).
    for (var i=0; i<timeBlocks.length; i++){
        var newDiv = document.createElement("p");
        newDiv.textContent = timeBlocks[i];
        console.log();
        timeDiv.append(newDiv);
    };


    // for (var i=0; i<timeBlocks.length; i++){
    //     var todoInput = document.createElement("p");
    //     todoInput.textContent = timeBlocks[i];
    //     todoInput.append(newDiv);
    // };

    // for (var i=0; i<timeBlocks.length; i++){
    //     var button = document.getElementById("button");
    //     button.textContent = timeBlocks[i];
    //     button.append(newDiv);
    // };



//Each timeblock contains an input field and save button.
todoForm.addEventListener("submit", function(event) {
    event.preventDefault();
    var todoText = todoInput.value.trim();
    // Return from function early if submitted todoText is blank
    if (todoText === "") {
      return;
    }
    // Add new todoText to todos array, clear the input
    todoInput.push(todoText);
    todoInput.value = "";
    storeTodos();
    renderTodos();
  });







// Clicking a timeblock's "Save" button stores the input text in local storage.

function storeTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}






todoList.addEventListener("click", function(event) {
    var element = event.target;
    if (element.matches("button") === true) {
        var index = element.parentElement.getAttribute("data-index");
        todos.splice(index, 1);
        storeTodos();
        renderTodos();
      }
  });