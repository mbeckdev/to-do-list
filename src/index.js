"use strict";
import css from "./styles.css";

import { dom } from "./lib/dom.js";
import { tasks } from "./lib/tasks.js";
import { task } from "./lib/task.js";
import { createANewTask } from "./lib/create-a-new-task";
import { format, formatDistance, subDays } from "date-fns";
import { storage } from "./lib/storage.js";

// formatDistance(subDays(new Date(), 3), new Date(), { addSuffix: true });

// dom.createNewTask();

dom.setUpInitialDom();
storage.getLocalStorage();

console.log("done with index.js");
// console.log(allTasks.tasks[0]);

// let task1 = createANewTask(
//   "asfd2",
//   "desc-asdfa2",
//   // format(new Date("05-05-2021"), "MM-dd-yy"),
//   // new Date("05-05-2021"),
//   new Date("2021-05-05 00:00"),
//   "3"
// );
// let task2 = createANewTask(
//   "asfd5",
//   "desc-asdfa5",
//   new Date("05-06-2021 00:00"),
//   "1"
// );
// console.log(task1);
// console.log(task2);

// const task2 = task("asfd2", "asdfa2", "23422", "32");
// const task3 = task("asfd23", "asdfa23", "234223", "323");
// tasks.push(task2);
// tasks.push(task3);
// console.log(task2.getTitle());

console.log(tasks);

//to do:
// A factory function to create new tasks

// An object to hold each task's - title, description, dueDate, priority
//  project?
// An object to hold all the projects (there is a default one too)

// An object to keep all the DOM stuff together
// A separate place to keep all the task manipulation stuff together.
