export default class ChangeBackground {
  constructor(inputs) {
    this.inputs = document.querySelectorAll(inputs);
    this.hasChecked = "check";
  }

  init() {
    this.inputs.forEach((item) => {
      item.addEventListener("change", () => {
        if (item.checked) {
          item.classList.add(this.hasChecked);
          if (item.classList.contains(this.hasChecked)) {
            item.previousElementSibling.style.background = "#c7c7c7";
          }
        } else {
          item.previousElementSibling.style.background = "#f0f0f0";
          item.classList.remove(this.hasChecked);
        }
      });
    });
  }
}
