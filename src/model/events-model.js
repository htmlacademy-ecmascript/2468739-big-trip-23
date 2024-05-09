import { EVENTS_COUNT } from '../const.js';
import { getEvent } from '../mock/mock-events.js';
import { getDestination } from '../mock/mock-destinations.js';
import { getOffers } from '../mock/mock-offers.js';

export default class EventsModel {
  events = Array.from({length: EVENTS_COUNT}, getEvent).map((event) => ({
    ...event,
    destination: getDestination(event.destination),
    offers: getOffers(event.type, event.offers),
  }));

  getEvents() {
    return this.events;
  }
}
