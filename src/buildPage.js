import PageStructure from "./pageStruture";
import eventListeners from "./eventListeners";

export default () => {
  PageStructure();
  eventListeners.chooseProject();
  eventListeners.addProjectButton();
  eventListeners.submitProjectForm()
};
