document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".appointment-form");

  if (!form) {
    console.error("Formulário não encontrado!");
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = form.querySelector("input[placeholder='Nome']").value.trim();
    const sobrenome = form.querySelector("input[placeholder='Sobrenome']").value.trim();
    const nascimento = form.querySelector("input[placeholder='Data de nascimento']").value.trim();
    const sus = form.querySelector("input[placeholder='Número do cartão SUS']").value.trim();
    const especialidade = form.querySelector("input[placeholder='Especialidade desejada']").value.trim();
    const tipoConsulta = form.querySelector("input[placeholder='Tipo de consulta (Presencial / remoto)']").value.trim();
    const dataHorario = form.querySelector("input[placeholder='Data e horário preferido']").value.trim();
    const email = form.querySelector("input[type='email']").value.trim();

    if (!nome || !sobrenome || !nascimento || !sus || !especialidade || !tipoConsulta || !dataHorario || !email) {
      alert("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    alert(`Consulta agendada com sucesso para ${nome} ${sobrenome}!\n\nPreferência: ${dataHorario}`);
    form.reset();
  });
});
