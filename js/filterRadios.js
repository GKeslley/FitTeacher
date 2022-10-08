export default function validityAndFilterRadios(event) {
  const content = document.querySelector("[data-content]");
  const buttonSubmit = document.querySelector("[data-submit]");

  if (buttonSubmit && content) {
    if (document.getElementById("myForm").checkValidity()) {
      event.preventDefault();

      const elementsContent = content.querySelectorAll("[data-treino]");

      elementsContent.forEach((item, index) => {
        const inputs = item.querySelectorAll(".option-input");

        const verifyInputsChecked = Array.from(inputs).map((input) =>
          input.checked
            ? {
                dia: elementsContent[index].classList.value,
                treino: input.getAttribute("name").replace(/\d+/g, ""),
              }
            : false
        );

        const filterVerifyInputs = verifyInputsChecked.filter(
          (element) => element
        );
      });
    }
    buttonSubmit.addEventListener("click", validityAndFilterRadios);
  }
}
