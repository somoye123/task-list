/*
  eslint-disable no-underscore-dangle
*/
export default class Task {
  constructor(title, description, dueDate, priority, status, note) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.status = status;
    this.note = note;
  }

  get title() {
    return this._title;
  }

  set title(value) {
    this._title = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    this._description = value;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(value) {
    this._dueDate = value;
  }

  get priority() {
    return this._priority;
  }

  set priority(value) {
    this._priority = value;
  }

  get status() {
    return this._status;
  }

  set status(value) {
    this._status = value;
  }

  get note() {
    return this._note;
  }

  set note(value) {
    this._note = value;
  }
}
