"use strict";

let task = function (vartitle, description, dueDate, priority) {
  let title = vartitle;
  function setTitle(title) {
    title = vartitle;
  }

  function getTitle() {
    return title;
  }

  return {
    setTitle: setTitle,
    getTitle: getTitle,
    title,
    description,
    dueDate,
    priority,
  };
};

// const task1 = task("asfd", "asdfa", "2342", "3");
// console.log("durn");
export { task };
