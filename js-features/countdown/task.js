
const changeTime = function () {
    const elementTimer = document.getElementById("timer");
    if (Number(elementTimer.textContent) > 0) {
        elementTimer.textContent = elementTimer.textContent - 1;
    }
    else {
        alert("Вы победили в конкурсе");
    }
}

setInterval(changeTime, 1000);