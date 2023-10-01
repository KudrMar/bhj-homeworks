let tooltipElem;

addEventListener("click", clickFunction);

function clickFunction(event) {
    event.preventDefault();

    if (tooltipElem) {
        tooltipElem.remove();
        tooltipElem = null;
    }
    
        let element = event.target;

    let hasTooltip = element.classList.contains("has-tooltip");
    if (!hasTooltip) {
        return;
    }
        tooltipElem = document.createElement('div');
        tooltipElem.classList.add('tooltip');
        tooltipElem.classList.add('tooltip_active');
        tooltipElem.dataset.position = "top";
        tooltipElem.innerHTML = element.title;
        document.body.appendChild(tooltipElem);
        let currentCoord = element.getBoundingClientRect();

        let left = currentCoord.left + (element.offsetWidth - tooltipElem.offsetWidth) / 2;
        if (left < 0) left = 0; 
        let top = currentCoord.top - tooltipElem.offsetHeight - 5;
        if (top < 0) { 
            top = currentCoord.top + element.offsetHeight + 5;
        }

        tooltipElem.style.left = left + 'px';
        tooltipElem.style.top = top + 'px';
    
}





