document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter a task.");
            return;
        }

        const li = document.createElement("li");
        const taskTextElement = document.createElement("span");
        const actionsDiv = document.createElement("div");
        const editButton = document.createElement("edit-button");
        const archiveButton = document.createElement("archive-button");
        const deleteButton = document.createElement("delete-button"); // Add a delete button

        taskTextElement.textContent = taskText;
        editButton.textContent = "Edit";
        archiveButton.textContent = "Archive";
        deleteButton.textContent = "Delete"; // Set text for the delete button

        editButton.addEventListener("click", function () {
            const newText = prompt("Edit the task:", taskText);
            if (newText !== null) {
                taskTextElement.textContent = newText;
            }
        });

        archiveButton.addEventListener("click", function () {
            li.classList.toggle("completed");
        });

        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li); // Remove the task's <li> element from the list
        });

        actionsDiv.appendChild(editButton);
        actionsDiv.appendChild(archiveButton);
        actionsDiv.appendChild(deleteButton); // Append the delete button
        li.appendChild(taskTextElement);
        li.appendChild(actionsDiv);
        taskList.appendChild(li);

        taskInput.value = "";
    });
});
