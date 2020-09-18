import setDefaultProject from "./initializeProject";

const projects = localStorage.projects
  ? JSON.parse(localStorage.projects)
  : setDefaultProject();

export default projects;
