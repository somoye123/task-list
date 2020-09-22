import setDefaultProject from "./initializeProject";

import storage from "./localStorageModule";

const projects = () => storage.getProjects() || setDefaultProject();

export default projects;
