"use strict";

import { dom } from "./dom.js";
import { tasks } from "./tasks.js";
import { projects } from "./projects.js";

let project = (function () {
  // addTask
  function showTasksOnlyFrom(projectNameToShow) {
    console.log("showTasksOnlyFrom is working");

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
        // } else if (projectNameToShow = 'Today') {
        //   if (task.getDueDate == today) {
        //     //show task
        //   }
        // } else if (projectNameToShow = 'Week') {
        //   if (task.getDueDate == a range of a week out to today) {
        //     //show task
        //   }
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

  function igotthis() {
    console.log("igotthis");
  }

  return {
    showTasksOnlyFrom: showTasksOnlyFrom,
    igotthis: igotthis,
  };
})();

export { project };
