import PageStructure from "./pageStruture";
import eventListeners from "./eventListeners";

export default () => {
  const content = document.getElementById("content");
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }
  PageStructure();
  eventListeners.chooseProject();
  eventListeners.addProjectButton();
  eventListeners.submitProjectForm();
  eventListeners.deleteProjectButton();
};
