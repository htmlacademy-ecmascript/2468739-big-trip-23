import { loadEvents } from '../mock/mock-events.js';
import { loadDestinations } from '../mock/mock-destinations.js';
import { loadOffers } from '../mock/mock-offers.js';

export default class EventsModel {
  constructor() {
    this.events = [];
    this.destinations = [];
    this.offers = [];
  }

  init() {
    this.events = loadEvents();
    this.destinations = loadDestinations();
    this.offers = loadOffers();
  }

  getEvents() {
    return this.events;
  }

  getDestinations() {
    return this.destinations;
  }

  getOffers() {
    return this.offers;
  }
}
