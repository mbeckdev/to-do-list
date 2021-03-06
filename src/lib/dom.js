'use strict';

import { createANewTask } from './create-a-new-task.js';
import { tasks } from './tasks.js';
import { project } from './project.js';
import { changeTaskStatus } from './change-task-status.js';
import { deleteAClickedTask } from './delete-task.js';
import { editATask } from './edit-task.js';
import { format } from 'date-fns';
import { projects } from './projects.js';
import { storage } from './storage.js';

// a module pattern called once, but we can call the inner stuff multiple times elsewhere
// perhaps split this into a separate .js file
let dom = (function () {
  let theElements = {};

  // marker to tell if the manage form came from an addTask or an editTask thing.
  let formCameFrom = 'durrrrrrr';
  let addProjectFormWasCancelled = false;
  // used to keep track of which index of the tasks array we're editing
  let editingThisTaskIndex = -1;
  let editingThisTaskOldTitle = '';

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
    theElements.nav = document.getElementById('navigation');
    theElements.form1 = document.getElementById('manage-task');
    theElements.firstFormRow = document.getElementById('first-form-row');
    theElements.cancelBtn = document.getElementById('form-cancel-btn');
    theElements.addProjBtn = document.getElementById('add-project');
    theElements.addProjInput = document.getElementById('add-project-input');
    theElements.form2 = document.getElementById('add-project-form');
    theElements.tasks = document.querySelectorAll('.task-first-section');
  }

  function _createHeader() {
    createAndAdd('header', document.body, 'myHeader');

    createAndAdd('div', theElements.myHeader, 'mainHeaderContainer', [
      'id',
      'main-header-container',
    ]);
    createAndAdd('div', theElements.mainHeaderContainer, 'hamburger', [
      'id',
      'hamburger',
    ]);

    for (let i = 0; i < 3; i++) {
      createAndAdd('div', theElements.hamburger, 'hamburgerLine', [
        'class',
        'hamburger-line',
      ]);
    }

    createAndAdd('div', theElements.mainHeaderContainer, 'icon', [
      'id',
      'icon',
    ]);
    theElements.icon.textContent = 'T';
    createAndAdd('h1', theElements.mainHeaderContainer, 'theH1');
    theElements.theH1.textContent = 'TO-DO LIST';

    //
    //
    //
    // in header  the "+ Add Task" on the right
    createAndAdd('div', theElements.myHeader, 'addTaskHeader', [
      'class',
      'add-task',
    ]);

    createAndAdd('span', theElements.addTaskHeader, 'span1', [
      'class',
      'add-task-icon',
    ]);
    theElements.span1.textContent = '+';
    createAndAdd('span', theElements.addTaskHeader, 'span2');
    theElements.span2.textContent = 'Add Task';
  }

  function _createNavMainContainer() {
    _createNav();
    _createMain();
  }

  function _createNav() {
    createAndAdd('div', document.body, 'navMainContainer', [
      'id',
      'nav-main-container',
    ]);
    createAndAdd('nav', theElements.navMainContainer, 'nav', [
      'id',
      'navigation',
      'class',
      'nav-is-left',
    ]);
    createAndAdd('div', theElements.nav, 'projectAll', [
      'class',
      'task-set nav-item-padding',
    ]);
    theElements.projectAll.textContent = 'All';
    createAndAdd('div', theElements.nav, 'projectToday', [
      'class',
      'task-set nav-item-padding',
    ]);
    theElements.projectToday.textContent = 'Today';
    createAndAdd('div', theElements.nav, 'projectWeek', [
      'class',
      'task-set nav-item-padding',
    ]);
    theElements.projectWeek.textContent = 'Week';

    createAndAdd('div', theElements.nav, 'projectContainer', [
      'id',
      'project-container',
    ]);

    theElements.projectContainer.textContent = 'Projects';
    createAndAdd('hr', theElements.projectContainer, 'hr');

    //fromhere

    createAndAdd('div', theElements.projectContainer, 'addProjBtn', [
      'id',
      'add-project',
      'class',
      'nav-item-padding',
    ]);
    createAndAdd('span', theElements.addProjBtn, 'addProjectIcon', [
      'id',
      'add-project-icon',
    ]);
    theElements.addProjectIcon.textContent = '+';

    createAndAdd('span', theElements.addProjBtn, 'addProjectText');
    theElements.addProjectText.textContent = 'Add Project';

    createAndAdd('form', theElements.projectContainer, 'form2', [
      'id',
      'add-project-form',
      'class',
      'hidden',
    ]);
    createAndAdd('input', theElements.form2, 'form2Input', [
      'type',
      'text',
      'id',
      'add-project-input',
      'placeholder',
      'New Project',
    ]);

    // project.addNewProject("Coding");
    // project.addNewProject("Cooking");
    // project.addNewProject("3d Printing dogs cats bunnies");
  }

  function createAndAddAProject(newProjectName) {
    theElements[newProjectName] = document.createElement('div');
    theElements[newProjectName].classList.add(
      'task-set',
      'nav-item-padding',
      'nav-project'
    );

    theElements.projectContainer.insertBefore(
      theElements[newProjectName],
      theElements.addProjBtn
    );

    theElements[newProjectName].textContent = newProjectName;
    theElements[newProjectName].addEventListener('click', () => {
      project.showTasksOnlyFrom(newProjectName);
    });
  }

  function _createMain() {
    createAndAdd('main', theElements.navMainContainer, 'main');
    createAndAdd('div', theElements.main, 'projectTitleContainer', [
      'id',
      'project-title-container',
    ]);

    createAndAdd('div', theElements.projectTitleContainer, 'h2Container', [
      'id',
      'h2-container',
    ]);

    createAndAdd('div', theElements.h2Container, 'deleteIconForProject', [
      'class',
      'delete-icon hidden',
    ]);
    createAndAdd(
      'div',
      theElements.deleteIconForProject,
      'deleteIconPart1ForProject',
      ['class', 'delete1']
    );
    createAndAdd(
      'div',
      theElements.deleteIconForProject,
      'deleteIconPart2ForProject',
      ['class', 'delete2']
    );

    createAndAdd('h2', theElements.h2Container, 'h2');
    theElements.h2.textContent = 'All';

    createAndAdd('p', theElements.projectTitleContainer, 'aP');
    createAndAdd('strong', theElements.aP, 'dueDateTitleText');
    theElements.dueDateTitleText.textContent = 'Due Date';

    createAndAdd('hr', theElements.main, 'mainHr');

    createAndAdd('div', theElements.main, 'taskContainer', [
      'id',
      'task-container',
    ]);

    createAndAdd('div', theElements.main, 'addTaskInMain', [
      'class',
      'add-task',
    ]);
    createAndAdd('span', theElements.addTaskInMain, 'addTaskInMainSpan1', [
      'class',
      'add-task-icon',
    ]);
    theElements.addTaskInMainSpan1.textContent = '+';
    createAndAdd('span', theElements.addTaskInMain, 'addTaskInMainSpan2');
    theElements.addTaskInMainSpan2.textContent = 'Add Task';

    _createManageTaskForm();
  }

  function _createManageTaskForm() {
    createAndAdd('form', theElements.main, 'manageTaskForm', [
      'id',
      'manage-task',
      'class',
      'form-is-hidden',
    ]);
    createAndAdd('div', theElements.manageTaskForm, 'formRowForTitle', [
      'class',
      'form-row',
    ]);
    createAndAdd('h2', theElements.formRowForTitle, 'formRowTitle', [
      'id',
      'manage-form-title',
    ]);
    theElements.formRowTitle.textContent = 'Add Task';
    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskTitle', [
      'class',
      'form-row',
    ]);
    createAndAdd(
      'label',
      theElements.formRowTaskTitle,
      'manageTaskTaskTitleLabel',
      ['for', 'task-title']
    );
    theElements.manageTaskTaskTitleLabel.textContent = 'Title:';
    createAndAdd(
      'input',
      theElements.formRowTaskTitle,
      'manageTaskTaskTitleInput',
      [
        'type',
        'text',
        'name',
        'task-title',
        'placeholder',
        'Your task',
        'id',
        'first-form-row',
      ]
    );

    theElements.manageTaskTaskTitleInput.required = true;

    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskDescription', [
      'class',
      'form-row',
    ]);
    createAndAdd(
      'label',
      theElements.formRowTaskDescription,
      'manageTaskTaskDescriptionLabel',
      ['for', 'task-description']
    );
    theElements.manageTaskTaskDescriptionLabel.textContent = 'Description:';
    createAndAdd(
      'input',
      theElements.formRowTaskDescription,
      'manageTaskTaskDescriptionInput',
      [
        'type',
        'text',
        'name',
        'task-description',
        'placeholder',
        'Your description',
      ]
    );

    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskProject', [
      'class',
      'form-row',
    ]);
    createAndAdd(
      'label',
      theElements.formRowTaskProject,
      'manageTaskTaskProjectLabel',
      ['for', 'task-project']
    );
    theElements.manageTaskTaskProjectLabel.textContent = 'Project:';
    createAndAdd(
      'input',
      theElements.formRowTaskProject,
      'manageTaskTaskProjectInput',
      ['type', 'text', 'name', 'task-project', 'placeholder', 'Your project']
    );

    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskDate', [
      'class',
      'form-row',
    ]);
    createAndAdd(
      'label',
      theElements.formRowTaskDate,
      'manageTaskTaskDateLabel',
      ['for', 'task-date']
    );
    theElements.manageTaskTaskDateLabel.textContent = 'Due Date:';
    createAndAdd(
      'input',
      theElements.formRowTaskDate,
      'manageTaskTaskDateInput',
      ['type', 'date', 'name', 'task-date']
    );

    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskPriority', [
      'class',
      'form-row',
    ]);
    createAndAdd(
      'label',
      theElements.formRowTaskPriority,
      'manageTaskTaskPriorityLabel',
      ['for', 'task-priority']
    );
    theElements.manageTaskTaskPriorityLabel.textContent = 'Priority:';
    createAndAdd(
      'input',
      theElements.formRowTaskPriority,
      'manageTaskTaskPriorityInput',
      [
        'type',
        'number',
        'name',
        'task-priority',
        'value',
        '0',
        'min',
        '0',
        'max',
        '3',
      ]
    );

    createAndAdd('div', theElements.manageTaskForm, 'formRowTaskSubmit', [
      'class',
      'form-row',
      'id',
      'form-row-submit',
    ]);
    createAndAdd('input', theElements.formRowTaskSubmit, 'manageTaskSubmit', [
      'type',
      'submit',
      'value',
      'Done',
    ]);

    createAndAdd('button', theElements.manageTaskForm, 'cancelBtn', [
      'id',
      'form-cancel-btn',
    ]);
    theElements.cancelBtn.textContent = 'x';
  }

  function _writeInitialCheckboxToScreen(title) {
    //find the index we want
    let thisIndex = -1;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getTitle() == title) {
        thisIndex = i;
      }
    }
    let isChecked = tasks[thisIndex].getComplete();
    if (isChecked) {
      // task is complete
      dom.setTaskComplete(theElements.taskBoxInput);
      tasks[thisIndex].setComplete(true);
      theElements.taskBoxInput.checked = true;
    } else {
      // task is no longer complete
      dom.setTaskNotComplete(theElements.taskBoxInput);
      tasks[thisIndex].setComplete(false);
    }
    storage.setLocalStorage();
    // changeTaskStatus(theElements.taskBoxInput);
  }

  function createNewTask(title, description, dueDate, priority, project) {
    createAndAdd('div', theElements.taskContainer, title, ['class', 'task']);
    createAndAdd('div', theElements[title], 'taskFirstRowMain', [
      'class',
      'task-first-row-main',
    ]);
    createAndAdd('div', theElements.taskFirstRowMain, 'taskFirstSection', [
      'class',
      'task-first-section',
    ]);
    createAndAdd('input', theElements.taskFirstSection, 'taskBoxInput', [
      'type',
      'checkbox',
      'name',
      'task-box',
    ]);

    theElements.taskBoxInput.addEventListener('change', () => {
      // setTaskComplete(theElements.lastClickedBox);
      changeTaskStatus(theElements.lastClickedBox);
    });

    createAndAdd('label', theElements.taskFirstSection, 'taskBoxLabel', [
      'for',
      'task-box',
      'class',
      'task-title-main',
    ]);
    theElements.taskBoxLabel.textContent = title;

    // writeInitialCheckboxCrossout
    _writeInitialCheckboxToScreen(title);

    createAndAdd('div', theElements.taskFirstRowMain, 'taskLastSection', [
      'class',
      'task-last-section',
    ]);

    createAndAdd('div', theElements.taskLastSection, 'dayOfWeek', [
      'class',
      'day-of-week',
    ]);
    createAndAdd('div', theElements.taskLastSection, 'dueDate', [
      'class',
      'due-date',
    ]);
    // let theDayOfTheWeek = format(dueDate, "EEEEE");
    //"M" or "T W T F"
    // theElements.dayOfWeek.textContent = theDayOfTheWeek;

    // If a date was not entered:
    let formattedDayOfWeek = '';
    let formattedDate = '';

    if (isNaN(dueDate.getTime())) {
      // Date was not entered:
    } else {
      // Date was entered:
      formattedDayOfWeek = format(dueDate, 'EEEEE');
      if (format(dueDate, 'EEEEEE') == 'Th') {
        formattedDayOfWeek = 'Th';
      } else if (format(dueDate, 'EEEEEE') == 'Su') {
        formattedDayOfWeek = 'Su';
      }

      formattedDate = format(dueDate, 'MM-dd-yy');
    }

    theElements.dayOfWeek.textContent = formattedDayOfWeek;
    theElements.dueDate.textContent = formattedDate;

    createAndAdd('div', theElements.taskLastSection, 'editIcon', [
      'class',
      'edit-icon',
    ]);
    createAndAdd('div', theElements.editIcon, 'editInner', [
      'class',
      'edit-inner',
    ]);

    createAndAdd('div', theElements.taskLastSection, 'deleteIcon', [
      'class',
      'delete-icon',
    ]);
    createAndAdd('div', theElements.deleteIcon, 'deleteIconPart1', [
      'class',
      'delete1',
    ]);
    createAndAdd('div', theElements.deleteIcon, 'deleteIconPart2', [
      'class',
      'delete2',
    ]);

    createAndAdd('div', theElements[title], 'taskDescriptionSection', [
      'class',
      'task-description-section hidden-no-empty-space',
    ]);
    createAndAdd(
      'div',
      theElements.taskDescriptionSection,
      'taskDescriptionMain',
      ['class', 'task-description-main']
    );

    theElements.taskDescriptionMain.textContent = description;

    _setTaskColorByPriority(theElements[title], priority);

    theElements.taskFirstSection.addEventListener(
      'click',
      _showTaskDescription
    );

    //delete icon E Listener
    theElements.deleteIcon.addEventListener('click', deleteAClickedTask);

    //edit icon E Listener
    theElements.editIcon.addEventListener('click', editATask);
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
          'Error, optAttributeArray is odd, you want an even number of arguments here.'
        );
      }
    }
  }

  function changeTitle(titleText) {
    theElements.h2.textContent = titleText;
  }

  // const header2 = document.createElement("header");
  // document.body.appendChild(header2);

  // const theElements.navMainContainer = document.createElement("div");
  // const theElements.nav = document.createElement('nav');
  // theElements.navMainContainer.appendChild(theElements.nav);
  // document.body.appendChild(navMainContainer);

  function setUpInitialDom() {
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
    _addProjectDeleteBtnEListener();

    // _addShowDescriptionEListener();
  }

  // Section for functions that add Event Listeners

  function _addProjectDeleteBtnEListener() {
    theElements.projectTitleContainer.addEventListener(
      'mouseover',
      showProjectDeleteBtn
    );
    theElements.projectTitleContainer.addEventListener(
      'mouseout',
      hideProjectDeleteBtn
    );
    theElements.projectTitleContainer.addEventListener('click', () => {
      project.deleteProject(theElements.h2.textContent);
    });
  }

  function redrawProjects() {
    // delete all projects from menu
    document.querySelectorAll('.nav-project').forEach((navProjectElement) => {
      navProjectElement.remove();
    });

    // draw all projects in menu according to what's in projects.allProjects
    for (let i = 0; i < projects.allProjects.length; i++) {
      dom.createAndAddAProject(projects.allProjects[i]);
    }
  }

  function _addProjectBtnsEListeners() {
    let allProjectsOnScreen = document.querySelectorAll('.task-set');

    allProjectsOnScreen.forEach((projectOnScreen) => {
      let projectName = '';
      projectName = projectOnScreen.textContent;
      projectOnScreen.addEventListener('click', () => {
        project.showTasksOnlyFrom(projectName);
      });
    });
  }

  function _addAddProjectBtnEListener() {
    // Add-Project 'Button'
    theElements.addProjBtn.addEventListener('click', showAddProjectInput);
  }

  function _addCancelBtnEListeners() {
    //Cancel button for manage-task form
    theElements.cancelBtn.addEventListener('click', _cancelTaskForm);
  }

  function _addHideAddProjectFormEListeners() {
    theElements.form2.addEventListener('submit', hideAddProjectForm);
    theElements.addProjInput.addEventListener('focusout', (e) => {
      dom.addProjectFormWasCancelled = true;
      hideAddProjectForm(e);
    });
  }

  function _addShowDescriptionEListener() {
    // Show description when clicking on task
    theElements.tasks.forEach((thisTask) => {
      thisTask.addEventListener('click', _showTaskDescription);
    });
    // tasks.forEach((thisTask) => {
    //   thisTask.addEventListener("click", _showTaskDescription);
    // });
  }

  function _addTaskBtnsEListeners() {
    // Add-Task Buttons
    document.querySelectorAll('.add-task').forEach((addTaskBtn) => {
      dom.formCameFrom = 'addTask';
      addTaskBtn.addEventListener('click', showTaskForm);
    });
  }
  // const form = document.querySelector("form");

  function _addToggleNavEListener() {
    // Move menu in and out on mobile version
    // const hamburger = document.getElementById("hamburger");
    theElements.hamburger.addEventListener('click', toggleNav);
  }

  function showTaskForm() {
    dom.formCameFrom = 'addTask';
    theElements.form1.classList.remove('form-is-hidden');
    theElements.firstFormRow.focus();

    theElements.manageTaskTaskTitleInput.value = '';
    theElements.manageTaskTaskDescriptionInput.value = '';
    theElements.manageTaskTaskDateInput.value = '';
    theElements.manageTaskTaskPriorityInput.value = '0';

    if (theElements.h2.textContent != 'All') {
      theElements.manageTaskTaskProjectInput.value =
        project.getCurrentlySelectedProject();
    } else {
      theElements.manageTaskTaskProjectInput.value = '';
    }
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

    let formDateValueToAdd = '';
    if (isNaN(dueDate.getTime())) {
      // Date was not entered:
    } else {
      // Date was entered:
      formDateValueToAdd = format(dueDate, 'yyy-MM-dd');
    }

    theElements.manageTaskTaskDateInput.value = formDateValueToAdd;
    theElements.manageTaskTaskPriorityInput.value = priority;
  }

  function _showTaskDescription(e) {
    // we need to check if they clicked on two elements
    // one is the title text and the other is the empty space to the right of it
    let descriptionSection = '';
    theElements.lastClickedBox = e.target;

    if (e.target.getAttribute('type') == 'checkbox') {
      //it's a checkbox, don't worry about it
    } else {
      if (e.target.classList.contains('task-title-main')) {
        // we clicked on the task title letters
        descriptionSection =
          e.target.parentElement.parentElement.nextElementSibling;
      } else if (e.target.classList.contains('task-first-section')) {
        // we clicked the empty space to the right of the task title
        descriptionSection = e.target.parentElement.nextElementSibling;
      }

      if (descriptionSection.classList.contains('hidden-no-empty-space')) {
        descriptionSection.classList.remove('hidden-no-empty-space');
      } else {
        descriptionSection.classList.add('hidden-no-empty-space');
      }
    }
  }

  function _cancelTaskForm() {
    theElements.firstFormRow.removeAttribute('required');
    theElements.form1.classList.add('form-is-hidden');
    dom.formCameFrom = 'cancelled';
  }

  function _addSubmitBtnEListener() {
    // submit button clicked
    theElements.form1.addEventListener('submit', endFormManageTask);
  }

  // Functions called from event listeners:

  function showAddProjectInput() {
    theElements.form2.classList.remove('hidden');
    theElements.addProjInput.focus();
  }

  function hideAddProjectForm(e) {
    e.preventDefault();
    theElements.form2.classList.add('hidden');

    if (dom.addProjectFormWasCancelled) {
      //dont add a new project -- do nothing
    } else {
      let typedProjectName = theElements.addProjInput.value;

      //if project isn't in the projects list, add it, and add to screen
      let counter = 0;
      for (let i = 0; i < projects.allProjects.length; i++) {
        if (projects.allProjects[i] == typedProjectName) {
          //it exists already, don't add it
          break;
        } else {
          counter++;
        }
      }

      // if we went through all the projects and none of them matched - add project
      if (counter == projects.allProjects.length) {
        project.addNewProject(typedProjectName);
        storage.setLocalStorage();
      }
    }

    dom.addProjectFormWasCancelled = false;
    theElements.addProjInput.value = '';
  }

  function endFormManageTask(e) {
    hideTaskForm(e);

    if (dom.formCameFrom == 'addTask' || dom.formCameFrom == 'editTask') {
      let formTitle = theElements.manageTaskTaskTitleInput.value;
      let formDescription = theElements.manageTaskTaskDescriptionInput.value;
      let formDueDate = new Date(
        theElements.manageTaskTaskDateInput.value + ' 00:00'
      );
      let formPriority = theElements.manageTaskTaskPriorityInput.value;
      let formProject = theElements.manageTaskTaskProjectInput.value;

      //if project isn't in the projects list, add it, and add to screen
      let counter = 0;
      for (let i = 0; i < projects.allProjects.length; i++) {
        if (projects.allProjects[i] == formProject) {
          //it exists already, don't add it
          break;
        } else {
          counter++;
        }
      }

      // if we went through all the projects and none of them matched - add project
      if (counter == projects.allProjects.length) {
        project.addNewProject(formProject);
      }

      if (dom.formCameFrom == 'addTask') {
        // came from someone clicking an Add Task button
        createANewTask(
          formTitle,
          formDescription,
          formDueDate,
          formPriority,
          formProject
        );
        storage.setLocalStorage();
      } else if ((dom.formCameFrom = 'editTask')) {
        // came from someone clicking an Edit Task button/icon
        // replace data in tasks[thisIndex]

        let thisIndex = dom.editingThisTaskIndex;

        tasks[thisIndex].setTitle(formTitle);
        tasks[thisIndex].title = formTitle;

        tasks[thisIndex].setDescription(formDescription);
        tasks[thisIndex].setDueDate(formDueDate);
        tasks[thisIndex].setPriority(formPriority);
        tasks[thisIndex].setProject(formProject);

        //redraw tasks[thisIndex] to screen
        _redrawOneTaskAfterEdit(thisIndex);
        storage.setLocalStorage();
      }
    } else if ((dom.formCameFrom = 'cancelled')) {
    }
  }

  function _redrawOneTaskAfterEdit(thisIndex) {
    let allDomTasks = document.querySelectorAll('.task');
    let taskToRewrite = '';
    allDomTasks.forEach((taskElement) => {
      if (
        taskElement.querySelector('.task-title-main').textContent ==
        dom.editingThisTaskOldTitle
      ) {
        taskToRewrite = taskElement;
      }
    });

    taskToRewrite.querySelector('.task-title-main').textContent =
      tasks[thisIndex].getTitle();
    taskToRewrite.querySelector('.task-description-main').textContent =
      tasks[thisIndex].getDescription();
    taskToRewrite.querySelector('.due-date').textContent =
      tasks[thisIndex].getFormattedDueDate();
    taskToRewrite.querySelector('.day-of-week').textContent =
      tasks[thisIndex].getFormattedDayOfWeekDueDate();

    _setTaskColorByPriority(taskToRewrite, tasks[thisIndex].getPriority());
  }

  function _setTaskColorByPriority(task, priorityNum) {
    let priorityNumber = priorityNum;
    if (task.classList.contains('priority1-color')) {
      task.classList.remove('priority1-color');
    }
    if (task.classList.contains('priority2-color')) {
      task.classList.remove('priority2-color');
    }
    if (task.classList.contains('priority3-color')) {
      task.classList.remove('priority3-color');
    }

    if (priorityNumber == 1) {
      task.classList.add('priority1-color');
    } else if (priorityNumber == 2) {
      task.classList.add('priority2-color');
    } else if (priorityNumber == 3) {
      task.classList.add('priority3-color');
    }
  }

  function hideTaskForm(e) {
    e.preventDefault();
    theElements.form1.classList.add('form-is-hidden');
  }

  function showProjectDeleteBtn() {
    theElements.deleteIconForProject.classList.remove('hidden');
  }

  function hideProjectDeleteBtn() {
    theElements.deleteIconForProject.classList.add('hidden');
  }

  function toggleNav() {
    if (theElements.nav.classList.contains('nav-is-left')) {
      theElements.nav.classList.remove('nav-is-left');
    } else {
      theElements.nav.classList.add('nav-is-left');
    }
  }

  function setTaskComplete(checkbox) {
    //do dom stuff like cross out title
    const thisTitle = checkbox.nextElementSibling;
    // thisTitle.style.color = "green";
    thisTitle.classList.add('crossed-out');
    thisTitle.parentElement.parentElement.classList.add('crossed-out');
  }

  function setTaskNotComplete(checkbox) {
    //do dom stuff like cross out title
    const thisTitle = checkbox.nextElementSibling;
    // thisTitle.style.color = "green";
    thisTitle.classList.remove('crossed-out');
    thisTitle.parentElement.parentElement.classList.remove('crossed-out');
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
    addProjectFormWasCancelled: addProjectFormWasCancelled,
    editingThisTaskIndex: editingThisTaskIndex,
    editingThisTaskOldTitle: editingThisTaskOldTitle,
    changeTitle: changeTitle,
    redrawProjects: redrawProjects,
  };
})();

export { dom };
