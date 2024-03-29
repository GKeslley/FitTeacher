import initModal from "../global/modal.js";

const modal = new initModal(
  '[data-modal="container"]',
  '[data-modal="fechar"]',
  "name",
  ".modal"
);

let val1 = "";
let val2 = "";

export default function registerUser(listaDeTreinos, element) {
  const name = document.getElementById("name");
  const idade = document.getElementById("idade");
  const peso = document.getElementById("peso");

  if (listaDeTreinos.length >= 1) {
    const treinosSemana = {
      dia: element.getAttribute("value"),
      treino: listaDeTreinos,
    };

    const breakName = name.value.split(" ");
    const firstName = name.value.split(" ")[0];
    let secondName;
    let fullName;

    if (breakName.length > 1) {
      secondName = name.value.split(" ")[1];
      fullName = `${firstName} ${secondName}`;
    } else {
      fullName = `${firstName}`;
    }

    const usuarioRegistrado = {
      nome: fullName,
      idade: idade.value,
      peso: peso.value,
      treinosSemana,
    };

    const semana = [
      "Segunda-Feira",
      "Terça-Feira",
      "Quarta-Feira",
      "Quinta-Feira",
      "Sexta-Feira",
      "Sabado",
      "Domingo",
    ];

    const semanasTreino = semana.map((item) => {
      if (usuarioRegistrado.treinosSemana.dia === item) {
        let user = usuarioRegistrado;
        return user;
      }
    });

    let concatValues = semanasTreino.reduce((a, b) => {
      if (a) val1 = a;
      if (b) val2 = b;
      return [].concat(val1).concat(val2);
    });

    const clearRepeatNames = concatValues.filter(function (este, i) {
      return concatValues.indexOf(este) === i && este;
    });

    // Caso o usuario exista
    const erro = document.getElementById("messageError");
    const content = document.querySelector(".registro");
    if (Object.keys(localStorage).includes(name.value)) {
      erro.innerText = "Esse usuário já existe";
      content.appendChild(erro);
    } else if (
      !Object.keys(localStorage).includes(name.value) &&
      fullName.trim()
    ) {
      setTimeout(() => {
        localStorage.setItem(fullName.trim(), JSON.stringify(clearRepeatNames));
      });
      erro.style.display = "none";
      modal.init();
    }
  }
}
