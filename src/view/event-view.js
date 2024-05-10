import { DateFormat } from '../const.js';
import { createElement } from '../render.js';
import { getEventDuration, humanizeDateFormat } from '../utils.js';

const createEventOfferTemplate = (offer) => {
  const {title, price} = offer;

  return `<li class="event__offer">
    <span class="event__offer-title">${title}</span>
    &plus;&euro;&nbsp;
    <span class="event__offer-price">${price}</span>
  </li>`;
};

const createEventTemplate = (event, destinations, allOffers) => {
  const {
    type,
    dateFrom,
    dateTo,
    destination: destinationId,
    basePrice,
    offers: offerIds,
    isFavorite,
  } = event;

  const destinationName = destinations.find((destination) => destination.id === destinationId).name;
  const possibleOffers = allOffers.find((typeOffers) => typeOffers.type === type).offers;
  const eventOffers = possibleOffers.filter((possibleOffer) => offerIds.includes(possibleOffer.id));

  const favoriteClassName = (bool) => bool ? 'event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
<div class="event">
  <time class="event__date" datetime=${humanizeDateFormat(dateFrom, DateFormat.YEAR_MOUNTH_DAY)}>${humanizeDateFormat(dateFrom, DateFormat.MOUNTH_DAY)}</time>
  <div class="event__type">
    <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
  </div>
  <h3 class="event__title">${type} ${destinationName}</h3>
  <div class="event__schedule">
    <p class="event__time">
      <time class="event__start-time" datetime=${humanizeDateFormat(dateFrom, DateFormat.YEAR_MOUNTH_DAY_HOURS_MINUTES)}>${humanizeDateFormat(dateFrom, DateFormat.HOURS_MINUTES)}</time>
      &mdash;
      <time class="event__end-time" datetime=${humanizeDateFormat(dateTo, DateFormat.YEAR_MOUNTH_DAY_HOURS_MINUTES)}>${humanizeDateFormat(dateTo, DateFormat.HOURS_MINUTES)}</time>
    </p>
    <p class="event__duration">${getEventDuration(dateFrom, dateTo)}M</p>
  </div>
  <p class="event__price">
    &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
  </p>
  <h4 class="visually-hidden">Offers:</h4>
  <ul class="event__selected-offers">
  ${eventOffers.map(createEventOfferTemplate).join('')}
  </ul>
  <button class="event__favorite-btn ${favoriteClassName(isFavorite)}" type="button">
    <span class="visually-hidden">Add to favorite</span>
    <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
      <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
    </svg>
  </button>
  <button class="event__rollup-btn" type="button">
    <span class="visually-hidden">Open event</span>
  </button>
</div>
</li>`;
};
export default class EventView {
  constructor({ event, destinations, offers }) {
    this.event = event;
    this.destinations = destinations;
    this.offers = offers;
  }

  getTemplate() {
    return createEventTemplate(this.event, this.destinations, this.offers);
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
