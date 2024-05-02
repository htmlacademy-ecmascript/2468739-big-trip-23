import { createElement } from '../render.js';

const createInfoMessageTemplate = () =>
  '<p class="trip-events__msg">Click New Event to create your first point</p>';

export default class InfoMessageView {
  getTemplate() {
    return createInfoMessageTemplate();
  }

  getElement() {
    if(!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
