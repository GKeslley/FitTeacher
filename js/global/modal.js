import outsideClick from "./outsideclick.js";

export default class initModal {
  constructor(container, btnCloseModal, name, modal) {
    this.modalContainer = document.querySelector(container);
    this.btnCloseModal = document.querySelector(btnCloseModal);
    this.name = document.getElementById(name);
    this.modal = document.querySelector(modal);
  }

  closeModal() {
    this.modalContainer.classList.add("ativo");

    outsideClick(this.modal, ["click", "touchstart"], () => {
      this.modalContainer.classList.remove("ativo");
      window.location.reload();
    });
  }

  addEventModal() {
    this.btnCloseModal.addEventListener("click", () => {
      this.modalContainer.classList.remove("ativo");
      window.location.reload();
    });
    this.closeModal();
  }

  init() {
    if (this.btnCloseModal && this.modalContainer && this.name.value) {
      this.addEventModal();
    }
    return this;
  }
}
