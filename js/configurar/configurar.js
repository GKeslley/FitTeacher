export default class ClearLocalStorage {
  constructor(button, content) {
    this.button = document.querySelector(button);
    this.content = document.querySelector(content);
    this.p = document.createElement("p");
  }

  addEvent() {
    this.p.innerText = "Removido com sucesso";
    this.p.classList.add("msgRemove");
    this.button.addEventListener("click", () => {
      localStorage.clear();
      this.addAndRemoveMsg();
    });
  }

  addAndRemoveMsg() {
    this.content.appendChild(this.p);
    setTimeout(() => {
      this.p.style.display = "none";
    }, 1000);
  }

  init() {
    if (this.button && this.content) {
      this.addEvent();
    }
    return this;
  }
}
