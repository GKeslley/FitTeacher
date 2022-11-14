import debounce from "../global/debounce.js";

export default class moveElementCards {
  constructor(elementsMove, containerElements) {
    this.elementsMove = document.querySelectorAll(elementsMove);
    this.containerElements = document.querySelectorAll(containerElements);
    this.dragOfX = window.innerWidth * (50 / 100);
    this.dragOfY = window.innerHeight * (50 / 100);
    this.alunoAtivo = "alunoAtivo";
  }

  initMove(event) {
    this.containerElements.forEach((item) => {
      if (window.matchMedia("(min-width: 900px)").matches) {
        if (item.classList.contains(this.alunoAtivo)) {
          addEventListener("mousedown", this.addEventMove);
        }
      }
    });
  }

  addEventMove() {
    addEventListener("mousemove", this.moveElement);
    addEventListener("mouseup", this.endMove);
  }

  moveElement(event) {
    this.elementsMove.forEach((item) => {
      if (event.type === "mousemove") {
        if (event.pageX + 180 > window.innerWidth) {
          item.style.left = `${event.pageX - 190}px`;
          item.classList.remove(this.alunoAtivo);
        } else {
          item.style.left = event.pageX + "px";
        }

        if (event.pageY + 120 > window.innerHeight) {
          item.style.top = `${event.pageY - 190}px`;
          item.classList.remove(this.alunoAtivo);
        } else {
          item.style.top = event.pageY + "px";
        }
      }
    });
  }

  endMove() {
    removeEventListener("mousemove", this.moveElement);
    removeEventListener("mouseup", this.endMove);
    removeEventListener("mousedown", this.addEventMove);
  }

  resizeWindow() {
    this.endMove();
    this.elementsMove.forEach((item) => {
      item.style.top = "auto";
      item.style.left = "auto";
    });
  }

  bindEventsMove() {
    this.moveElement = this.moveElement.bind(this);
    this.endMove = this.endMove.bind(this);
    this.addEventMove = this.addEventMove.bind(this);
    this.resizeWindow = debounce(this.resizeWindow.bind(this), 200);
  }

  init(widthPageResize) {
    if (widthPageResize != false) {
      if (this.elementsMove.length) {
        this.containerElements.forEach((item) => {
          if (item.classList.contains(this.alunoAtivo)) {
            this.bindEventsMove();
            this.initMove();
          }
        });
      }
    } else {
      this.resizeWindow();
    }
    return this;
  }
}
