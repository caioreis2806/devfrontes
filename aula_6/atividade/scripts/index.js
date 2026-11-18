
function marcar(id, nome) {
  // Encontra o card pelo ID
  let card = document.getElementById(id);

  // Verifica se o usuário já marcou esse fato
  if (card.classList.contains("selecionado")) {

    // Desmarca o fato
    card.classList.remove("selecionado");
    localStorage.removeItem(id);

  } else {

    // Marca o fato como conhecido
    card.classList.add("selecionado");
    localStorage.setItem(id, "conhecido");

  }

  // Atualiza a quantidade de fatos conhecidos
  atualizarContador();
}


// Conta quantos fatos foram marcados
function atualizarContador() {
  let cards = document.querySelectorAll(".fato");
  let contador = 0;

  for (let i = 0; i < cards.length; i++) {

    if (cards[i].classList.contains("selecionado")) {
      contador++;
    }

  }

  document.getElementById("contador").innerText =
    "Você já conhecia " + contador + " de " +
    cards.length + " fatos sobre Ayrton Senna!";
}


// Recupera as seleções salvas
function carregarSelecoes() {
  let cards = document.querySelectorAll(".fato");

  for (let i = 0; i < cards.length; i++) {

    let id = cards[i].id;

    if (localStorage.getItem(id) == "conhecido") {
      cards[i].classList.add("selecionado");
    }

  }

  atualizarContador();
}


// Executa ao carregar a página
carregarSelecoes();
