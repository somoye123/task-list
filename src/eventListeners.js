import {
  setSelectedProject,
  getSelectedProject,
  getProjects,
  setProjects,
} from "./localStorageModule";
import Project from "./Project";

import BuildPage from "./buildPage";
import projects from "./projects";
import buildPage from "./buildPage";
import Task from "./Task";

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
          const projectIndex = document.getElementById("selected-project")
            .value;
          allProjects.splice(projectIndex, 1);
          setProjects(allProjects);
          setSelectedProject(0);
          buildPage();
        });
    }
  };

  const formTask = () => document.getElementById("new-update-task");

  const addTaskButton = () => {
    document.getElementById("add-task").addEventListener("click", () => {
      formTask().operation = "add";
      formTask().style.display = "block";
      formTask().reset();
    });
  };

  const updateTaskButton = () => {
    const editTaskButtons = document.getElementsByClassName("edit-task");

    for (let i = 0; i < editTaskButtons.length; i++) {
      editTaskButtons[i].onclick = () => {
        formTask().operation = i;
        formTask().style.display = "block";
        const project = projects()[getSelectedProject()];
        const task = project._tasks[i];
        formTask().elements.namedItem("title").value = task._title;
        formTask().elements.namedItem("description").value = task._description;
        formTask().elements.namedItem("due-date").value = task._dueDate;
        formTask().elements.namedItem("priority").value = task._priority;
        formTask().elements.namedItem("status").value = task._status;
        formTask().elements.namedItem("note").value = task._note;
      };
    }
  };

  const submitTaskForm = () => {
    formTask().addEventListener("submit", (event) => {
      event.preventDefault();
      const title = formTask().elements.namedItem("title").value;
      const description = formTask().elements.namedItem("description").value;
      const dueDate = formTask().elements.namedItem("due-date").value;
      const priority = formTask().elements.namedItem("priority").value;
      const status = formTask().elements.namedItem("status").value;
      const note = formTask().elements.namedItem("note").value;
      const project = projects()[getSelectedProject()];
      if (title && description && dueDate && priority && status && note) {
        const task = new Task(
          title,
          description,
          dueDate,
          priority,
          status,
          note
        );

        if (formTask().operation === "add") {
          addTaskToProject(task, getSelectedProject());
        } else {
          project._tasks[formTask().operation] = task;
          const allProjects = projects();
          allProjects[getSelectedProject()] = project;
          setProjects(allProjects);
        }
        formTask().reset();
        formTask().style.display = "none";
        buildPage();
      } else {
        alert("Fill all informations correctly ");
      }
    });
  };

  const addTaskToProject = (task, foundProject) => {
    const allprojects = getProjects();
    allprojects[foundProject]._tasks.push(task);
    setProjects(allprojects);
  };

  const deleteTaskButton = () => {
    const deleteTaskButtons = document.getElementsByClassName("delete-task");

    for (let i = 0; i < deleteTaskButtons.length; i++) {
      deleteTaskButtons[i].onclick = () => {
        const allProjects = getProjects();
        allProjects[getSelectedProject()]._tasks.splice(i, 1);
        setProjects(allProjects);
        buildPage();
      };
    }
  };

  return {
    chooseProject,
    addProjectButton,
    submitProjectForm,
    deleteProjectButton,
    addTaskButton,
    updateTaskButton,
    submitTaskForm,
    deleteTaskButton,
  };
};

export default eventListeners();
