import validityAndFilterRadios from "./js/registrar/filterRadios.js";
import Sidebar from "./js/global/sidebar.js";
import AccordionList from "./js/global/accordionList.js";
import ChangeBackground from "./js/registrar/changeBackground.js";
import initAlunos from "./js/alunos/alunos.js";

validityAndFilterRadios();

const accordion = new AccordionList("dt");
accordion.init();

const sidebar = new Sidebar(".sidebar-element", ".header");
sidebar.init();

const changeBackground = new ChangeBackground(".option-input");
changeBackground.init();

initAlunos();
