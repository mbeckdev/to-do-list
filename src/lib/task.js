"use strict";
import { tasks } from "./tasks.js";

let task = function (varTitle, varDescription, varDueDate, varPriority) {
  let title = varTitle;
  let description = varDescription;
  let dueDate = varDueDate;
  let priority = varPriority;
  let complete = false;
  // console.log(tasks);
  // tasks.push(this);

  function setTitle(setToThis) {
    title = setToThis;
  }

  function getTitle() {
    return title;
  }

  function setDescription(setToThis) {
    description = setToThis;
  }

  function getDescription() {
    return description;
  }

  function setDueDate(setToThis) {
    dueDate = setToThis;
  }

  function getDueDate() {
    return dueDate;
  }

  function setPriority(setToThis) {
    priority = setToThis;
  }

  function getPriority() {
    return priority;
  }

  function setComplete(setToThis) {
    // true or false;
    complete = setToThis;
  }

  function getComplete() {
    return complete;
  }

  return {
    setTitle: setTitle,
    getTitle: getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    setPriority,
    getPriority,
    setComplete,
    getComplete,
    // title,
    // description,
    // dueDate,
    // priority,
  };
};

// const task1 = task("asfd", "asdfa", "2342", "3");
// console.log("durn");
export { task };
