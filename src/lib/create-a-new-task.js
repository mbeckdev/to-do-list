"use strict";

import { dom } from "./dom.js";
import { task } from "./task.js";
import { tasks } from "./tasks.js";

let createANewTask = function (title, description, date, priority) {
  let newTask = task(title, description, date, priority);

  tasks.push(newTask);

  dom.createNewTask(
    newTask.getTitle(),
    newTask.getDescription(),
    newTask.getDueDate(),
    newTask.getPriority()
  );
};

export { createANewTask };
