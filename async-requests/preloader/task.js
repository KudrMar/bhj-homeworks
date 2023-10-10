
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true); 
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        let imgLoader = document.getElementById("loader");
        imgLoader.classList.remove("loader_active");
        
        let responseExchangeRate = JSON.parse(xhr.responseText);

        let items = document.getElementById("items");
        
        
        for (let key in responseExchangeRate.response.Valute) {
            let ExchangeRate = responseExchangeRate.response.Valute[key];
            let divEl = document.createElement("div");
            divEl.classList.add("item");
            let output = "";
            output += "<div class='item__code'>" + ExchangeRate.CharCode + "</div>" +
            "<div class='item__value'>" + ExchangeRate.Value + "</div>" +
            "<div class='item__currency'>" + ExchangeRate.Name + "</div>";
            divEl.innerHTML = output;
            items.appendChild(divEl);
        }

    };
};