"use strict";
import css from "./styles.css";

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  const theElements = {
    hamburger: document.getElementById("hamburger"),
    nav: document.getElementById("navigation"),
    form1: document.getElementById("manage-task"),
    firstFormRow: document.getElementById("first-form-row"),
    cancelBtn: document.getElementById("form-cancel-btn"),
    addProjBtn: document.getElementById("add-project"),
    addProjInput: document.getElementById("add-project-input"),
    form2: document.getElementById("add-project-form"),
    tasks: document.querySelectorAll(".task-first-section"),
  };

  function addNewTask(title, description, dueDate, priority) {
    console.log("adding new dom task now");
  }

  function setUpInitialDom() {
    console.log("setting up initial dom now");
    // set up initial few tasks for testing
    // then later get stuff from localHost that you saved from last time you loaded it
    _addTaskBtnsEListeners();
    _addCancelBtnEListeners();
    _addToggleNaveEListener();
    _addAddProjectBtnEListener();
    _addHideAddProjectFormEListeners();
    _addSubmitBtnEListener();
    _addShowDescriptionEListener();
  }

  // Section for functions that add Event Listeners

  function _addAddProjectBtnEListener() {
    // Add-Project 'Button'
    theElements.addProjBtn.addEventListener("click", showAddProjectInput);
  }

  function _addCancelBtnEListeners() {
    //Cancel button for manage-task form
    theElements.cancelBtn.addEventListener("click", _cancelTaskForm);
  }

  function _addHideAddProjectFormEListeners() {
    theElements.form2.addEventListener("submit", hideAddProjectForm);
    theElements.addProjInput.addEventListener("focusout", hideAddProjectForm);
  }

  function _addShowDescriptionEListener() {
    // Show description when clicking on task
    theElements.tasks.forEach((thisTask) => {
      thisTask.addEventListener("click", _showTaskDescription);
    });
  }

  function _addTaskBtnsEListeners() {
    // Add-Task Buttons
    document.querySelectorAll(".add-task").forEach((addTaskBtn) => {
      addTaskBtn.addEventListener("click", _showTaskForm);
    });
  }
  // const form = document.querySelector("form");

  function _addToggleNaveEListener() {
    // Move menu in and out on mobile version
    // const hamburger = document.getElementById("hamburger");
    theElements.hamburger.addEventListener("click", toggleNav);
  }

  function _showTaskForm() {
    console.log("add task btn clicked");
    theElements.form1.classList.remove("form-is-hidden");
    theElements.firstFormRow.focus();
  }

  function _showTaskDescription(e) {
    const descriptionSection = e.target.parentElement.parentElement.parentElement.querySelector(
      ".task-description-section"
    );

    if (descriptionSection.classList.contains("hidden-no-empty-space")) {
      descriptionSection.classList.remove("hidden-no-empty-space");
    } else {
      descriptionSection.classList.add("hidden-no-empty-space");
    }
  }

  function _cancelTaskForm() {
    theElements.firstFormRow.removeAttribute("required");
    theElements.form1.classList.add("form-is-hidden");
  }

  function _addSubmitBtnEListener() {
    // submit button clicked
    theElements.form1.addEventListener("submit", hideTaskForm);
  }

  // Functions called from event listeners:

  function showAddProjectInput() {
    console.log("showAddProjectInput ran");
    theElements.form2.classList.remove("hidden");
    theElements.addProjInput.focus();
  }

  function hideAddProjectForm() {
    theElements.form2.classList.add("hidden");
    console.log("done with form2");
  }

  function hideTaskForm() {
    theElements.form1.classList.add("form-is-hidden");
  }

  function toggleNav() {
    // const nav = document.getElementById("navigation");
    console.log("toggling nav");

    if (theElements.nav.classList.contains("nav-is-left")) {
      theElements.nav.classList.remove("nav-is-left");
    } else {
      theElements.nav.classList.add("nav-is-left");
    }
  }
  // End of functions called from event listeners

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
