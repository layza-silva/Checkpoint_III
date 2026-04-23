let contador = 0;

// Seleciona elementos
const numero = document.getElementById("numero");
const btnIncrementar = document.getElementById("incrementar");
const btnDecrementar = document.getElementById("decrementar");
const btnZerar = document.getElementById("zerar");

//Evento
btnIncrementar.addEventListener("click", function() {
    contador++;
    atualizarTela();
});

btnDecrementar.addEventListener("click", function() {
    contador--;
    atualizarTela();
});

btnZerar.addEventListener("click", function() {
    contador = 0;
    atualizarTela();
});

//Bônus de atualização da cor
function atualizarTela() {
    numero.textContent = contador;

    if (contador > 0) {
        numero.style.color = "green";
    } else if (contador < 0) {
        numero.style.color = "red";
    } else {
        numero.style.color = "black";
    }
}