"use strict";

import { dom } from "./dom.js";
import { task } from "./task.js";
import { tasks } from "./tasks.js";
import { storage } from "./storage.js";

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

  storage.setLocalStorage();
};

export { createANewTask };
