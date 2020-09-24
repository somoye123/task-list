import Project from "./Project";
import Task from "./Task";
import storage from "./localStorageModule";

export default function setDefaultProject() {
  const defaultproject = new Project("Default Project");
  const defaultprojectTasks = new Task(
    "Adding a new project",
    "Add a project and a task",
    "2020-10-22",
    "High",
    "Incomplete",
    "It is necessary to be done as soon as possible"
  );

  defaultproject.addTask(defaultprojectTasks);

  const defaultProjects = [defaultproject];
  storage.setProjects(defaultProjects);
  return defaultProjects;
}
