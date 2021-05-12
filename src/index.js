"use strict";
import css from "./styles.css";

// Move menu in and out on mobile version
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

// Add-Task Buttons
document.querySelectorAll(".add-task").forEach((addTaskBtn) => {
  addTaskBtn.addEventListener("click", showTaskForm);
});

const form = document.querySelector("form");

function showTaskForm() {
  console.log("add task btn clicked");
  form.classList.remove("form-is-hidden");
}

// submit button clicked
form.addEventListener("submit", hideTaskForm);

function hideTaskForm() {
  form.classList.add("form-is-hidden");
}
