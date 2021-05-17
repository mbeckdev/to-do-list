"use strict";

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  let theElements = {
    // hamburger: document.getElementById("hamburger"),
    nav: document.getElementById("navigation"),
    form1: document.getElementById("manage-task"),
    firstFormRow: document.getElementById("first-form-row"),
    cancelBtn: document.getElementById("form-cancel-btn"),
    addProjBtn: document.getElementById("add-project"),
    addProjInput: document.getElementById("add-project-input"),
    form2: document.getElementById("add-project-form"),
    tasks: document.querySelectorAll(".task-first-section"),
  };

  function _createSections() {
    // This setup goes against the guideline of doing it in this order
    // create1 create2 create3
    // append3 under 2, append2 under 1, append1 under body
    // but if this works, I believe the code clarity will be worth it.
    _createHeader();
    _createNavMainContainer();
  }

  function _createHeader() {
    createAndAdd("header", document.body, "myHeader");

    createAndAdd("div", theElements.myHeader, "mainHeaderContainer", [
      "id",
      "main-header-container",
    ]);
    createAndAdd("div", theElements.mainHeaderContainer, "hamburger", [
      "id",
      "hamburger",
    ]);

    for (let i = 0; i < 3; i++) {
      createAndAdd("div", theElements.hamburger, "hamburgerLine", [
        "class",
        "hamburger-line",
      ]);
    }

    createAndAdd("div", theElements.mainHeaderContainer, "icon", [
      "id",
      "icon",
    ]);
    theElements.icon.textContent = "T";
    createAndAdd("h1", theElements.mainHeaderContainer, "theH1");
    theElements.theH1.textContent = "TO-DO LIST";

    //
    //
    //
    // in header  the "+ Add Task" on the right
    createAndAdd("div", theElements.myHeader, "addTaskHeader", [
      "class",
      "add-task",
    ]);

    createAndAdd("span", theElements.addTaskHeader, "span1", [
      "class",
      "add-task-icon",
    ]);
    theElements.span1.textContent = "+";
    createAndAdd("span", theElements.addTaskHeader, "span2");
    theElements.span2.textContent = "Add Task";
  }

  function _createNavMainContainer() {
    _createNav();
    _createMain();
  }

  function _createNav() {
    console.log("creating nav in DOM");

    createAndAdd("div", document.body, "navMainContainer", [
      "id",
      "nav-main-container",
    ]);
    createAndAdd("nav", theElements.navMainContainer, "nav", [
      "id",
      "navigation",
      "class",
      "nav-is-left",
    ]);
    createAndAdd("div", theElements.nav, "projectAll", [
      "class",
      "task-set nav-item-padding",
    ]);
    theElements.projectAll.textContent = "All";
    createAndAdd("div", theElements.nav, "projectToday", [
      "class",
      "task-set nav-item-padding",
    ]);
    theElements.projectToday.textContent = "Today";
    createAndAdd("div", theElements.nav, "projectWeek", [
      "class",
      "task-set nav-item-padding",
    ]);
    theElements.projectWeek.textContent = "Week";

    createAndAdd("div", theElements.nav, "projectContainer", [
      "id",
      "project-container",
    ]);

    theElements.projectContainer.textContent = "Projects";
    createAndAdd("hr", theElements.projectContainer, "hr");

    createAndAddAProject("Coding");
    createAndAddAProject("Cooking");
    createAndAddAProject("3d Printing dogs cats bunnies");

    createAndAdd("div", theElements.projectContainer, "addProject", [
      "id",
      "add-project",
      "class",
      "nav-item-padding",
    ]);
    createAndAdd("span", theElements.addProject, "addProjectIcon", [
      "id",
      "add-project-icon",
    ]);
    theElements.addProjectIcon.textContent = "+";

    createAndAdd("span", theElements.addProject, "addProjectText");
    theElements.addProjectText.textContent = "Add Project";

    createAndAdd("form", theElements.projectContainer, "form2", [
      "id",
      "add-project-form",
      "class",
      "hidden",
    ]);
    createAndAdd("input", theElements.form2, "form2Input", [
      "type",
      "text",
      "id",
      "add-project-input",
      "placeholder",
      "New Project",
    ]);
  }

  function createAndAddAProject(newProjectName) {
    createAndAdd("div", theElements.projectContainer, newProjectName, [
      "class",
      "task-set nav-item-padding",
    ]);
    theElements[newProjectName].textContent = newProjectName;
  }

  function _createMain() {
    console.log("asdf");
    createAndAdd("main", theElements.navMainContainer, "main");
    createAndAdd("div", theElements.main, "projectTitleContainer", [
      "id",
      "project-title-container",
    ]);
    createAndAdd("h2", theElements.projectTitleContainer, "h2");
    theElements.h2.textContent = "Coding";
    createAndAdd("p", theElements.projectTitleContainer, "aP");
    createAndAdd("strong", theElements.aP, "dueDateTitleText");
    theElements.dueDateTitleText.textContent = "Due Date";

    createAndAdd("hr", theElements.main, "mainHr");

    createAndAdd("div", theElements.main, "taskContainer", [
      "id",
      "task-container",
    ]);

    createNewTask("a", "a", "a", "a");
    createNewTask("bb", "a", "a", "a");
    createNewTask("cc", "a", "a", "a");
  }

  function createNewTask(title, description, dueDate, priority) {
    console.log("adding new dom task now");
    //
    //
    createAndAdd("div", theElements.taskContainer, title, ["class", "task"]);
    //
    //

    createAndAdd("div", theElements[title], "taskFirstRowMain", [
      "class",
      "task-first-row-main",
    ]);
    createAndAdd("div", theElements.taskFirstRowMain, "taskFirstSection", [
      "class",
      "task-first-section",
    ]);
    createAndAdd("input", theElements.taskFirstSection, "taskBoxInput", [
      "type",
      "checkbox",
      "name",
      "task-box",
    ]);
    createAndAdd("label", theElements.taskFirstSection, "taskBoxLabel", [
      "for",
      "task-box",
      "class",
      "task-title-main",
    ]);
    theElements.taskBoxLabel.textContent = "Buy a Whiteboard";

    createAndAdd("div", theElements.taskFirstRowMain, "taskLastSection", [
      "class",
      "task-last-section",
    ]);
    createAndAdd("div", theElements.taskLastSection, "dayOfWeek", [
      "class",
      "day-of-week",
    ]);
    theElements.dayOfWeek.textContent = "M";
    createAndAdd("div", theElements.taskLastSection, "dueDate", [
      "class",
      "due-date",
    ]);
    theElements.dueDate.textContent = "5/30/21";
    createAndAdd("div", theElements.taskLastSection, "editIcon", [
      "class",
      "edit-icon",
    ]);
    createAndAdd("div", theElements.editIcon, "editInner", [
      "class",
      "edit-inner",
    ]);
    createAndAdd("div", theElements.taskLastSection, "deleteIcon", [
      "class",
      "delete-icon",
    ]);
    createAndAdd("div", theElements.deleteIcon, "deleteIconPart1", [
      "class",
      "delete1",
    ]);
    createAndAdd("div", theElements.deleteIcon, "deleteIconPart2", [
      "class",
      "delete2",
    ]);

    createAndAdd("div", theElements[title], "taskDescriptionSection", [
      "class",
      "task-description-section hidden-no-empty-space",
    ]);
    createAndAdd(
      "div",
      theElements.taskDescriptionSection,
      "taskDescriptionMain",
      ["class", "task-description-main"]
    );
    theElements.taskDescriptionMain.textContent =
      "Some description stufffff yep I want pancakes and stuff. Lorem ipsum. Need to buy some other stuff also. Maybe a unicorn. I tried but failed.";
  }

  function createAndAdd(
    elementType,
    appendUnder,
    thisName2,
    optAttributeArray
  ) {
    // I made the optAttributeArray like this because it was easier for me to
    // see my code when I call createAndAdd - it takes up less lines the way I
    // have my editor set up.
    // I also tried having it as a ...optAttributeArray where you would call it like
    // createAndAdd('thing', 'thing', thing', 'id','hamburger', 'class','hidden')
    // which would be a viable option also.
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

  function setUpInitialDom() {
    console.log("setting up initial dom now");
    // set up initial few tasks for testing
    // then later get stuff from localHost that you saved from last time you loaded it
    _createSections();

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
    createNewTask: createNewTask,
    setUpInitialDom: setUpInitialDom,
    toggleNav: toggleNav,
    theElements: theElements,
    createAndAddAProject: createAndAddAProject,
  };
})();

export { dom };
