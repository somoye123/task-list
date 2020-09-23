import Project from "./Project";
import Task from "./Task";
import storage from "./localStorageModule";

export default function setDefaultProject() {
  const defaultproject = new Project("Example Project");
  const defaultproject2 = new Project("Example Project2");
  const defaultprojectTasks = new Task(
    "adding a new project",
    "adding a new project description",
    "2020-10-22",
    "High",
    "Incomplete",
    "to be done as soon as possible"
  );

  const defaultproject2Tasks = new Task(
    "adding another new project",
    "adding another new project description",
    "2020-09-22",
    "Low",
    "Completed",
    "to be done as soon as possible"
  );

  const defaultproject3Tasks = new Task(
    " project",
    " description",
    "2020-08-10",
    "High",
    "Completed",
    " as soon as possible"
  );

  defaultproject.addTask(defaultprojectTasks);
  defaultproject2.addTask(defaultproject2Tasks);
  defaultproject.addTask(defaultproject3Tasks);

  const defaultProjects = [defaultproject, defaultproject2];
  storage.setProjects(defaultProjects);
  return defaultProjects;
}
