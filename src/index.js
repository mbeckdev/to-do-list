"use strict";
import css from "./styles.css";

// Add-Task Buttons
document.querySelectorAll(".add-task").forEach((addTaskBtn) => {
  addTaskBtn.addEventListener("click", showTaskForm);
});

// const form = document.querySelector("form");
const form1 = document.getElementById("manage-task");
const firstFormRow = document.getElementById("first-form-row");
function showTaskForm() {
  console.log("add task btn clicked");
  form1.classList.remove("form-is-hidden");
  firstFormRow.focus();
}

//Cancel button for manage-task form
const cancelBtn = document.getElementById("form-cancel-btn");
cancelBtn.addEventListener("click", cancelTaskForm);

function cancelTaskForm() {
  firstFormRow.removeAttribute("required");

  form1.classList.add("form-is-hidden");
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

// Show description when clicking on task
const tasks = document.querySelectorAll(".task-first-section");
tasks.forEach((thisTask) => {
  thisTask.addEventListener("click", showTaskDescription);
});

function showTaskDescription(e) {
  console.log("show task description! tbd");
  //Figure out how to get thisTask

  // thisTask.classList.remove('hidden');

  console.log(e.target.parentElement);
  console.log(
    e.target.parentElement.parentElement.parentElement.querySelector(
      ".task-description-section"
    )
  );

  const descriptionSection = e.target.parentElement.parentElement.parentElement.querySelector(
    ".task-description-section"
  );

  if (descriptionSection.classList.contains("hidden-no-empty-space")) {
    descriptionSection.classList.remove("hidden-no-empty-space");
  } else {
    descriptionSection.classList.add("hidden-no-empty-space");
  }
}

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  const theElements = {
    hamburger: document.getElementById("hamburger"),
    nav: document.getElementById("navigation"),
  };

  // Move menu in and out on mobile version
  // const hamburger = document.getElementById("hamburger");
  theElements.hamburger.addEventListener("click", toggleNav);

  // const nav = document.getElementById("navigation");
  function toggleNav() {
    console.log("toggling nav");

    if (theElements.nav.classList.contains("nav-is-left")) {
      theElements.nav.classList.remove("nav-is-left");
    } else {
      theElements.nav.classList.add("nav-is-left");
    }
  }

  function addNewTask(title, description, dueDate, priority) {
    console.log("adding new dom task now");
  }

  function setUpInitialDom() {
    console.log("setting up initial dom now");
    // set up initial few tasks for testing
    // then later get stuff from localHost that you saved from last time you loaded it
  }

  return {
    addNewTask: addNewTask,
    setUpInitialDom: setUpInitialDom,
    toggleNav: toggleNav,
  };
})();

dom.addNewTask();
dom.setUpInitialDom();

//to do:
// A factory function to create new tasks

// An object to hold each task's - title, description, dueDate, priority
//  project?
// An object to hold all the projects (there is a default one too)

// An object to keep all the DOM stuff together
// A separate place to keep all the task manipulation stuff together.
