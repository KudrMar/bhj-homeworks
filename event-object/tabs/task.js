let tab = document.querySelectorAll('.tab');
tab__content = document.querySelectorAll('.tab__content');
header = document.querySelector('.tab__navigation');

header.addEventListener('click', function (event) {
    let target = event.target;
    if (target && target.classList.contains('tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                tab[i].classList.add("tab_active");
                tab__content[i].classList.add("tab__content_active");
            }
            else {
                tab[i].classList.remove("tab_active");
                tab__content[i].classList.remove("tab__content_active");
            }
        }
    }
});