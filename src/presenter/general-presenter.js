import { render, RenderPosition } from '../render.js';
import TripInfoView from '../view/trip-info-view.js';
import FilterFormView from '../view/filter-form-view.js';
import SortFormView from '../view/sort-form-view.js';
import EventView from '../view/event-view.js';
import EventListView from '../view/event-list-view.js';
import EditEventView from '../view/edit-event-view.js';
import { EVENTS_COUNT } from '../const.js';

export default class GeneralPresenter {
  eventListComponent = new EventListView();

  constructor(
    {
      tripInfoContainer,
      filterFormContainer,
      eventAndSortContainer,
      eventsModel,
    }
  ) {
    this.tripInfoContainer = tripInfoContainer;
    this.filterFormContainer = filterFormContainer;
    this.eventAndSortContainer = eventAndSortContainer;
    this.events = [...eventsModel.getEvents()];
    this.destinations = [...eventsModel.getDestinations()];
    this.offers = [...eventsModel.getOffers()];
  }

  init() {
    render(new TripInfoView(), this.tripInfoContainer, RenderPosition.AFTERBEGIN);
    render(new FilterFormView(), this.filterFormContainer);
    render(new SortFormView(), this.eventAndSortContainer);
    render(this.eventListComponent, this.eventAndSortContainer);
    render(new EditEventView(
      {
        event: this.events[6],
        destinations: this.destinations,
        offers: this.offers,
      }),
    this.eventListComponent.getElement()
    );

    for(let i = 1; i < EVENTS_COUNT; i++) {
      render(new EventView(
        {
          event: this.events[i],
          destinations: this.destinations,
          offers: this.offers,
        }
      ),
      this.eventListComponent.getElement()
      );
    }
  }
}
