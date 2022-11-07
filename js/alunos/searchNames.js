export default class SearchNames {
  constructor(input, names) {
    this.input = document.getElementById(input);
    this.name = document.querySelectorAll(names);
    this.searchName = this.searchName.bind(this);
  }

  searchName(event) {
    this.name.forEach((item) => {
      const parentItem = item.parentElement;
      if (item.innerText.includes(event.target.value)) {
        parentItem.style.display = "grid";
      } else {
        parentItem.style.display = "none";
      }
    });
  }

  addEventSearch() {
    this.input.addEventListener("keyup", this.searchName);
  }

  init() {
    if (this.input && this.name.length) {
      this.addEventSearch();
    }
    return this;
  }
}
