import validityAndFilterRadios from "./registrar/filterRadios.js";
import Sidebar from "./global/sidebar.js";
import AccordionList from "./global/accordionList.js";
import ChangeBackground from "./registrar/changeBackground.js";
import initAlunos from "./alunos/alunos.js";
import Tabnav from "./alunos/tab-nav.js";
import SearchNames from "./alunos/searchNames.js";
import ClearLocalStorage from "./configurar/configurar.js";

validityAndFilterRadios();

const accordion = new AccordionList("dt");
accordion.init();

const sidebar = new Sidebar(".sidebar-element", ".header");
sidebar.init();

const changeBackground = new ChangeBackground(".option-input");
changeBackground.init();

initAlunos();

const tabNav = new Tabnav(
  ".alunos-content",
  ".userContent",
  '[data-modal="close"]'
);
tabNav.init();

const namesSearch = new SearchNames("student", ".userName");
namesSearch.init();

const clearStorage = new ClearLocalStorage("[data-remove]", ".configuracao");
clearStorage.init();
