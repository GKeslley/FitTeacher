export default function initAlunos() {
  const userRegistrado = document.querySelector("[data-alunos]");
  const deletUser = document.querySelector("[data-btn='delet']");

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

    function deletUsers() {
      const elementUser = document.querySelectorAll(".userContent");
      const btnDelet = document.querySelectorAll(".btnDelet");
      const contentPai = document.querySelector(".alunos-content");

      elementUser.forEach((item) => {
        item.classList.toggle("delet");

        if (!item.classList.contains("delet")) {
          deletUser.innerText = "Deletar";
        } else if (item.classList.contains("delet")) {
          deletUser.innerText = "Cancelar";
        }
      });

      btnDelet.forEach((item) => {
        item.addEventListener("click", (event) => {
          event.preventDefault();
          const user = item.parentElement;
          const itemDelet =
            item.parentElement.querySelector(".userName").innerText;

          const arrNv = Array.from([contentPai.children]);

          if (arrNv.length) {
            contentPai.removeChild(user);
            localStorage.removeItem(itemDelet);
          }
        });
      });
    }
    deletUser.addEventListener("click", deletUsers);
  }
}
