import buildPage from "./buildPage";

// const addTaskToProject = (task, projectToUpdate) => {
//   const foundProject = projects[projectToUpdate];
//   const project = new Project(foundProject.name);
//   project.tasks = foundProject._tasks;
//   project.addTask(task);
//   projects[projectToUpdate]._tasks = project.tasks;
//   localStorage.projects = JSON.stringify(projects);
// };

// const deleteTaskFromProject = (taskIndex, projectIndex) => {
//   const foundProject = projects[projectIndex];
//   foundProject._tasks.splice(taskIndex, 1);
//   projects[projectIndex]._tasks = foundProject._tasks;
//   localStorage.projects = JSON.stringify(projects);
// };

// const editTaskButton = document.getElementById("edit-task-0");
// editTaskButton.addEventListener("click", () => {
//   formTask.operation = ["edit", 0];
//   formTask.style.display = "block";
//   const project = projects[document.getElementById("selected-project").value];
//   const task = project._tasks[0];
//   formTask.elements.namedItem("title").value = task._title;
//   formTask.elements.namedItem("description").value = task._description;
//   formTask.elements.namedItem("due-date").value = task._dueDate;
//   formTask.elements.namedItem("priority").value = task._priority;
//   formTask.elements.namedItem("status").value = task._status;
//   formTask.elements.namedItem("note").value = task._note;
//   formTask.elements.namedItem("submit").innerText = "submit task";
//   // document.getElementById("submit").innerText = "submit task";
// });

// const addTaskButton = document.getElementById("add-task");

// addTaskButton.addEventListener("click", () => {
//   formTask.operation = ["add"];
//   formTask.style.display = "block";
//   formTask.reset();
// });

// formTask.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const title = formTask.elements.namedItem("title").value;
//   const description = formTask.elements.namedItem("description").value;
//   const dueDate = formTask.elements.namedItem("due-date").value;
//   const priority = formTask.elements.namedItem("priority").value;
//   const status = formTask.elements.namedItem("status").value;
//   const note = formTask.elements.namedItem("note").value;
//   const project = document.getElementById("selected-project").value;
//   if (title && description && dueDate && priority && status && note) {
//     const task = new Task(title, description, dueDate, priority, status, note);

//     if (formTask.operation[0] === "add") {
//       addTaskToProject(task, project);
//     } else {
//       projects[0]._tasks[formTask.operation[1]] = task;
//     }

//     localStorage.projects = JSON.stringify(projects);
//     formTask.reset();
//     formTask.style.display = "none";
//   } else {
//     alert("Fill all informations correctly ");
//   }
// });

// const deleteTaskButton = document.getElementById("delete-task-1");

// deleteTaskButton.addEventListener("click", () => {
//   deleteTaskFromProject(0, 0);
// });

buildPage();

function updateTaskButton(taskIndex) {
  formTask().operation = ["edit", taskIndex];
  formTask().style.display = "block";
  const project = projects()[document.getElementById("selected-project").value];
  const task = project._tasks[taskIndex];
  formTask().elements.namedItem("title").value = task._title;
  formTask().elements.namedItem("description").value = task._description;
  formTask().elements.namedItem("due-date").value = task._dueDate;
  formTask().elements.namedItem("priority").value = task._priority;
  formTask().elements.namedItem("status").value = task._status;
  formTask().elements.namedItem("note").value = task._note;
  formTask().elements.namedItem("submit").innerText = "submit task";
  // document.getElementById("submit").innerText = "submit task";
}
