function executar(evento) {
  evento.preventDefault();
  limparErros();

  const nome = document.querySelector("#nome");
  const erroNome = document.querySelector("#erro-nome");

  if(nome.value === "") {
    erroNome.textContent = "Nome não pode estar vazio!";
    erroNome.classList.add("erro");
    erroNome.classList.remove("oculto");
  }  


  const idade = document.querySelector("#idade");
  const erroIdade = document.querySelector("#erro-idade");

  if (idade.value === ""){
    erroIdade.textContent = "idade não pode estar vazio!";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  } else if(Number(idade.value) < 18) {
    erroIdade.textContent = "É necessário ter 18 anos";
    erroIdade.classList.add("erro");
    erroIdade.classList.remove("oculto");
  }
const email = document.querySelecotr("#email");
const erroEmail  = document.queySelector("#erro-email");
if (email.value === ""){
  erroEmail.textContent = "Email não pode estar vazio";
  erroEmail.classList.add("erro");
  erroEmail.classList.remove("oculto");
}

const termos = document.querySelector("#termos");
const erroTermos = document.querySelector("#erro-termos");
if (!termos.checked){
  erroTermos.textContent = "É preciso aceitar os termos!";
  erroTermos.classList.add("erro");
  erroTermos.classList.remove("oculto");
}

const valido = document.querySelectorAll(".erro") . length


if (!valido) {
  concluido.textContent = "corrija os erros para prosseguir";
  concluido.classList.add("erro");
  concluido.classList.remove("oculto");
}
}

//TAREFA: COMO VALIDADAR UM E-MAIL USANDO REGEX

function limparErros() {
  document.querySelectorAll(".erro").forEach((elemento) => {
    elemento.classList.remove("erro");
    elemento.classList.add("oculto");
  })
}