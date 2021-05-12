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

// const form = document.querySelector("form");
const form1 = document.getElementById("manage-task");

function showTaskForm() {
  console.log("add task btn clicked");
  form1.classList.remove("form-is-hidden");
  document.getElementById("first-form-row").focus();
}

// submit button clicked
form1.addEventListener("submit", hideTaskForm);

function hideTaskForm() {
  form1.classList.add("form-is-hidden");
}

// Add-Project 'Button'
const addProjBtn = document.getElementById("add-project");
addProjBtn.addEventListener("click", showAddProjectInput);

const addProjInput = document.getElementById("add-project-input");
const form2 = document.getElementById("add-project-form");

function showAddProjectInput() {
  console.log("showAddProjectInput ran");
  form2.classList.remove("hidden");
  addProjInput.focus();
}

form2.addEventListener("submit", hideAddProjectForm);
addProjInput.addEventListener("focusout", hideAddProjectForm);

function hideAddProjectForm() {
  form2.classList.add("hidden");
  console.log("done with form2");
}
