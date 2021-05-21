"use strict";

import { dom } from "./dom.js";
import { task } from "./task.js";
import { tasks } from "./tasks.js";

let changeTaskStatus = function (checkbox) {
  // e.target  equals  <input teyp='checkbox' name='task=box'>
  // const thisCheckbox =
  let isChecked = checkbox.checked; //true or false

  if (isChecked) {
    // task is complete

    // const title = e.target.nextElementSibling.textContent;
    const title = checkbox.nextElementSibling.textContent;

    //find the index we want
    let thisIndex = -1;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].getTitle() == title) {
        thisIndex = i;
      }
    }

    //delete the task from the tasks array
    // tasks.splice(tasksIndex, 1);

    tasks[thisIndex].setComplete(true);

    // dom.setTaskComplete(checkbox);
    //e.target.nextElementSibling.textContent = 'titlehere'
  } else {
    // task is no longer complete
    //....
  }

  // let newTask = task(title, description, date, priority);

  // tasks.push(newTask);

  // dom.createNewTask(
  //   newTask.getTitle(),
  //   newTask.getDescription(),
  //   newTask.getDueDate(),
  //   newTask.getPriority()
  // );
};

export { changeTaskStatus };
