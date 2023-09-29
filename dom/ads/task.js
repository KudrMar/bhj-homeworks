let intervalID = setInterval (changingAdvertising , 1000);

function changingAdvertising() {
    const caseActive = document.getElementsByClassName("rotator__case_active");
    for (i = 0; i < caseActive.length; i++) {
        const parent = caseActive[0].parentElement;
        activateElement(parent);
    }


    function activateElement(parent) {
        const childrenRotator = parent.children;
        for (j = 0; j < childrenRotator.length; j++) {
            if (childrenRotator[j].classList.contains("rotator__case_active")) {
                childrenRotator[j].classList.remove("rotator__case_active");
                nextSibling = childrenRotator[j].nextElementSibling;
                if (nextSibling) {
                    nextSibling.classList.add("rotator__case_active");
                    clearInterval(intervalID);
                    intervalID = setInterval (changingAdvertising , nextSibling.getAttribute("data-speed"));
                    nextSibling.style.color = nextSibling.getAttribute("data-color");
                    return;
                }
                else {
                    parent.firstElementChild.classList.add("rotator__case_active");
                    clearInterval(intervalID);
                    let firstElement = parent.firstElementChild;
                    intervalID = setInterval (changingAdvertising , firstElement.getAttribute("data-speed"));
                    firstElement.style.color = firstElement.getAttribute("data-color");
                    return;
                }
            }
        }

    }

//     const rotator = document.getElementsByClassName("rotator");

//     for ( i = 0; i < rotator.length; i++){
//     const childrenRotator = rotator[i].children;
//     let activeCase = childrenRotator.getElementsByClassName("rotator__case_active");
//     activeCase.remove("rotator__case_active");
//     nextSibling = activeCase.nextElementSibling; 
//     if (nextSibling) {
//         nextSibling.add("rotator__case_active");
//     }
//     else {
//         rotator[i].firstElementChild.add("rotator__case_active"); 
//     }
// }
}
