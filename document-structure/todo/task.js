const tasksForm = document.getElementById("tasks__form");
const tasksList = document.getElementById("tasks__list");


function moveRect(event) {
    event.preventDefault();
    const element = document.getElementById('task__input');
    if (element.value.trim() == '') 
    {
        return
    };

    let taskElem = document.createElement('div');
    taskElem.className = 'task';
    let tasksListFirstChild = tasksList.firstElementChild;
    if (tasksListFirstChild) {
        tasksList.insertBefore(taskElem , tasksListFirstChild)
    }
    else {
        tasksList.appendChild(taskElem);
    };

    let taskTitleElem = document.createElement('div');
    taskTitleElem.className = 'task__title';
    taskTitleElem.innerHTML = element.value;
    taskElem.appendChild(taskTitleElem);

    let taskRemoveElem = document.createElement('a');
    taskRemoveElem.className = 'task__remove';
    taskRemoveElem.innerHTML = "&times";
    taskRemoveElem.setAttribute("href", "#");
    taskElem.appendChild(taskRemoveElem);

    taskRemoveElem.addEventListener("click", removeTask)

    tasksForm.reset();
}

const button = document.getElementById('tasks__add');

button.addEventListener('click', moveRect);

function removeTask(event) {
    let element = event.currentTarget;
    let parent = element.parentElement; 
    parent.remove();  
}