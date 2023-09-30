const product__quantity_control_dec = document.getElementsByClassName("product__quantity-control_dec");

for (i = 0; i < product__quantity_control_dec.length; i++) {
    product__quantity_control_dec[i].addEventListener('click', decQuantity);
}

function decQuantity(event) {
    let element = event.currentTarget;
    let nextSibling = element.nextElementSibling;
    nextSibling.textContent = (nextSibling.textContent.trim() < 1) ? 0 : nextSibling.textContent - 1;
}

const product__quantity_control_inc = document.getElementsByClassName("product__quantity-control_inc");

for (i = 0; i < product__quantity_control_inc.length; i++) {
    product__quantity_control_inc[i].addEventListener('click', incQuantity);
}

function incQuantity(event) {
    let element = event.currentTarget;
    let previousSibling = element.previousElementSibling;
    previousSibling.textContent = Number(previousSibling.textContent) + 1;
}

const product__add = document.getElementsByClassName("product__add");

for (i = 0; i < product__add.length; i++) {
    product__add[i].addEventListener('click', addProduct);
}

const cart__products = document.getElementsByClassName("cart__products");

function addProduct(event) {

    let element = event.currentTarget;
    let quantity = element.previousElementSibling.children[1].textContent;
    if (Number(quantity) === 0) { return };

    let product = element.closest(".product");
    let addedElement;

    for (i = 0; i < cart__products[0].children.length; i++) {
        if (cart__products[0].children[i].attributes["data-id"].value === product.dataset.id) {
            addedElement = cart__products[0].children[i];
        }
    }

    if (addedElement) {
        addedElement.children[1].innerHTML = Number(addedElement.children[1].innerHTML) + Number(quantity.trim());
    }
    else {
        cart__product = document.createElement('div');
        cart__product.className = 'cart__product';
        cart__product.dataset.id = product.dataset.id;
        cart__products[0].appendChild(cart__product);;

        cart__product_image_Elem = document.createElement('img');
        cart__product_image_Elem.className = 'cart__product-image';
        cart__product_image_Elem.setAttribute("src", product.children[1].attributes["src"].nodeValue);
        cart__product.appendChild(cart__product_image_Elem);

        cart__product_count_Elem = document.createElement('div');
        cart__product_count_Elem.className = 'cart__product-count';
        cart__product_count_Elem.innerHTML = quantity.trim();
        cart__product.appendChild(cart__product_count_Elem);
    }
}