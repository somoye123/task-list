import Project from "./Project";
import { setProjects } from "./localStorageModule";

export default function setDefaultProject() {
  const defaultproject = new Project("Example Project");
  let testing = [defaultproject];
  setProjects(testing);
}
