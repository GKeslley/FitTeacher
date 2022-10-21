import ChangeBackground from "./js/changeBackground.js";
import validityAndFilterRadios from "./js/filterRadios.js";
import AccordionList from "./js/global/accordionList.js";
import Sidebar from "./js/global/sidebar.js";

validityAndFilterRadios();

const accordion = new AccordionList("dt");
accordion.init();

const sidebar = new Sidebar(".sidebar-element", ".header");
sidebar.init();

const changeBackground = new ChangeBackground(".option-input");
changeBackground.init();
