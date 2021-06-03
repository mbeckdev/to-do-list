'use strict';

import { dom } from './dom.js';
import { storage } from './storage.js';
import { task } from './task.js';
import { tasks } from './tasks.js';

let changeTaskStatus = function (checkbox) {
  // e.target  equals  <input type='checkbox' name='task=box'>
  let isChecked = checkbox.checked; //true or false

  // const title = e.target.nextElementSibling.textContent;
  const title = checkbox.nextElementSibling.textContent;

  //find the index we want
  let thisIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].getTitle() == title) {
      thisIndex = i;
    }
  }

  if (isChecked) {
    // task is complete
    dom.setTaskComplete(checkbox);
    tasks[thisIndex].setComplete(true);
  } else {
    // task is no longer complete
    dom.setTaskNotComplete(checkbox);
    tasks[thisIndex].setComplete(false);
  }
  storage.setLocalStorage();
};

export { changeTaskStatus };
