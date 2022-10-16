import outsideClick from "./outsideclick.js";

export default class Sidebar {
  constructor(sideElement, sidebarContent) {
    this.sideElement = document.querySelector(sideElement);
    this.sidebarContent = document.querySelector(sidebarContent);
    this.active = "sideActive";
  }

  init() {
    if (this.sideElement && this.sidebarContent)
      this.sideElement.addEventListener("click", () => {
        this.sidebarContent.classList.add(this.active);
        outsideClick(this.sidebarContent, ["click"], () => {
          this.sidebarContent.classList.remove(this.active);
        });
      });
  }
}
