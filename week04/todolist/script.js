function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const taskList = document.getElementById('taskList');

        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');

        const taskCheckbox = document.createElement('input');
        taskCheckbox.type = 'checkbox';
        taskCheckbox.onclick = toggleTaskCompletion;

        const taskTextElement = document.createElement('span');
        taskTextElement.classList.add('task-text');
        taskTextElement.innerText = taskText;

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete-btn');
        deleteBtn.innerText = '×';
        deleteBtn.onclick = deleteTask;

        taskItem.appendChild(taskCheckbox);
        taskItem.appendChild(taskTextElement);
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);

        taskInput.value = ''; // Clear the input field
    }
}

function toggleTaskCompletion(event) {
    const taskTextElement = event.target.parentNode.querySelector('.task-text');
    if (event.target.checked) {
        taskTextElement.classList.add('completed');
    } else {
        taskTextElement.classList.remove('completed');
    }
}

function deleteTask(event) {
    const taskItem = event.target.parentNode;
    taskItem.remove();
}
