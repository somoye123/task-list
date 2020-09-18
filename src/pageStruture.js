import Task from "./Task";
import Project from "./Project";
// import { setDefaultProject } from "./initialProject";
// import DefaultProject from "./initialProject";

function setDefaultProject() {
  let defaultproject = new Project("Example Project");
  localStorage.projects = JSON.stringify([defaultproject]);

  return JSON.parse(localStorage.projects);
}

const projects = localStorage.projects
  ? JSON.parse(localStorage.projects)
  : setDefaultProject();

const PageStructure = () => {
  const mainHeader = document.createElement("h1");
  mainHeader.innerText = "MY TODO-LIST";

  const projectContainer = document.createElement("div");
  const projectsHeading = document.createElement("h2");
  projectsHeading.innerText = "My Projects";

  const projectsSelect = document.createElement("select");
  projectsSelect.id = "selected-project";
  projectsSelect.required = true;

  let allProjects = "";

  projects.forEach((project, projectIndex) => {
    allProjects += `
        <option value=${projectIndex}>${project._name}</option>
    `;
  });
  projectsSelect.innerHTML = allProjects;

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

  return { mainHeader, projectContainer };
};

export default PageStructure();
