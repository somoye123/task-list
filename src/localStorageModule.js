// export { getProjects, getSelectedProject, setProjects, setSelectedProject };
const storage = () => {
  const getProjects = () =>
    localStorage.projects && JSON.parse(localStorage.projects);

  const getSelectedProject = () =>
    localStorage.selectedProject && JSON.parse(localStorage.selectedProject);

  const setProjects = (projects) => {
    localStorage.projects = JSON.stringify(projects);
  };
  const setSelectedProject = (projectIndex) => {
    localStorage.selectedProject = JSON.stringify(projectIndex);

    return projectIndex;
  };
  return { getProjects, getSelectedProject, setProjects, setSelectedProject };
};
export default storage();
