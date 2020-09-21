const getProjects = localStorage.projects && JSON.parse(localStorage.projects);

const getSelectedProject =
  localStorage.selectedProject && JSON.parse(localStorage.selectedProject);

const setProjects = (projects) => {
  localStorage.projects = JSON.stringify(projects);
};
const setSelectedProject = (projectIndex) => {
  localStorage.selectedProject = JSON.stringify(projectIndex);
  return projectIndex;
};
export { getProjects, getSelectedProject, setProjects, setSelectedProject };
