/*
  eslint-disable no-underscore-dangle
*/
import projects from "./projects";
import storage from "./localStorageModule";

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
  projects().forEach((project, projectIndex) => {
    projectsSelectOptions += `
        <option value=${projectIndex}>${project._name}</option>
    `;
  });
  projectsSelect.innerHTML = projectsSelectOptions;
  projectsSelect.value =
    storage.getSelectedProject() || storage.setSelectedProject(0);
  const addNewProject = document.createElement("button");
  addNewProject.innerText = "Add new project";
  addNewProject.id = "add-project";

  const projectForm = document.createElement("form");
  projectForm.id = "new-project";
  const projectFormNameInput = document.createElement("input");
  projectFormNameInput.type = "text";
  projectFormNameInput.placeholder = "project title";
  projectFormNameInput.name = "title";
  const projectFormSubmitButton = document.createElement("button");
  projectFormSubmitButton.type = "submit";
  projectFormSubmitButton.innerText = "Create Project";

  projectContainer.appendChild(projectsHeading);
  projects().length > 0 && projectContainer.appendChild(projectsSelect);

  projectContainer.appendChild(addNewProject);
  if (projects().length > 0) {
    const deleteProject = document.createElement("button");
    deleteProject.innerText = "Delete project";
    deleteProject.id = "delete-project";
    projectContainer.appendChild(deleteProject);
  }
  projectForm.appendChild(projectFormNameInput);
  projectForm.appendChild(projectFormSubmitButton);

  const taskContainer = document.createElement("div");
  if (projects().length > 0) {
    const taskHeading = document.createElement("h2");
    taskHeading.innerText = "My Tasks";
    const taskUnorderList = document.createElement("ul");
    const selectedProject = projects()[projectsSelect.value];

    let selectedProjectLists = "";
    selectedProject &&
      selectedProject._tasks.forEach((task, taskIndex) => {
        selectedProjectLists += `
      <li>
        <h5>${task._title}</h5>
        <button class="edit-task" id="edit-task-${taskIndex}" value='${taskIndex}'>Edit task</button>
        <button class="delete-task" id="delete-task-${taskIndex}" value='${taskIndex}'>Delete task</button>
      </li>
    `;
      });
    taskUnorderList.innerHTML = selectedProjectLists;

    const addTaskButton = document.createElement("button");
    addTaskButton.id = "add-task";
    addTaskButton.innerText = "Add new task";

    taskContainer.appendChild(taskHeading);
    taskContainer.appendChild(taskUnorderList);
    taskContainer.appendChild(addTaskButton);
  }

  const taskForm = document.createElement("form");
  if (projects().length > 0) {
    taskForm.id = "new-update-task";
    const taskFormTitleInput = document.createElement("input");
    taskFormTitleInput.type = "text";
    taskFormTitleInput.placeholder = "task title";
    taskFormTitleInput.name = "title";

    const taskFormDescriptionInput = document.createElement("textarea");
    taskFormDescriptionInput.placeholder = "description";
    taskFormDescriptionInput.name = "description";

    const taskFormDueDateInput = document.createElement("input");
    taskFormDueDateInput.type = "date";
    taskFormDueDateInput.name = "due-date";

    const taskFormPriorityInput = document.createElement("select");
    taskFormPriorityInput.id = "priority-status";
    taskFormPriorityInput.name = "priority";
    taskFormPriorityInput.required = true;

    let prioritySelectOptions = "";
    storage.priorityOptions.forEach((option) => {
      prioritySelectOptions += `
        <option value=${option}>${option}</option>
    `;
    });
    taskFormPriorityInput.innerHTML = prioritySelectOptions;

    const taskFormStatusInput = document.createElement("select");
    taskFormStatusInput.id = "status";
    taskFormStatusInput.name = "status";
    taskFormPriorityInput.required = true;

    let statusSelectOptions = "";
    storage.statusOptions.forEach((option) => {
      statusSelectOptions += `
        <option value=${option}>${option}</option>
    `;
    });
    taskFormStatusInput.innerHTML = statusSelectOptions;

    const taskFormNoteInput = document.createElement("textarea");
    taskFormNoteInput.placeholder = "note";
    taskFormNoteInput.name = "note";

    const taskFormSubmitButton = document.createElement("button");
    taskFormSubmitButton.type = "submit";
    taskFormSubmitButton.name = "task-submit";

    taskForm.appendChild(taskFormTitleInput);
    taskForm.appendChild(taskFormDescriptionInput);
    taskForm.appendChild(taskFormDueDateInput);
    taskForm.appendChild(taskFormPriorityInput);
    taskForm.appendChild(taskFormStatusInput);
    taskForm.appendChild(taskFormNoteInput);
    taskForm.appendChild(taskFormSubmitButton);
  }

  content.appendChild(mainHeader);
  content.appendChild(projectContainer);
  content.appendChild(projectForm);
  content.appendChild(taskContainer);
  content.appendChild(taskForm);

  return content;
};

export default PageStructure;
