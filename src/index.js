import _ from 'lodash';
import fetchCountries from './fetchCountries.js';
import notifications from './pnotify.js';
import template from './template.hbs';
import './styles.css';

const refs = {
  input: document.getElementById('country-name-input'),
  countryList: document.querySelector('.js-list'),
};

refs.input.addEventListener('input', _.debounce(onInputChange, 500));

function onInputChange(event) {
  populateList('');
  const inputName = event.target.value.toLowerCase();
  fetchCountries(inputName).then(createListItemsMarkup).then(populateList);
}

function createListItemsMarkup(items) {
  if (items.length > 10) {
    notifications.onOverflow();
    return '';
  }

  if (items.length === 1) {
    return template(items[0]);
  }

  return items.map(item => `<li>${item.name}</li>`).join('');
}

function populateList(listItemsMarkup) {
  refs.countryList.innerHTML = listItemsMarkup;
}
