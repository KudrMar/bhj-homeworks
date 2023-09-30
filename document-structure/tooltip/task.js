let tooltipElem;

addEventListener("mouseout", mouseoutFunction);

function mouseoutFunction(event) {
    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
            }  
}

addEventListener("mouseover", mouseOverFunction);


function mouseOverFunction(event) {
    let element = event.target;

    let hasTooltip = element.classList.contains("has-tooltip");
    if (!hasTooltip) return; 
     tooltipElem = document.createElement('div');
     tooltipElem.className = 'tooltip';
     tooltipElem.className = 'tooltip_active';
     tooltipElem.dataset.position = "top";
     tooltipElem.innerHTML = element.title;
     document.body.appendChild(tooltipElem); 

    //  let currentCoord = element.getBoundingClientRect();

    // let left = currentCoord.left + (element.offsetWidth - tooltipElem.offsetWidth) / 2;
    // if (left < 0) left = 0; // не заезжать за левый край окна

    // let top = currentCoord.top - tooltipElem.offsetHeight - 5;
    // if (top < 0) { // если подсказка не помещается сверху, то отображать её снизу
    //   top = currentCoord.top + element.offsetHeight + 5;
    // }

    // tooltipElem.style.left = left + 'px';
    // tooltipElem.style.top = top + 'px';
}


