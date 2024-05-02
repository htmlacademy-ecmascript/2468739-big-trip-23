import { createElement } from '../render.js';

const SORT_TYPES = ['day', 'event', 'time', 'price', 'offer'];

const createSortFormItemTemplate = (sortType) => `<div class="trip-sort__item  trip-sort__item--day">
<input id="sort-${sortType}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${sortType}" checked>
<label class="trip-sort__btn" for="sort-${sortType}">${sortType[0].toUpperCase()}${sortType.slice(1)}</label>
</div>`;

const createSortFormTemplate =
  () => `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
${SORT_TYPES.map((type) => createSortFormItemTemplate(type)).join('')}
</form>`;

export default class SortFormView {
  getTemplate() {
    return createSortFormTemplate();
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
