let taskList = document.querySelector(".task-list");
let inputField = document.querySelector(".input-field");
let addButton = document.querySelector(".add-button");

let addTask = addButton.addEventListener("click", (event) => {
    event.preventDefault();
    let taskText = inputField.value.trim();
    if (taskText === "") {
        alert( "Please enter a task" );
    } else {
        //Create task div
        let newTask = document.createElement("div");
        newTask.className = "task";
        taskList.appendChild(newTask);

        //Create text for task
        let textContent = document.createElement("div");
        textContent.innerHTML = taskText;
        newTask.appendChild(textContent);
        inputField.value = "";

        //Create button div
        let taskButtons = document.createElement("div");
        taskButtons.className = "task-buttons";
        newTask.appendChild(taskButtons);

        //Create complete button
        let completeButton = document.createElement("button");
        completeButton.className = "complete-button";
        completeButton.innerHTML = "<i class='fa-solid fa-check'></i>";
        taskButtons.appendChild(completeButton);
        completeButton.addEventListener("click", () => {
            textContent.classList.toggle("text-content");
            newTask.classList.toggle("complete");clear
        });

        //Create edit button
        let editButton = document.createElement("button");
        editButton.className = "edit-button";
        editButton.innerHTML = "<i class='fa-solid fa-pen'></i>";
        taskButtons.appendChild(editButton);

        //Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
        taskButtons.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            newTask.remove();
        });

    }
})