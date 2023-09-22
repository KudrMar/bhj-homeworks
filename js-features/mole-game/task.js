const elemenDead = document.getElementById("dead");
const elemenLost = document.getElementById("lost");

for (let i = 1; i < 10; i++) {
    document.getElementById("hole" + i).onclick = (el) => {
        if (el.currentTarget.className.includes("hole_has-mole")){
            elemenDead.textContent = Number(elemenDead.textContent) + 1;
        }
        else {
            elemenLost.textContent = Number(elemenLost.textContent) + 1;
        }

        if (Number(elemenDead.textContent) === 10) {
            alert("WIN");
            elemenLost.textContent = 0;
            elemenDead.textContent = 0;
        }
        if (Number(elemenLost.textContent) === 5) {
            alert("GAME OVER");
            elemenLost.textContent = 0;
            elemenDead.textContent = 0;
        }
    }
}