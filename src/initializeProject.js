import Project from "./Project";

export default function setDefaultProject() {
  let defaultproject = new Project("Example Project");
  localStorage.projects = JSON.stringify([defaultproject]);

  return JSON.parse(localStorage.projects);
}
