import GeneralPresenter from './presenter/general-presenter';

const tripInfoContainer = document.querySelector('.trip-main');
const filterFormContainer = tripInfoContainer.querySelector('.trip-controls__filters');
const eventAndSortContainer = document.querySelector('.trip-events');

const generalPresenter = new GeneralPresenter(
  tripInfoContainer,
  filterFormContainer,
  eventAndSortContainer,
);

generalPresenter.init();
