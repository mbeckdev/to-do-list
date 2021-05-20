"use strict";
import css from "./styles.css";

import { dom } from "./lib/dom.js";
import { tasks } from "./lib/tasks.js";
import { task } from "./lib/task.js";
import { createANewTask } from "./lib/create-a-new-task";

// dom.createNewTask();
dom.setUpInitialDom();
console.log("done with index.js");
// console.log(allTasks.tasks[0]);

let task1 = createANewTask("asfd2", "desc-asdfa2", "05-20-21", "32");
let task2 = createANewTask("asfd5", "desc-asdfa5", "23425", "35");
console.log(task1);
console.log(task2);

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
