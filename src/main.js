import GeneralPresenter from './presenter/general-presenter.js';
import EventsModel from './model/events-model.js';

const tripInfoContainer = document.querySelector('.trip-main');
const filterFormContainer = tripInfoContainer.querySelector('.trip-controls__filters');
const eventAndSortContainer = document.querySelector('.trip-events');

const eventsModel = new EventsModel();
eventsModel.init();

const generalPresenter = new GeneralPresenter(
  {
    tripInfoContainer,
    filterFormContainer,
    eventAndSortContainer,
    eventsModel,
  }
);

generalPresenter.init();
