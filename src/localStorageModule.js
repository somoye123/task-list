const getProjects = JSON.parse(localStorage.projects);
const getSelectedProject = JSON.parse(localStorage.selectedProject);
const setProjects = (projects) => {
  localStorage.projects = JSON.stringify(projects);
  return localStorage.projects;
};
const setSelectedProject = (projectIndex) => {
  localStorage.selectedProject = JSON.stringify(projectIndex);
  return localStorage.selectedProject;
};
export { getProjects, getSelectedProject, setProjects, setSelectedProject };
