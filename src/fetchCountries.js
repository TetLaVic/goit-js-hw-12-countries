function fetchCountries(searchQuery) {
  const baseUrl = 'https://restcountries.eu/rest/v2/name/';

  return fetch(baseUrl + `${searchQuery}`)
    .then(response => response.json())
    .then(data => {
      {
        return data;
      }
    });
}

export default fetchCountries;
