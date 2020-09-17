/*
  eslint-disable no-underscore-dangle
*/
export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(tasks) {
    this._tasks = tasks;
  }

  addTask(task) {
    this.tasks.push(task);
  }

  deleteTask(taskIndex) {
    this.tasks.splice(taskIndex, 1);
  }
}
