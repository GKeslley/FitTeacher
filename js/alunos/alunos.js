export default function initAlunos() {
  const userRegistrado = document.querySelector("[data-alunos]");

  if (userRegistrado) {
    Object.keys(localStorage).forEach((name, index) => {
      const alunos = localStorage.getItem(name);

      setAlunos(JSON.parse(alunos), index);
    });

    function setAlunos(alunos, index) {
      const li = document.createElement("li");
      const ul = document.createElement("ul");

      ul.classList.add("userContent");

      alunos.forEach((user) => {
        const { dia: dias, treino: treinos } = user.treinosSemana;
        const { nome: userNome, idade: userIdade, peso: userPeso } = user;

        const setVirgula = treinos.toString().replace(/,/g, ", ");

        li.append(
          `<div> <button class="fechar" data-modal="close">X</button>  <p>${dias}</p> <span>${setVirgula}</span> </div>`
        );

        ul.innerHTML = `<li class="userName">${userNome}</li> <li>${userIdade} anos</li> <li>${userPeso} kg</li> <li>${li.innerText}</li> <p>Checar informações</p> <button class="btnDelet">Deletar</button>`;
      });

      userRegistrado.appendChild(ul);
    }
  }
}
