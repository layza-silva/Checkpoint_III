// Seleciona o formulário
const formulario = document.getElementById("formulario");

// Adiciona o evento de submit
formulario.addEventListener("submit", function(event) {

  // Pega os valores dos campos
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const idade = document.getElementById("idade").value;

  let erro = false;

  // Validação do nome
  if (nome === "") {
    alert("O nome não pode estar vazio.");
    erro = true;
  }

  // Validação do email
  if (!email.includes("@")) {
    alert("O email deve conter '@'.");
    erro = true;
  }

  // Validação da idade
  if (idade <= 0) {
    alert("A idade deve ser maior que 0.");
    erro = true;
  }

  // Impede envio se houver erro
  if (erro) {
    event.preventDefault();
  }
});