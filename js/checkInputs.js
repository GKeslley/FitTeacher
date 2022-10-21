import registerUser from "./registerUser.js";

export default function checkIfInputIsTrue(objeto, element) {
  const listaDeTreinos = [...objeto].map((data) => {
    const treinos = data.treino;

    const classListElements = document.querySelectorAll("[data-treino]");

    let treino = "";

    classListElements.forEach((item) => {
      const dia = item.classList.value;
      if (
        dia === "segunda" ||
        dia === "terca" ||
        dia === "quarta" ||
        dia === "quinta" ||
        dia === "sexta" ||
        dia === "sabado" ||
        dia === "domingo"
      ) {
        treino = treinos;
      }
    });

    return treino;
  });

  registerUser(listaDeTreinos, element);
}
