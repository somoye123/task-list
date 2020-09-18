/*
  eslint-disable no-underscore-dangle
*/
import Task from "./Task";
import projects from "./projects";
import { getSelectedProject, setSelectedProject } from "./localStorageModule";

const PageStructure = () => {
  const content = document.getElementById("content");
  const mainHeader = document.createElement("h1");
  mainHeader.innerText = "MY TODO-LIST";

  const projectContainer = document.createElement("div");
  const projectsHeading = document.createElement("h2");
  projectsHeading.innerText = "My Projects";

  const projectsSelect = document.createElement("select");
  projectsSelect.id = "selected-project";
  projectsSelect.required = true;
  // projectsSelect.name = "selectedProject";

  let projectsSelectOptions = "";

  projects.forEach((project, projectIndex) => {
    projectsSelectOptions += `
        <option value=${projectIndex}>${project._name}</option>
    `;
  });
  projectsSelect.innerHTML = projectsSelectOptions;
  projectsSelect.value = getSelectedProject || setSelectedProject(0);

  const addNewProject = document.createElement("button");
  addNewProject.innerText = "Add new project";
  addNewProject.id = "add-project";

  const deleteProject = document.createElement("button");
  deleteProject.innerText = "Delete project";
  deleteProject.id = "delete-project";

  projectContainer.appendChild(projectsHeading);
  projectContainer.appendChild(projectsSelect);
  projectContainer.appendChild(addNewProject);
  projectContainer.appendChild(deleteProject);

  const projectForm = document.createElement("form");
  projectForm.id = "new-project";
  const projectFormNameInput = document.createElement("input");
  projectFormNameInput.type = "text";
  projectFormNameInput.placeholder = "project title";
  projectFormNameInput.name = "title";
  const projectFormSubmitButton = document.createElement("button");
  projectFormSubmitButton.type = "submit";
  projectFormSubmitButton.innerText = "Create Project";

  projectForm.appendChild(projectFormNameInput);
  projectForm.appendChild(projectFormSubmitButton);

  const taskContainer = document.createElement("div");
  const taskHeading = document.createElement("h2");
  taskHeading.innerText = "My Tasks";
  const taskUnorderList = document.createElement("ul");
  const selectedProject = projects[Number.parseInt(getSelectedProject)];

  let selectedProjectLists = "";

  selectedProject._tasks.forEach((task, taskIndex) => {
    selectedProjectLists += `
      <li>
        <h5>${task._title}</h5>
        <button id="edit-task-${taskIndex}" value='${taskIndex}'>Edit task</button>
        <button id="delete-task-${taskIndex}" value='${taskIndex}'>Delete task</button>
      </li>
    `;
  });
  taskUnorderList.innerHTML = selectedProjectLists;

  taskContainer.appendChild(taskHeading);
  taskContainer.appendChild(taskUnorderList);

  content.appendChild(mainHeader);
  content.appendChild(projectContainer);
  content.appendChild(projectForm);
  content.appendChild(taskContainer);
  return content;
};

export default PageStructure;
