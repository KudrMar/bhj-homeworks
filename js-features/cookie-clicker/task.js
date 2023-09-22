
const elemenClicker__counter = document.getElementById("clicker__counter");
const elemenCookie = document.getElementById("cookie");

elemenCookie.onclick = () => {
    
    if (elemenClicker__counter.textContent % 2 == 0 ) {
    
        elemenCookie.width = elemenCookie.width * 1.1;
        elemenCookie.height = elemenCookie.height * 1.1;
    }
    else {
        elemenCookie.width = elemenCookie.width / 1.1;
        elemenCookie.height = elemenCookie.height / 1.1;
    }
    elemenClicker__counter.textContent = Number(elemenClicker__counter.textContent) + 1;
}