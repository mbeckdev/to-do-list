"use strict";

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  let theElements = {
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

  function createSections() {
    // This setup goes against the guideline of doing it in this order
    // create1 create2 create3
    // append3 under 2, append2 under 1, append1 under body
    // but if this works, I believe the code clarity will be worth it.
    createAndAdd("header", document.body, "header2");
    createAndAdd(
      "div",
      document.body,
      "navMainContainer",
      "id",
      "nav-main-container",
      "class",
      "class-dur"
    );
    // theElements.navMainContainer.setAttribute("id", "nav-main-container");

    createAndAdd("div", theElements.header2, "lol1");
    createAndAdd("div", theElements.header2, "lol2");

    console.log(theElements.header2);
  }
  createSections();

  function createAndAdd(
    elementType,
    appendUnder,
    thisName2,
    ...optAttributeArray
  ) {
    theElements[thisName2] = document.createElement(elementType);
    appendUnder.appendChild(theElements[thisName2]);

    // ...optAttributeArray should look like this:
    // [optAttributeType, optAttributeValue,
    // optAttributeType2, optAttributeValue2,]
    if (!(optAttributeArray == undefined)) {
      console.log("optAttributeArray exists. ");
      if ((optAttributeArray.length + 1) % 2) {
        console.log("optAttributeArray is even. good.");

        for (let i = 0; i < optAttributeArray.length; i += 2) {
          console.log("durr");
          theElements[thisName2].setAttribute(
            optAttributeArray[i],
            optAttributeArray[i + 1]
          );
        }
      } else {
        console.log(
          "Error, optAttributeArray is odd, you want an even number of arguments here."
        );
      }
    }

    // if ((optAttributeArray.length + 1) % 2) && (!(optAttributeArray == undefined)){
    //   //then array is even number, we always want even like 'id', 'blah', 'class', 'blah2'
    //   console.log("optAttributeArray is even. good.");
    // }
    // if (!(optAttributeType == undefined)) {
    //   theElements[thisName2].setAttribute(optAttributeType, optAttributeValue);
    // } else {
    //   console.log("optAttributeType = undefined");
    // }
  }

  // const header2 = document.createElement("header");
  // document.body.appendChild(header2);

  // const theElements.navMainContainer = document.createElement("div");
  // const theElements.nav = document.createElement('nav');
  // theElements.navMainContainer.appendChild(theElements.nav);
  // document.body.appendChild(navMainContainer);
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

export { dom };
