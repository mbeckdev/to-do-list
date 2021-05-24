"use strict";

import { createANewTask } from "./create-a-new-task.js";
import { tasks } from "./tasks.js";
import { project } from "./project.js";
import { changeTaskStatus } from "./change-task-status.js";
import { deleteAClickedTask } from "./delete-task.js";
import { editATask } from "./edit-task.js";
import { format } from "date-fns";

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  let theElements = {};

  // marker to tell if the manage form came from an addTask or an editTask thing.
  let formCameFrom = "durrrrrrr";
  // used to keep track of which index of the tasks array we're editing
  let editingThisTaskIndex = -1;
  let editingThisTaskOldTitle = "";

  function _createSections() {
    // This setup goes against the guideline of doing it in this order
    // create1 create2 create3
    // append3 under 2, append2 under 1, append1 under body
    // but if this works, I believe the code clarity will be worth it.
    _createHeader();
    _createNavMainContainer();
    _setInitialElements();
  }

  function _setInitialElements() {
    // hamburger: document.getElementById("hamburger"),
    theElements.nav = document.getElementById("navigation");
    theElements.form1 = document.getElementById("manage-task");
    theElements.firstFormRow = document.getElementById("first-form-row");
    theElements.cancelBtn = document.getElementById("form-cancel-btn");
    theElements.addProjBtn = document.getElementById("add-project");
    theElements.addProjInput = document.getElementById("add-project-input");
    theElements.form2 = document.getElementById("add-project-form");
    theElements.tasks = document.querySelectorAll(".task-first-section");
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

    createAndAdd("div", theElements.projectContainer, "addProjBtn", [
      "id",
      "add-project",
      "class",
      "nav-item-padding",
    ]);
    createAndAdd("span", theElements.addProjBtn, "addProjectIcon", [
      "id",
      "add-project-icon",
    ]);
    theElements.addProjectIcon.textContent = "+";

    createAndAdd("span", theElements.addProjBtn, "addProjectText");
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
    console.log("Creating main in DOM");
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

    createAndAdd("div", theElements.main, "addTaskInMain", [
      "class",
      "add-task",
    ]);
    createAndAdd("span", theElements.addTaskInMain, "addTaskInMainSpan1", [
      "class",
      "add-task-icon",
    ]);
    theElements.addTaskInMainSpan1.textContent = "+";
    createAndAdd("span", theElements.addTaskInMain, "addTaskInMainSpan2");
    theElements.addTaskInMainSpan2.textContent = "Add Task";

    _createManageTaskForm();
  }

  function _createManageTaskForm() {
    createAndAdd("form", theElements.main, "manageTaskForm", [
      "id",
      "manage-task",
      "class",
      "form-is-hidden",
    ]);
    createAndAdd("div", theElements.manageTaskForm, "formRowForTitle", [
      "class",
      "form-row",
    ]);
    createAndAdd("h2", theElements.formRowForTitle, "formRowTitle", [
      "id",
      "manage-form-title",
    ]);
    theElements.formRowTitle.textContent = "Add Task";
    createAndAdd("div", theElements.manageTaskForm, "formRowTaskTitle", [
      "class",
      "form-row",
    ]);
    createAndAdd(
      "label",
      theElements.formRowTaskTitle,
      "manageTaskTaskTitleLabel",
      ["for", "task-title"]
    );
    theElements.manageTaskTaskTitleLabel.textContent = "Title:";
    createAndAdd(
      "input",
      theElements.formRowTaskTitle,
      "manageTaskTaskTitleInput",
      [
        "type",
        "text",
        "name",
        "task-title",
        "placeholder",
        "Your task",
        "id",
        "first-form-row",
      ]
    );

    // theElements.manageTaskTaskTitleInput.attributes.required = "required";
    theElements.manageTaskTaskTitleInput.required = true;

    createAndAdd("div", theElements.manageTaskForm, "formRowTaskDescription", [
      "class",
      "form-row",
    ]);
    createAndAdd(
      "label",
      theElements.formRowTaskDescription,
      "manageTaskTaskDescriptionLabel",
      ["for", "task-description"]
    );
    theElements.manageTaskTaskDescriptionLabel.textContent = "Description:";
    createAndAdd(
      "input",
      theElements.formRowTaskDescription,
      "manageTaskTaskDescriptionInput",
      [
        "type",
        "text",
        "name",
        "task-description",
        "placeholder",
        "Your description",
      ]
    );

    createAndAdd("div", theElements.manageTaskForm, "formRowTaskProject", [
      "class",
      "form-row",
    ]);
    createAndAdd(
      "label",
      theElements.formRowTaskProject,
      "manageTaskTaskProjectLabel",
      ["for", "task-project"]
    );
    theElements.manageTaskTaskProjectLabel.textContent = "Project:";
    createAndAdd(
      "input",
      theElements.formRowTaskProject,
      "manageTaskTaskProjectInput",
      ["type", "text", "name", "task-project", "placeholder", "Your project"]
    );

    createAndAdd("div", theElements.manageTaskForm, "formRowTaskDate", [
      "class",
      "form-row",
    ]);
    createAndAdd(
      "label",
      theElements.formRowTaskDate,
      "manageTaskTaskDateLabel",
      ["for", "task-date"]
    );
    theElements.manageTaskTaskDateLabel.textContent = "Due Date:";
    createAndAdd(
      "input",
      theElements.formRowTaskDate,
      "manageTaskTaskDateInput",
      ["type", "date", "name", "task-date"]
    );

    createAndAdd("div", theElements.manageTaskForm, "formRowTaskPriority", [
      "class",
      "form-row",
    ]);
    createAndAdd(
      "label",
      theElements.formRowTaskPriority,
      "manageTaskTaskPriorityLabel",
      ["for", "task-priority"]
    );
    theElements.manageTaskTaskPriorityLabel.textContent = "Priority:";
    createAndAdd(
      "input",
      theElements.formRowTaskPriority,
      "manageTaskTaskPriorityInput",
      ["type", "number", "name", "task-priority", "value", "2"]
    );

    createAndAdd("div", theElements.manageTaskForm, "formRowTaskSubmit", [
      "class",
      "form-row",
      "id",
      "form-row-submit",
    ]);
    createAndAdd("input", theElements.formRowTaskSubmit, "manageTaskSubmit", [
      "type",
      "submit",
      "value",
      "Done",
    ]);

    createAndAdd("button", theElements.manageTaskForm, "cancelBtn", [
      "id",
      "form-cancel-btn",
    ]);
    theElements.cancelBtn.textContent = "x";
  }

  function createNewTask(title, description, dueDate, priority, project) {
    console.log("adding new dom task now");

    createAndAdd("div", theElements.taskContainer, title, ["class", "task"]);
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

    theElements.taskBoxInput.addEventListener("change", () => {
      console.log("it wooooooooooooooooooooorks");
      // setTaskComplete(theElements.lastClickedBox);
      changeTaskStatus(theElements.lastClickedBox);
    });

    createAndAdd("label", theElements.taskFirstSection, "taskBoxLabel", [
      "for",
      "task-box",
      "class",
      "task-title-main",
    ]);
    theElements.taskBoxLabel.textContent = title;

    createAndAdd("div", theElements.taskFirstRowMain, "taskLastSection", [
      "class",
      "task-last-section",
    ]);

    createAndAdd("div", theElements.taskLastSection, "dayOfWeek", [
      "class",
      "day-of-week",
    ]);
    createAndAdd("div", theElements.taskLastSection, "dueDate", [
      "class",
      "due-date",
    ]);
    // let theDayOfTheWeek = format(dueDate, "EEEEE");
    //"M" or "T W T F"
    // theElements.dayOfWeek.textContent = theDayOfTheWeek;

    // If a date was not entered:
    let formattedDayOfWeek = "";
    let formattedDate = "";

    if (isNaN(dueDate.getTime())) {
      // Date was not entered:
      console.log("Date wasn't entered");
    } else {
      // Date was entered:
      formattedDayOfWeek = format(dueDate, "EEEEE");
      if (format(dueDate, "EEEEEE") == "Th") {
        formattedDayOfWeek = "Th";
      } else if (format(dueDate, "EEEEEE") == "Su") {
        formattedDayOfWeek = "Su";
      }

      formattedDate = format(dueDate, "MM-dd-yy");
    }

    theElements.dayOfWeek.textContent = formattedDayOfWeek;
    theElements.dueDate.textContent = formattedDate;

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

    theElements.taskDescriptionMain.textContent = description;

    theElements.taskFirstSection.addEventListener(
      "click",
      _showTaskDescription
    );

    //delete icon E Listener
    theElements.deleteIcon.addEventListener("click", deleteAClickedTask);

    //edit icon E Listener
    theElements.editIcon.addEventListener("click", editATask);
  }

  function deleteATaskFromScreen(task) {
    // task.parentElement.
    // document.remove(task);
    task.remove();
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
      // console.log("optAttributeArray exists. ");
      if ((optAttributeArray.length + 1) % 2) {
        // console.log("optAttributeArray is even. good.");

        for (let i = 0; i < optAttributeArray.length; i += 2) {
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
    _addProjectBtnsEListeners();
    _addCancelBtnEListeners();
    _addToggleNavEListener();
    _addAddProjectBtnEListener();
    _addHideAddProjectFormEListeners();
    _addSubmitBtnEListener();

    // _addShowDescriptionEListener();
  }

  // Section for functions that add Event Listeners

  function _addProjectBtnsEListeners() {
    let allProjectsOnScreen = document.querySelectorAll(".task-set");

    allProjectsOnScreen.forEach((projectOnScreen) => {
      let projectName = "";
      projectName = projectOnScreen.textContent;
      projectOnScreen.addEventListener("click", () => {
        project.showTasksOnlyFrom(projectName);
      });
      // projectOnScreen.addEventListener("click", project.igotthis);
    });
  }

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
    // tasks.forEach((thisTask) => {
    //   thisTask.addEventListener("click", _showTaskDescription);
    // });
  }

  function _addTaskBtnsEListeners() {
    // Add-Task Buttons
    document.querySelectorAll(".add-task").forEach((addTaskBtn) => {
      dom.formCameFrom = "addTask";
      addTaskBtn.addEventListener("click", showTaskForm);
    });
  }
  // const form = document.querySelector("form");

  function _addToggleNavEListener() {
    // Move menu in and out on mobile version
    // const hamburger = document.getElementById("hamburger");
    theElements.hamburger.addEventListener("click", toggleNav);
  }

  function showTaskForm() {
    // console.log("add task btn clicked"); or called from editATask
    theElements.form1.classList.remove("form-is-hidden");
    theElements.firstFormRow.focus();

    theElements.manageTaskTaskTitleInput.value = "";
    theElements.manageTaskTaskDescriptionInput.value = "";
    theElements.manageTaskTaskDateInput.value = "";
    theElements.manageTaskTaskPriorityInput.value = "2";
  }

  function fillTaskFormWithData(taskIndex) {
    let title = tasks[taskIndex].getTitle();
    let description = tasks[taskIndex].getDescription();
    let project = tasks[taskIndex].getProject();
    let dueDate = tasks[taskIndex].getDueDate();
    let priority = tasks[taskIndex].getPriority();

    theElements.manageTaskTaskTitleInput.value = title;
    theElements.manageTaskTaskDescriptionInput.value = description;
    theElements.manageTaskTaskProjectInput.value = project;
    theElements.manageTaskTaskDateInput.value = dueDate;
    theElements.manageTaskTaskPriorityInput.value = priority;

    console.log("aaaaaaaaaaaaaaa");
    // formCameFrom = "editTask";
  }

  function _showTaskDescription(e) {
    // we need to check if they clicked on two elements
    // one is the title text and the other is the empty space to the right of it
    let descriptionSection = "";
    theElements.lastClickedBox = e.target;

    if (e.target.getAttribute("type") == "checkbox") {
      //it's a checkbox, don't worry about it
    } else {
      if (e.target.classList.contains("task-title-main")) {
        // we clicked on the task title letters
        descriptionSection =
          e.target.parentElement.parentElement.nextElementSibling;
      } else if (e.target.classList.contains("task-first-section")) {
        // we clicked the empty space to the right of the task title
        descriptionSection = e.target.parentElement.nextElementSibling;
      }

      if (descriptionSection.classList.contains("hidden-no-empty-space")) {
        descriptionSection.classList.remove("hidden-no-empty-space");
      } else {
        descriptionSection.classList.add("hidden-no-empty-space");
      }
    }
  }

  function _cancelTaskForm() {
    theElements.firstFormRow.removeAttribute("required");
    theElements.form1.classList.add("form-is-hidden");
  }

  function _addSubmitBtnEListener() {
    // submit button clicked
    theElements.form1.addEventListener("submit", endFormManageTask);
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

  function endFormManageTask(e) {
    hideTaskForm(e);

    let formTitle = theElements.manageTaskTaskTitleInput.value;
    let formDescription = theElements.manageTaskTaskDescriptionInput.value;
    // let formDueDate = new Date(theElements.manageTaskTaskDateInput.value);
    // let formDueDate = format(
    //   new Date(theElements.manageTaskTaskDateInput.value),
    //   "MM-dd-yy"
    // );
    let formDueDate = new Date(
      theElements.manageTaskTaskDateInput.value + " 00:00"
    );
    let formPriority = theElements.manageTaskTaskPriorityInput.value;
    let formProject = theElements.manageTaskTaskProjectInput.value;

    if (dom.formCameFrom == "addTask") {
      // came from someone clicking an Add Task button
      createANewTask(
        formTitle,
        formDescription,
        formDueDate,
        formPriority,
        formProject
      );
    } else if ((dom.formCameFrom = "editTask")) {
      // came from someone clicking an Edit Task button/icon
      console.log("tbddddddddddd");
      // replace data in tasks[thisIndex]

      let thisIndex = dom.editingThisTaskIndex;

      tasks[thisIndex].setTitle(formTitle);
      tasks[thisIndex].setDescription(formDescription);
      tasks[thisIndex].setDueDate(formDueDate);
      tasks[thisIndex].setPriority(formPriority);
      tasks[thisIndex].setProject(formProject);

      //redraw tasks[thisIndex] to screen
      _redrawOneTaskAfterEdit(thisIndex);
    }
  }

  function _redrawOneTaskAfterEdit(thisIndex) {
    let allDomTasks = document.querySelectorAll(".task");
    let taskToRewrite = "";
    allDomTasks.forEach((taskElement) => {
      if (
        taskElement.querySelector(".task-title-main").textContent ==
        dom.editingThisTaskOldTitle
      ) {
        taskToRewrite = taskElement;
      }
    });

    taskToRewrite.querySelector(".task-title-main").textContent =
      tasks[thisIndex].getTitle();
    taskToRewrite.querySelector(".task-description-main").textContent =
      tasks[thisIndex].getDescription();
    taskToRewrite.querySelector(".due-date").textContent =
      tasks[thisIndex].getFormattedDueDate();
    taskToRewrite.querySelector(".day-of-week").textContent =
      tasks[thisIndex].getFormattedDayOfWeekDueDate();
    // taskToRewrite.querySelector('.priority').textContent = tasks[thisIndex].getPriority();
    // priority is not shown on screen yet
    // taskToRewrite.querySelector('.project').textContent = tasks[thisIndex].getProject();
    // project is not shown on screen
  }

  function hideTaskForm(e) {
    e.preventDefault();
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

  function setTaskComplete(checkbox) {
    //do dom stuff like cross out title
    const thisTitle = checkbox.nextElementSibling;
    // thisTitle.style.color = "green";
    thisTitle.classList.add("crossed-out");
    thisTitle.parentElement.parentElement.classList.add("crossed-out");
  }

  function setTaskNotComplete(checkbox) {
    //do dom stuff like cross out title
    const thisTitle = checkbox.nextElementSibling;
    // thisTitle.style.color = "green";
    thisTitle.classList.remove("crossed-out");
    thisTitle.parentElement.parentElement.classList.remove("crossed-out");
  }
  // End of functions called from event listeners

  return {
    createNewTask: createNewTask,
    setUpInitialDom: setUpInitialDom,
    toggleNav: toggleNav,
    theElements: theElements,
    createAndAddAProject: createAndAddAProject,
    setTaskComplete: setTaskComplete,
    setTaskNotComplete: setTaskNotComplete,
    deleteATaskFromScreen: deleteATaskFromScreen,
    showTaskForm: showTaskForm,
    fillTaskFormWithData: fillTaskFormWithData,
    formCameFrom: formCameFrom,
    editingThisTaskIndex: editingThisTaskIndex,
    editingThisTaskOldTitle: editingThisTaskOldTitle,
  };
})();

export { dom };
