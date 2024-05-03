let inputField = document.querySelector(".input-field");
let addButton = document.querySelector(".add-button");

let addTask = addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let taskText = inputField.value.trim();
    if (taskText === "") {
        alert( "Please enter a task" );
    } else {
        let newTask = document.createElement("div");
        newTask.className = "task";
        newTask.textContent = taskText
        document.querySelector(".task-list").appendChild(newTask);
        inputField.value = "";
    }
})