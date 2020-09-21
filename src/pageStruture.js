/*
  eslint-disable no-underscore-dangle
*/
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
  const selectedProject = projects[projectsSelect.value];

  let selectedProjectLists = "";
  selectedProject._tasks.forEach((task, taskIndex) => {
    selectedProjectLists += `
      <li>
        <h5>${task._title}</h5>
        <button  id="edit-task-${taskIndex}" value='${taskIndex}'>Edit task</button>
        <button id="delete-task-${taskIndex}" value='${taskIndex}'>Delete task</button>
      </li>
    `;
  });
  taskUnorderList.innerHTML = selectedProjectLists;

  const addTaskButton = document.createElement("button");
  addTaskButton.innerText = "Add new task";

  taskContainer.appendChild(taskHeading);
  taskContainer.appendChild(taskUnorderList);
  taskContainer.appendChild(addTaskButton);

  const taskForm = document.createElement("form");
  taskForm.id = "new-update-task";
  const taskFormTitleInput = document.createElement("input");
  taskFormTitleInput.type = "text";
  taskFormTitleInput.placeholder = "task title";
  taskFormTitleInput.name = "title";

  const taskFormDescriptionInput = document.createElement("input");
  taskFormDescriptionInput.type = "text";
  taskFormDescriptionInput.placeholder = "description";
  taskFormDescriptionInput.name = "description";

  const taskFormDueDateInput = document.createElement("input");
  taskFormDueDateInput.type = "text";
  taskFormDueDateInput.placeholder = "due-date";
  taskFormDueDateInput.name = "due-date";

  const taskFormPriorityInput = document.createElement("input");
  taskFormPriorityInput.type = "text";
  taskFormPriorityInput.placeholder = "priority";
  taskFormPriorityInput.name = "priority";

  const taskFormStatusInput = document.createElement("input");
  taskFormStatusInput.type = "text";
  taskFormStatusInput.placeholder = "status";
  taskFormStatusInput.name = "status";

  const taskFormNoteInput = document.createElement("input");
  taskFormNoteInput.type = "text";
  taskFormNoteInput.placeholder = "note";
  taskFormNoteInput.name = "note";

  const taskFormSubmitButton = document.createElement("button");
  taskFormSubmitButton.type = "submit";
  taskFormSubmitButton.innerText = "Create Task";

  taskForm.appendChild(taskFormTitleInput);
  taskForm.appendChild(taskFormDescriptionInput);
  taskForm.appendChild(taskFormDueDateInput);
  taskForm.appendChild(taskFormPriorityInput);
  taskForm.appendChild(taskFormStatusInput);
  taskForm.appendChild(taskFormNoteInput);
  taskForm.appendChild(taskFormSubmitButton);

  content.appendChild(mainHeader);
  content.appendChild(projectContainer);
  content.appendChild(projectForm);
  content.appendChild(taskContainer);
  content.appendChild(taskForm);
  return content;
};

export default PageStructure;
