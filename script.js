document.addEventListener("DOMContentLoaded", function() {
    const addForm = document.getElementById("add-form");
    const newTask = document.getElementById("new-task");
    const addButton = document.getElementById("add-button");
    const todoList = document.getElementById("todo-list");

    // retrieve the tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // populate the to-do list with the tasks
    tasks.forEach((task) => {
        const newListItem = document.createElement("li");
        newListItem.innerText = task;
        newListItem.classList.add("task"); 
        // create the remove button
        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("remove-button");
        // add the button to the task
        newListItem.appendChild(removeButton);
        // add the new list item to the to-do list
        todoList.appendChild(newListItem);
        // add a click event listener to the remove button
        removeButton.addEventListener("click", (event) => {
            event.preventDefault();
            // remove the task from the list
            newListItem.remove();
            // remove the task from the tasks array
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            // update the local storage
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
    });

    // add a click event listener to the button
    addButton.addEventListener("click", (event) => {
        event.preventDefault();
        // create a new list item with the text from the input field
        const newListItem = document.createElement("li");
        newListItem.innerText = newTask.value;
        newListItem.classList.add("task"); 
        // create the remove button
        const removeButton = document.createElement("button");
        removeButton.innerText = "X";
        removeButton.classList.add("remove-button");
        // add the button to the task
        newListItem.appendChild(removeButton);
        // add the new list item to the to-do list
        todoList.appendChild(newListItem);
        // add a click event listener to the remove button
        removeButton.addEventListener("click", (event) => {
            event.preventDefault();
            // remove the task from the list
            newListItem.remove();
            // remove the task from the tasks array
            const index = tasks.indexOf(newTask.value);
            tasks.splice(index, 1);
            // update the local storage
            localStorage.setItem("tasks", JSON.stringify(tasks));
        });
        // add the task to the tasks array
        tasks.push(newTask.value);
        // update the local storage
        localStorage.setItem("tasks", JSON.stringify(tasks));
        // clear the input field
        newTask.value = "";
    });
});