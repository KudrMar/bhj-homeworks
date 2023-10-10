const productQuantityControlDec = document.getElementsByClassName("product__quantity-control_dec");

for (let i = 0; i < productQuantityControlDec.length; i++) {
    productQuantityControlDec[i].addEventListener('click', decQuantity);
}

function decQuantity(event) {
    let element = event.currentTarget;
    let nextSibling = element.nextElementSibling;
    nextSibling.textContent = (nextSibling.textContent.trim() < 2) ? 0 : nextSibling.textContent - 1;
}

const productQuantityControlInc = document.getElementsByClassName("product__quantity-control_inc");

for (let i = 0; i < productQuantityControlInc.length; i++) {
    productQuantityControlInc[i].addEventListener('click', incQuantity);
}

function incQuantity(event) {
    let element = event.currentTarget;
    let previousSibling = element.previousElementSibling;
    previousSibling.textContent = Number(previousSibling.textContent) + 1;
}

const productAdd = document.getElementsByClassName("product__add");

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener('click', addProduct);
}

const cartProducts = document.getElementsByClassName("cart__products");

function addProduct(event) {

    let element = event.currentTarget;
    let quantity = element.previousElementSibling.children[1].textContent;
    if (Number(quantity) === 0) { return };

    let product = element.closest(".product");
    let addedElement = Array.from(cartProducts[0].children).find((el) => {
        return el.attributes["data-id"].value === product.dataset.id
    });

    if (addedElement) {
        addedElement.children[1].innerHTML = Number(addedElement.children[1].innerHTML) + Number(quantity.trim());
    }
    else {
        let cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.dataset.id = product.dataset.id;
        cartProducts[0].appendChild(cartProduct);;

        let cartProductImageElem = document.createElement('img');
        cartProductImageElem.className = 'cart__product-image';
        cartProductImageElem.setAttribute("src", product.children[1].attributes["src"].nodeValue);
        cartProduct.appendChild(cartProductImageElem);

        let cartProductCount_Elem = document.createElement('div');
        cartProductCount_Elem.className = 'cart__product-count';
        cartProductCount_Elem.innerHTML = quantity.trim();
        cartProduct.appendChild(cartProductCount_Elem);
    }
}
