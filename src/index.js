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
  foundProject._tasks.splice(taskIndex, 1);
  projects[projectIndex]._tasks = foundProject._tasks;
  localStorage.projects = JSON.stringify(projects);
};

const addTaskButton = document.getElementById("add-task");

const formTask = document.getElementById("new-task");
formTask.style.display = "none";

addTaskButton.addEventListener("click", () => {
  formTask.style.display = "block";
});

formTask.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = formTask.elements.namedItem("title").value;
  const description = formTask.elements.namedItem("description").value;
  const dueDate = formTask.elements.namedItem("due-date").value;
  const priority = formTask.elements.namedItem("priority").value;
  const status = formTask.elements.namedItem("status").value;
  const note = formTask.elements.namedItem("note").value;
  const project = document.getElementById("selected-project").value;
  if (title && description && dueDate && priority && status && note) {
    let task = new Task(title, description, dueDate, priority, status, note);
    addTaskToProject(task, project);
    localStorage.projects = JSON.stringify(projects);
    formTask.reset();
    formTask.style.display = "none";
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

const deleteTaskButton = document.getElementById("delete-task-1");

deleteTaskButton.addEventListener("click", () => {
  deleteTaskFromProject(0, 0);
});

const addProjectButton = document.getElementById("add-project");

const formProject = document.getElementById("new-project");
formProject.style.display = "none";

addProjectButton.addEventListener("click", () => {
  formProject.style.display = "block";
});

formProject.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = formProject.elements.namedItem("title").value;
  const project = new Project(title);
  if (title) {
    projects.push(project);
    localStorage.projects = JSON.stringify(projects);
    formProject.reset();
    formProject.style.display = "none";
  } else {
    alert("Fill all informations correctly ");
  }
});

const deleteProjectButton = document.getElementById("delete-project");

deleteProjectButton.addEventListener("click", () => {
  const projectIndex = document.getElementById("selected-project").value;
  projects.splice(projectIndex, 1);
  localStorage.projects = JSON.stringify(projects);
});
