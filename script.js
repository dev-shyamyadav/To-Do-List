let taskList = document.querySelector(".task-list");
let inputField = document.querySelector(".input-field");
let addButton = document.querySelector(".add-button");
let taskNum = 0;

let addEmpty = () => {
    if(taskNum === 0){
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "empty";
        emptyDiv.innerHTML = "<i class='fa-solid fa-inbox'></i>You have nothing task today!";
        taskList.appendChild(emptyDiv);
    }
    else{
        document.querySelector(".empty").remove();
    }
}
addEmpty();

let addTask = addButton.addEventListener("click", (event) => {
    event.preventDefault();
    taskNum++;
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
        editButton.addEventListener("click", () => {
            if (newTask.querySelector("input[type='text']")) return; // Check if already in edit mode
            let originalText = textContent.innerHTML; // Store the original task text
            textContent.remove();
            let editField = document.createElement("input");
            editField.type = "text";
            editField.className = "edit-field";
            editField.placeholder = "New Task...";
            newTask.insertBefore(editField, newTask.firstChild);
            editField.focus();
            editField.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    if (editField.value.trim() === "") {
                        alert("Enter New Task");
                    } else {
                        textContent.innerHTML = editField.value.trim(); // Update task text
                        editField.remove();
                        newTask.insertBefore(textContent, newTask.firstChild);
                    }
                }
            });
        });
        

        //Create delete button
        let deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.innerHTML = "<i class='fa-solid fa-trash'></i>";
        taskButtons.appendChild(deleteButton);
        deleteButton.addEventListener("click", () => {
            newTask.remove();
            taskNum--;
            addEmpty();
        });

    }
    addEmpty();
})