

getPoll();
function getPoll() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll", true); 
    xhr.setRequestHeader("Content-Type", "application/json"); 
    xhr.send();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            let pollDescription = JSON.parse(xhr.responseText);
            let pollTitle = document.getElementById("poll__title");
            pollTitle.innerText = pollDescription.data.title;
            let pollAnswers = document.getElementById("poll__answers");
            pollAnswers.innerHTML = "";
            pollDescription.data.answers.forEach((element) => {
                let buttonEl = document.createElement("button");
                buttonEl.classList.add("poll__answer");
                buttonEl.innerText = element;
                buttonEl.setAttribute("style", "background-color:white; color:black; border: 1px solid black;border-radius: 15px; margin: 0 5px 0 0");
                pollAnswers.appendChild(buttonEl);
            });
        };
    }; 
}

document.addEventListener("click", (element) => {
    let hasPollAnswer = element.target.classList.contains("poll__answer");
    if (hasPollAnswer) {
        element.target.removeAttribute('style');
        intervalID = setTimeout( () => {
                alert("Спасибо, ваш голос засчитан!");
                clearInterval(intervalID);
                getPoll();
            },
            100
          );
     }
    else {
        getPoll();
    }
  });
