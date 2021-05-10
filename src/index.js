"use strict";
import css from "./styles.css";

const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", toggleNav);

const nav = document.getElementById("navigation");
function toggleNav() {
  console.log("toggling nav");
  if (nav.classList.contains("nav-is-left")) {
    nav.classList.remove("nav-is-left");
  } else {
    nav.classList.add("nav-is-left");
  }
}
