'use strict';

import { dom } from './dom.js';
// import { task } from "./task.js";
import { tasks } from './tasks.js';

let editATask = function (e) {
  let nodeClicked = e.target;
  let taskNode = '';
  if (nodeClicked.classList.contains('edit-inner')) {
    taskNode = e.target.parentElement.parentElement.parentElement.parentElement;
  } else if (nodeClicked.classList.contains('edit-icon')) {
    taskNode = e.target.parentElement.parentElement.parentElement;
  }

  let titleNode = taskNode.querySelector('.task-title-main');
  let title = titleNode.textContent;

  //find the index we want
  let thisIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].getTitle() == title) {
      thisIndex = i;
    }
  }

  //do the editing
  dom.showTaskForm();
  dom.fillTaskFormWithData(thisIndex);

  //set this variable so we will know what to do on the submit button
  dom.formCameFrom = 'editTask';
  dom.editingThisTaskIndex = thisIndex;
  dom.editingThisTaskOldTitle = title;
};

export { editATask };
