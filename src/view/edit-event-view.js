import { DateFormat, EventType } from '../const.js';
import { createElement } from '../render.js';
import { humanizeDateFormat } from '../utils.js';

const createEditEventTypeItemTemplate = (eventType) => `<div class="event__type-item">
<input id="event-type-${eventType}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value=${eventType}>
<label class="event__type-label  event__type-label--${eventType}" for="event-type-${eventType}-1">${eventType[0].toUpperCase()}${eventType.slice(1)}</label>
</div>`;

const isCheckedOffer = (offer, checkedOfferIds) => checkedOfferIds.includes(offer.id);

const createEditEventOfferItemTemplate = (offer, checkedOfferIds) => {
  const {title, price} = offer;

  return `<div class="event__offer-selector">
          <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" ${isCheckedOffer(offer, checkedOfferIds) ? 'checked' : ''}>
          <label class="event__offer-label" for="event-offer-luggage-1">
            <span class="event__offer-title">${title}</span>
            &plus;&euro;&nbsp;
            <span class="event__offer-price">${price}</span>
          </label>
        </div>`;
};

const createEditEventPictureTemplate = (picture) => `<img class="event__photo" src=${picture.src} alt=${picture.description}></img>`;
const createEditEventDestinationListItemTemplate = (destination) => `<option value=${destination.name}></option>`;

const createEditEventButtonsTemplate = (id) => `<button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
${id ? `<button class="event__reset-btn" type="reset">Delete</button>
<button class="event__rollup-btn" type="button">
  <span class="visually-hidden">Open event</span>
</button>` : '<button class="event__reset-btn" type="reset">Cancel</button>'}`;

const createEditEventTemplate = (event, destinations, allOffers) => {
  const {
    id,
    type,
    dateFrom,
    dateTo,
    basePrice,
    offers: offerIds,
    destination: destinationId,
  } = event;

  const startEventTime = dateFrom ? humanizeDateFormat(dateFrom, DateFormat.DAY_MOUNTH_YEAR_HOURS_MINUTES) : '';
  const endEventTime = dateTo ? humanizeDateFormat(dateTo, DateFormat.DAY_MOUNTH_YEAR_HOURS_MINUTES) : '';

  const eventDestination = destinations.find((destination) => destination.id === destinationId);
  const possibleOffers = allOffers.find((typeOffers) => typeOffers.type === type).offers;

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
      <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value=${eventDestination?.name ?? '""'} list="destination-list-1">
      <datalist id="destination-list-1">
        ${destinations.map(createEditEventDestinationListItemTemplate).join('')}

      </datalist>
    </div>

    <div class="event__field-group  event__field-group--time">
      <label class="visually-hidden" for="event-start-time-1">From</label>
      <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${startEventTime}">
      &mdash;
      <label class="visually-hidden" for="event-end-time-1">To</label>
      <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${endEventTime}">
    </div>

    <div class="event__field-group  event__field-group--price">
      <label class="event__label" for="event-price-1">
        <span class="visually-hidden">Price</span>
        &euro;
      </label>
      <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value=${basePrice ?? '0'}>
    </div>

    ${createEditEventButtonsTemplate(id)}
  </header>
  <section class="event__details">
    ${possibleOffers.length ? `<section class="event__section  event__section--offers">
      <h3 class="event__section-title  event__section-title--offers">Offers</h3>

      <div class="event__available-offers">
      ${possibleOffers.map((offer) => createEditEventOfferItemTemplate(offer, offerIds)).join('')}
      </div>

    </section>` : ''}
    ${(eventDestination?.description.length === 0 && eventDestination?.pictures.length === 0) || eventDestination === undefined ? ''
    : `<section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
      <p class="event__destination-description">${eventDestination?.description.join('')}</p>

      <div class="event__photos-container">
        <div class="event__photos-tape">
          ${eventDestination?.pictures.map(createEditEventPictureTemplate).join('')}
        </div>
      </div>
    </section>`}
  </section>
</form>
</li>`;
};
export default class EditEventView {
  constructor(
    {
      event,
      destinations,
      offers,
    }
  ) {
    this.event = event;
    this.descriptions = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEditEventTemplate(this.event, this.descriptions, this.offers);
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
