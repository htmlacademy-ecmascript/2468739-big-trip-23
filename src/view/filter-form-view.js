import { createElement } from '../render.js';

const FILTER_TYPES = ['everything', 'future', 'present', 'past'];
const CHECKED_DEFAULT_TYPE = 'everything';

const createFilterFormItemTemplate = (
  filterType
) => `<div class="trip-filters__filter">
<input id="filter-${filterType}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${filterType}" ${
  filterType === CHECKED_DEFAULT_TYPE ? 'checked' : ''
}>
<label class="trip-filters__filter-label" for="filter-${filterType}">${filterType}</label>
</div>`;

const createFilterFormTemplate =
  () => `<form class="trip-filters" action="#" method="get">
${FILTER_TYPES.map((type) => createFilterFormItemTemplate(type)).join('')}
<button class="visually-hidden" type="submit">Accept filter</button>
</form>`;

export default class FilterFormView {
  getTemplate() {
    return createFilterFormTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
