let jogosAlugados = 1;
function alterarStatus(idJogo) {
  let gameClicado = document.getElementById(`game-${idJogo}`);

  let capa = gameClicado.querySelector(".dashboard__item__img");
  let button = gameClicado.querySelector(".dashboard__item__button");

  if (capa.classList.contains("dashboard__item__img--rented")) {
    if (confirm("Deseja realmente devolver este jogo?")) {
      capa.classList.remove("dashboard__item__img--rented");
      button.classList.remove("dashboard__item__button--return");
      button.textContent = "Alugar";
      jogosAlugados--;
    }
  } else {
    capa.classList.add("dashboard__item__img--rented");
    button.classList.add("dashboard__item__button--return");
    button.textContent = "Devolver";
    jogosAlugados++;
  }
  contador();
}

function contador() {
  console.log(`Total de jogos alugados: ${jogosAlugados}`);
}
