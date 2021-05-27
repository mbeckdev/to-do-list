"use strict";
import format from "date-fns/format";
import { tasks } from "./tasks.js";

let task = function (
  varTitle,
  varDescription,
  varDueDate,
  varPriority,
  varProject
) {
  let title = varTitle;
  let description = varDescription;
  let dueDate = varDueDate;
  let priority = varPriority;
  let complete = false;
  let project = varProject || "default";
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
  function getFormattedDueDate() {
    if (isNaN(dueDate.getTime())) {
      // Date was not entered:
      return "";
    } else {
      return format(dueDate, "MM-dd-yy");
    }
  }
  function getFormattedDayOfWeekDueDate() {
    if (isNaN(dueDate.getTime())) {
      // Date was not entered:
      return "";
    } else {
      let formattedDayOfWeek = format(dueDate, "EEEEE");
      if (format(dueDate, "EEEEEE") == "Th") {
        formattedDayOfWeek = "Th";
      } else if (format(dueDate, "EEEEEE") == "Su") {
        formattedDayOfWeek = "Su";
      }
      return formattedDayOfWeek;
    }
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

  function setProject(setToThis) {
    // true or false;
    project = setToThis;
  }

  function getProject() {
    return project;
  }

  return {
    setTitle: setTitle,
    getTitle: getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    getFormattedDueDate,
    getFormattedDayOfWeekDueDate,
    setPriority,
    getPriority,
    setComplete,
    getComplete,
    setProject,
    getProject,
    // title,
    description: description,
    // dueDate,
    // priority,
    // complete,
    // project,
  };
};

// const task1 = task("asfd", "asdfa", "2342", "3");
// console.log("durn");
export { task };
