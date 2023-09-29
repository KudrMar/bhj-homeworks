const book = document.getElementById("book");
const collectionFontsize = document.getElementsByClassName("font-size");

for (let i = 0; i < collectionFontsize.length; i++) {
    collectionFontsize[i].onclick = (el) => {
        el.preventDefault();
        if (el.currentTarget.classList.contains("font-size_small")) {
            setStyle(el);
            setBookStyle("font-size_small");
        }
        else if (el.currentTarget.classList.contains("font-size_big")) {
            setStyle(el);
            setBookStyle("font-size_big");
        }
        else {
            setStyle(el);
            setBookStyle("");
        }
    }
}

function setStyle(el) {
    for (let i = 0; i < collectionFontsize.length; i++) {
        collectionFontsize[i].classList.remove("font-size_active");
    }
    el.currentTarget.classList.add("font-size_active");
}

function setBookStyle(el) {
    if (el === "font-size_small") {
        book.classList.add("book_fs-small");
        book.classList.remove("book_fs-big");
    }
    else if (el === "font-size_big") {
        book.classList.remove("book_fs-small");
        book.classList.add("book_fs-big");
    }
    else if (el === "") {
        book.classList.remove("book_fs-small");
        book.classList.remove("book_fs-big");
    }
} 
