import Task from "./Task";
import Project from "./Project";

let defaultProject = null;
const createNewTask = document.getElementById();

const getDefaultProject = () => {
  defaultProject = localStorage.defaultProject;
  if (defaultProject === undefined) {
    defaultProject = new Project("defaul project1");
    console.log("hasan");
  }
};

getDefaultProject();

// const addTaskToProject = (task, project) {
//     project.addTask(task);
// }

// const deleteTaskFromProject = (taskIndex, project) {

// }
