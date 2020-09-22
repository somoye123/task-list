import setDefaultProject from "./initializeProject";

import { getProjects } from "./localStorageModule";

const projects = () => getProjects() || setDefaultProject();

export default projects;
