"use strict";

import { dom } from "./dom.js";
import { tasks } from "./tasks.js";
import { projects } from "./projects.js";
import { isToday, isThisWeek } from "date-fns";

let project = (function () {
  // holds 'All' 'default' 'Today' 'Week' ...then user created stuff: 'Coding' 'Cooking'
  let currentlySelectedProject = "default";

  function getCurrentlySelectedProject() {
    return currentlySelectedProject;
  }
  function setCurrentlySelectedProject(setToThis) {
    currentlySelectedProject = setToThis;
  }

  function showTasksOnlyFrom(projectNameToShow) {
    // currentlySelectedProject = projectNameToShow;
    setCurrentlySelectedProject(projectNameToShow);
    console.log("showTasksOnlyFrom is working");

    // Change title above tasks
    dom.changeTitle(projectNameToShow);

    // delete all shown tasks on screen
    let allTasksOnScreen = document.querySelectorAll(".task");
    allTasksOnScreen.forEach((taskOnScreen) => {
      dom.deleteATaskFromScreen(taskOnScreen);
    });

    // write only tasks that have the project -projectToShow to the screen
    tasks.forEach((task) => {
      if (projectNameToShow == "All") {
        let taskToShow = task;

        dom.createNewTask(
          taskToShow.getTitle(),
          taskToShow.getDescription(),
          taskToShow.getDueDate(),
          taskToShow.getPriority(),
          taskToShow.getProject()
        );
      } else if (projectNameToShow == "Today") {
        console.log("a task is today");

        let taskDueDate = task.getDueDate();
        if (isToday(taskDueDate)) {
          // isToday is part of date-fns
          let taskToShow = task;
          dom.createNewTask(
            taskToShow.getTitle(),
            taskToShow.getDescription(),
            taskToShow.getDueDate(),
            taskToShow.getPriority(),
            taskToShow.getProject()
          );
        }
      } else if (projectNameToShow == "Week") {
        let taskDueDate = task.getDueDate();
        let itIsThisWeek = isThisWeek(taskDueDate, { weekStartsOn: 1 });
        if (itIsThisWeek) {
          // weekStartsOn:1 means a 'week' starts on a Monday
          let taskToShow = task;
          dom.createNewTask(
            taskToShow.getTitle(),
            taskToShow.getDescription(),
            taskToShow.getDueDate(),
            taskToShow.getPriority(),
            taskToShow.getProject()
          );
        }
        //
      } else if (task.getProject() == projectNameToShow) {
        let taskToShow = task;

        dom.createNewTask(
          taskToShow.getTitle(),
          taskToShow.getDescription(),
          taskToShow.getDueDate(),
          taskToShow.getPriority(),
          taskToShow.getProject()
        );
      }
    });
  }

  function addNewProject(typedProjectName) {
    projects.allProjects.push(typedProjectName);
    dom.createAndAddAProject(typedProjectName);
    console.log("added new project");
  }

  function deleteProject(projectName) {
    //don't delete 'All', 'Today', or 'Week'
    if (projectName == ("All" || "Today" || "Week")) {
      //do nothing
    } else {
      let projectIndex = "";
      for (let i = 0; i < projects.allProjects.length; i++) {
        if (projects.allProjects[i] == projectName) {
          projectIndex = i;
          projects.allProjects.splice(projectIndex, 1);
          // break;
        }
      }
      dom.redrawProjects();
      project.showTasksOnlyFrom("All");

      console.log(projectName + "project deleted");
    }
  }

  return {
    showTasksOnlyFrom: showTasksOnlyFrom,
    addNewProject: addNewProject,
    currentlySelectedProject: currentlySelectedProject,
    getCurrentlySelectedProject: getCurrentlySelectedProject,
    setCurrentlySelectedProject: setCurrentlySelectedProject,
    deleteProject: deleteProject,
  };
})();

export { project };
