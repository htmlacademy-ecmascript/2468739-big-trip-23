import { EVENTS_COUNT } from '../const.js';
import { getEvent } from '../mock/mock-events.js';

export default class EventsModel {
  events = Array.from({length: EVENTS_COUNT}, getEvent);

  getEvents() {
    return this.events;
  }
}
