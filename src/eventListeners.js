import {
  setSelectedProject,
  getProjects,
  setProjects,
} from "./localStorageModule";
import Project from "./Project";

import BuildPage from "./buildPage";
import projects from "./projects";
import buildPage from "./buildPage";

const eventListeners = () => {
  const formProject = () => document.getElementById("new-project");
  const chooseProject = () => {
    document.getElementById("selected-project").addEventListener(
      "change",
      function () {
        setSelectedProject(this.value);
        const content = document.getElementById("content");
        while (content.firstChild) {
          content.removeChild(content.lastChild);
        }
        BuildPage();
      },
      false
    );
  };

  const addProjectButton = () => {
    document.getElementById("add-project").addEventListener("click", () => {
      formProject().style.display = "block";
    });
  };

  const submitProjectForm = () => {
    formProject().addEventListener("submit", (event) => {
      event.preventDefault();
      const title = formProject().elements.namedItem("title").value;
      if (title) {
        const allProject = getProjects();
        const project = new Project(title);
        allProject.push(project);
        setProjects(allProject);
        formProject().reset();
        formProject().style.display = "none";
        // location.reload();
        // buildPage();
      } else {
        alert("Fill all informations correctly ");
      }
    });
  };

  return {
    chooseProject,
    addProjectButton,
    submitProjectForm,
  };
};

export default eventListeners();
