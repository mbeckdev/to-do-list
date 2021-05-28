"use strict";

import { dom } from "./dom.js";
import { task } from "./task.js";
import { tasks } from "./tasks.js";
import { projects } from "./projects.js";
import { isToday, isThisWeek } from "date-fns";
import { createANewTask } from "./create-a-new-task.js";

let storage = (function () {
  let objectToSave = {};

  function setLocalStorage() {
    objectToSave = {};
    objectToSave.theProjects = projects.allProjects;

    let arrayOfObjectTasksToSave = [];

    for (let i = 0; i < tasks.length; i++) {
      arrayOfObjectTasksToSave.push({});
      let title = tasks[i].getTitle();
      let description = tasks[i].getDescription();
      let dueDate = tasks[i].getDueDate();
      let priority = tasks[i].getPriority();
      let complete = tasks[i].getComplete();
      let project = tasks[i].getProject();
      arrayOfObjectTasksToSave[i].title = title;
      arrayOfObjectTasksToSave[i].description = description;
      arrayOfObjectTasksToSave[i].dueDate = dueDate;
      arrayOfObjectTasksToSave[i].priority = priority;
      arrayOfObjectTasksToSave[i].complete = complete;
      arrayOfObjectTasksToSave[i].project = project;
    }
    objectToSave.theTasks = arrayOfObjectTasksToSave;

    localStorage.objectToSave = JSON.stringify(objectToSave);
  }

  function getLocalStorage() {
    let theTasks = JSON.parse(localStorage.objectToSave).theTasks;
    let theProjects = JSON.parse(localStorage.objectToSave).theProjects;
    projects.allProjects = theProjects;

    tasks.splice(0, tasks.length);
    for (let i = 0; i < dom.theElements.tasks.length; i++) {
      dom.deleteATaskFromScreen(dom.theElements.tasks[i]);
    }
    for (let i = 0; i < theTasks.length; i++) {
      let title = theTasks[i].title;
      let description = theTasks[i].description;
      let dueDate = new Date(theTasks[i].dueDate);
      let priority = theTasks[i].priority;
      let project = theTasks[i].project;

      let newTask = task(title, description, dueDate, priority, project);
      tasks.push(newTask);
      dom.createNewTask(
        newTask.getTitle(),
        newTask.getDescription(),
        newTask.getDueDate(),
        newTask.getPriority(),
        newTask.getProject()
      );
    }

    //write projects
    for (let i = 0; i < theProjects.length; i++) {
      dom.createAndAddAProject(theProjects[i]);
    }
  }
  return {
    getLocalStorage: getLocalStorage,
    setLocalStorage: setLocalStorage,
  };
})();

export { storage };
