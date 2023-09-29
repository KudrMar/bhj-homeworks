

window.addEventListener("scroll", function () {
    const reveal = document.getElementsByClassName("reveal");
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < reveal.length; i++) {
        const elementTop = reveal[i].getBoundingClientRect().top;
        const elementBottom = reveal[i].getBoundingClientRect().bottom;
        if ((elementTop < viewportHeight) && (elementBottom > 0)) {
            reveal[i].classList.add("reveal_active");
        }
        else {
            reveal[i].classList.remove("reveal_active");
        }
    }
});
