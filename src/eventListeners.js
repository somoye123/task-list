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
        const allProjects = getProjects();

        const project = new Project(title);
        allProjects.push(project);
        setProjects(allProjects);
        buildPage();
      } else {
        alert("Fill all informations correctly ");
      }
    });
  };

  const deleteProjectButton = () => {
    if (projects().length > 0) {
      document
        .getElementById("delete-project")
        .addEventListener("click", () => {
          const allProjects = getProjects();
          // if (allProjects.length > 1) {
          const projectIndex = document.getElementById("selected-project")
            .value;
          allProjects.splice(projectIndex, 1);
          setProjects(allProjects);
          setSelectedProject(0);
          buildPage();
          // } else {
          //   alert("Projects cannot be empty!");
          // }
        });
    }
  };

  return {
    chooseProject,
    addProjectButton,
    submitProjectForm,
    deleteProjectButton,
  };
};

export default eventListeners();
