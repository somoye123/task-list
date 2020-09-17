import Task from "./Task";
import Project from "./Project";

let defaultProject = null;

let project1 = new Project("project1");
let project2 = new Project("project2");
const defaultprojects = [project1, project2];
let testingLocalStorage = localStorage.projects;
if (testingLocalStorage === undefined)
  localStorage.projects = JSON.stringify(defaultprojects);

const projects = localStorage.projects ? JSON.parse(localStorage.projects) : [];
const form = document.getElementById("new-task");

const addTaskToProject = (task, projectToUpdate) => {
  let foundProject = projects[projectToUpdate];
  let project = new Project(foundProject.name);
  project.tasks = foundProject._tasks;
  project.addTask(task);
  projects[projectToUpdate]._tasks = project.tasks;
  localStorage.projects = JSON.stringify(projects);
};

const deleteTaskFromProject = (taskIndex, projectIndex) => {
  let foundProject = projects[projectIndex];
  foundProject._tasks.splice(taskIndex,1)
  projects[projectIndex]._tasks = foundProject._tasks;
  localStorage.projects = JSON.stringify(projects);
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = form.elements.namedItem("title").value;
  const description = form.elements.namedItem("description").value;
  const dueDate = form.elements.namedItem("due-date").value;
  const priority = form.elements.namedItem("priority").value;
  const status = form.elements.namedItem("status").value;
  const note = form.elements.namedItem("note").value;
  const project = document.getElementById("selected-project").value;
  if (title && description && dueDate && priority && status && note) {
    let task = new Task(title, description, dueDate, priority, status, note);
    addTaskToProject(task, project);
    form.reset();
  } else {
    alert("Fill all informations correctly ");
  }
});

const getDefaultProject = () => {
  defaultProject = localStorage.defaultProject;
  if (defaultProject === undefined) {
    defaultProject = new Project("defaul project1");
  }
};

getDefaultProject();
