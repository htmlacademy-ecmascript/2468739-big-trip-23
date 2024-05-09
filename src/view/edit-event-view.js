import { DateFormat, EventType } from '../const.js';
import { createElement } from '../render.js';
import { humanizeDateFormat } from '../utils.js';

const createEditEventTypeItemTemplate = (eventType) => `<div class="event__type-item">
<input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${eventType}>
<label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${eventType[0].toUpperCase()}${eventType.slice(1)}</label>
</div>`;

const isCheckedOffer = (offerId, checkedOffers) => checkedOffers.find((checkedOffer) => offerId === checkedOffer.id);

const createEditViewOfferItemTemplate = (offer, checkedOffers) => {
  const {title, price} = offer;

  return `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isCheckedOffer(offer.id, checkedOffers) ? 'checked' : ''}>
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>`;
};

const createEditEventTemplate = (event, allThisTypeEventOffers) => {
  const {
    type,
    dateFrom,
    dateTo,
    basePrice,
    offers: checkedOffers,
    destination,
  } = event;

  return `<li class="trip-events__item">
<form class="event event--edit" action="#" method="post">
  <header class="event__header">
    <div class="event__type-wrapper">
      <label class="event__type  event__type-btn" for="event-type-toggle-1">
        <span class="visually-hidden">Choose event type</span>
        <img class="event__type-icon" width="17" height="17" src="img/icons/${type}.png" alt="Event type icon">
      </label>
      <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

      <div class="event__type-list">
        <fieldset class="event__type-group">
          <legend class="visually-hidden">Event type</legend>
          ${Object.values(EventType).map(createEditEventTypeItemTemplate).join('')}
        </fieldset>
      </div>
    </div>

    <div class="event__field-group  event__field-group--destination">
      <label class="event__label  event__type-output" for="event-destination-1">
        ${type}
      </label>
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Chamonix" list="destination-list-1">
      <datalist id="destination-list-1">
        <option value="Amsterdam"></option>
        <option value="Geneva"></option>
        <option value="Chamonix"></option>
      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value=${humanizeDateFormat(dateFrom, DateFormat.DAY_MOUNTH_YEAR_HOURS_MINUTES)}>
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value=${humanizeDateFormat(dateTo, DateFormat.DAY_MOUNTH_YEAR_HOURS_MINUTES)}>
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${basePrice}>
    </div>

    <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
    <button class="event__reset-btn" type="reset">Delete</button>
    <button class="event__rollup-btn" type="button">
      <span class="visually-hidden">Open event</span>
    </button>
  </header>
  <section class="event__details">
    <section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
      ${allThisTypeEventOffers.map((offer) => createEditViewOfferItemTemplate(offer, checkedOffers)).join('')}

      </div>
    </section>

    <section class="event__section  event__section--destination">
      <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${destination.description.join('')}</p>
    </section>
  </section>
</form>
</li>`;
};
export default class EditEventView {
  constructor(
    {
      event,
      allThisTypeEventOffers,
    }
  ) {
    this.event = event;
    this.allThisTypeEventOffers = allThisTypeEventOffers;
  }

  getTemplate() {
    return createEditEventTemplate(this.event, this.allThisTypeEventOffers);
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
