"use strict";

import { dom } from "./dom.js";
import { task } from "./task.js";
import { tasks } from "./tasks.js";

let createANewTask = function (title, description, date, priority, project) {
  let newTask = task(title, description, date, priority, project);

  tasks.push(newTask);

  dom.createNewTask(
    newTask.getTitle(),
    newTask.getDescription(),
    newTask.getDueDate(),
    newTask.getPriority(),
    newTask.getProject()
  );
};

export { createANewTask };
