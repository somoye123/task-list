/*
  eslint-disable import/no-cycle
*/
import PageStructure from './pageStructure';
import eventListeners from './eventListenersModule';

export default () => {
  const content = document.getElementById('content');
  while (content.firstChild) {
    content.removeChild(content.lastChild);
  }

  PageStructure();
  eventListeners.chooseProject();
  eventListeners.addProjectButton();
  eventListeners.submitProjectForm();
  eventListeners.deleteProjectButton();
  eventListeners.addTaskButton();
  eventListeners.updateTaskButton();
  eventListeners.submitTaskForm();
  eventListeners.deleteTaskButton();
};
