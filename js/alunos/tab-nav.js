import debounce from "../global/debounce.js";
import moveElementCards from "./moverElemento.js";

export default class Tabnav {
  constructor(tabContent, tabMenu, btnCloseTab) {
    this.tabContent = document.querySelectorAll(tabContent);
    this.tabMenu = document.querySelectorAll(tabMenu);
    this.btnCloseTab = document.querySelectorAll(btnCloseTab);
  }

  activeTab(index) {
    this.tabMenu.forEach((section) => section.classList.remove("alunoAtivo"));
    this.tabMenu[index].classList.add("alunoAtivo");
    this.moveElement = new moveElementCards(".alunoAtivo", ".userContent");

    if (window.matchMedia("(min-width: 900px)").matches) {
      this.resizeWindow();
      this.moveElement.init();
    } else {
      this.moveElement.init(false);
    }
  }

  resizeWindow() {
    addEventListener("resize", () => {
      if (window.innerWidth < 900) {
        debounce(this.moveElement.init(false), 200);
      } else {
        removeEventListener("resize", this.resizeWindow);
      }
    });
  }

  addTabEvent() {
    this.tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        this.closeTab(itemMenu, index);
      });
    });
  }

  closeTab(itemMenu, index) {
    this.btnCloseTab.forEach((button) => {
      button.addEventListener("click", () => {
        if (itemMenu.classList.contains("alunoAtivo")) {
          itemMenu.classList.add("tirar");
        }
      });
    });
    if (itemMenu.classList.contains("tirar")) {
      itemMenu.classList.remove("alunoAtivo");
      itemMenu.style.top = 55 + "%";
      itemMenu.style.left = 80 + "%";
      setTimeout(() => {
        itemMenu.classList.remove("tirar");
      }, 1);
    } else {
      this.activeTab(index);
    }
  }

  bindEvents() {
    this.addTabEvent = this.addTabEvent.bind(this);
    this.activeTab = this.activeTab.bind(this);
    this.resizeWindow = debounce(this.resizeWindow.bind(this), 200);
  }

  init() {
    if (this.tabContent.length && this.tabMenu.length) {
      this.bindEvents();
      this.addTabEvent();
    }
    return this;
  }
}
