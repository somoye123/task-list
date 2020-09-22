import Project from "./Project";
import Task from "./Task";
import { setProjects, getProjects } from "./localStorageModule";

export default function setDefaultProject() {
  const defaultproject = new Project("Example Project");
  const defaultproject2 = new Project("Example Project2");
  const defaultprojectTasks = new Task(
    "adding a new project",
    "adding a new project description",
    "task due date",
    "high",
    "not yet completed",
    "to be done as soon as possible"
  );

  const defaultproject2Tasks = new Task(
    "adding another new project",
    "adding another new project description",
    "task due date",
    "low",
    "completed",
    "to be done as soon as possible"
  );

  const defaultproject3Tasks = new Task(
    " project",
    " description",
    " date",
    "high",
    " completed",
    " as soon as possible"
  );

  defaultproject.addTask(defaultprojectTasks);
  defaultproject2.addTask(defaultproject2Tasks);
  defaultproject.addTask(defaultproject3Tasks);

  const defaultProjects = [defaultproject, defaultproject2];
  setProjects(defaultProjects);
  return defaultProjects;
}
