document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  if (!form) {
    console.error("Formulário de login não encontrado.");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    if (!email || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Digite um e-mail válido.");
      return;
    }

    if (senha.length < 6) {
      alert("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    alert("Login efetuado com sucesso!");
    form.reset();
  });
});
