import { setSelectedProject, getSelectedProject } from "./localStorageModule";

import BuildPage from "./buildPage";

const eventListeners = function () {
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
      document.getElementById("new-project").style.display = "block";
    });
  };

  const submitProjectForm = () => {
    //     const formProject = document.getElementById("new-project");
    // formProject.addEventListener("submit", (event) => {
    //   event.preventDefault();
    //   const title = formProject.elements.namedItem("title").value;
    //   const project = new Project(title);
    //   if (title) {
    //     projects.push(project);
    //     localStorage.projects = JSON.stringify(projects);
    //     formProject.reset();
    //     formProject.style.display = "none";
    //   } else {
    //     alert("Fill all informations correctly ");
    //   }
    // });
  };

  return {
    chooseProject,
    addProjectButton,
  };
};

export default eventListeners();
