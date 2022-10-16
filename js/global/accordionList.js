export default class AccordionList {
  constructor(element) {
    this.element = document.querySelectorAll(element);
  }

  addEventAccordion() {
    this.element.forEach((element) => {
      element.addEventListener("click", () => this.activeAccordion(element));
    });
  }

  activeAccordion(element) {
    element.nextElementSibling.classList.toggle("ativo");
    element.classList.toggle("ativo");
  }

  init() {
    if (this.element.length) {
      this.activeAccordion(this.element[0]);
      this.addEventAccordion();
    }
    return this;
  }
}
