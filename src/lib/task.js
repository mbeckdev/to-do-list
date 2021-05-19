"use strict";

let task = function (varTitle, varDescription, varDueDate, varPriority) {
  let title = varTitle;
  let description = varDescription;
  let dueDate = varDueDate;
  let priority = varPriority;

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

  return {
    setTitle: setTitle,
    getTitle: getTitle,
    setDescription,
    getDescription,
    setDueDate,
    getDueDate,
    setPriority,
    getPriority,
    // title,
    // description,
    // dueDate,
    // priority,
  };
};

// const task1 = task("asfd", "asdfa", "2342", "3");
// console.log("durn");
export { task };
