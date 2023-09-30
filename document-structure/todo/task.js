addEventListener("keydown", (event)=>{
    if (event.key !="Enter") {return};
    moveRect(event)
});

const tasks__form = document.getElementById("tasks__form");
const tasks__list = document.getElementById("tasks__list");


function moveRect(event) {
    event.preventDefault();
    const element = document.getElementById('task__input');
    if (element.value.trim() == '') {return};

    taskElem = document.createElement('div');
    taskElem.className = 'task';
    let tasks__list_FirstChild = tasks__list.firstElementChild;
    if (tasks__list_FirstChild) {
        tasks__list.insertBefore(taskElem , tasks__list_FirstChild)
    }
    else {
        tasks__list.appendChild(taskElem);
    };

    task__titleElem = document.createElement('div');
    task__titleElem.className = 'task__title';
    task__titleElem.innerHTML = element.value;
    taskElem.appendChild(task__titleElem);

    task__removeElem = document.createElement('a');
    task__removeElem.className = 'task__remove';
    task__removeElem.innerHTML = "&times";
    task__removeElem.setAttribute("href", "#");
    taskElem.appendChild(task__removeElem);

    task__removeElem.addEventListener("click", removeTask)

    tasks__form.reset();
}

const button = document.getElementById('tasks__add');

button.addEventListener('click', moveRect);

function removeTask(event) {
    let element = event.currentTarget;
    let parent = element.parentElement; 
    parent.remove();  
}