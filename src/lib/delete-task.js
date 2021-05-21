"use strict";

import { dom } from "./dom.js";
// import { task } from "./task.js";
import { tasks } from "./tasks.js";

let deleteATask = function (e) {
  let nodeClicked = e.target;
  let taskNode = "";
  if (
    nodeClicked.classList.contains("delete1") ||
    nodeClicked.classList.contains("delete2")
  ) {
    taskNode = e.target.parentElement.parentElement.parentElement.parentElement;
  } else if (nodeClicked.classList.contains("delete-icon")) {
    taskNode = e.target.parentElement.parentElement.parentElement;
  }

  let titleNode = taskNode.querySelector(".task-title-main");
  let title = titleNode.textContent;

  //find the index we want
  let thisIndex = -1;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].getTitle() == title) {
      thisIndex = i;
    }
  }

  dom.deleteATaskFromScreen(taskNode);

  tasks.splice(thisIndex, 1);
};

export { deleteATask };
