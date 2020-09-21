import Project from "./Project";
import { setProjects, getProjects } from "./localStorageModule";

export default function setDefaultProject() {
  const defaultproject = new Project("Example Project");
  const defaultproject2 = new Project("Example Project2");
  let testing = [defaultproject, defaultproject2];
  setProjects(testing);
  return testing;
}
