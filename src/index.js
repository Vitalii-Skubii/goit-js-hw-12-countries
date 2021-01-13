 import './styles.css';
// // import './js/refs';
import countriesTemplates from './templates/countries.hbs';
import singleCountryTemplate from './templates/singleCountry.hbs';
// // import './js/fetchCountries';
const refs = {
    countriesList: document.querySelector(".js-countries"),
inputCountries: document.querySelector(".js-input"),
};

// // refs.countriesList.innerHTML = "";

refs.inputCountries.addEventListener( 'input',event => {
    event.preventDefault();
    const searchCountries = event.currentTarget.value;

    const url = `https://restcountries.eu/rest/v2/name/${searchCountries}`;
    fetch(url).then(response => response.json()).then(data => {
        if (data.length > 10) {
            return
            }
        if (data.length > 1 && data.length < 10) {
            refs.countriesList.innerHTML = '';
            const markup = countriesTemplates(data);
    
    console.log(data);
            refs.countriesList.insertAdjacentHTML('beforeend', markup);
        } else if (data.length === 1)
        {
            refs.countriesList.innerHTML = '';
            const country = singleCountryTemplate(data[0]);
            refs.countriesList.insertAdjacentHTML('beforeend', country);
        }
    }    ).catch(error=>error);

    
});
// const url = `https://restcountries.eu/rest/v2/name/${searchCountries}`;
// fetch(url).then(response => response.json()).then(({ name }) => {
    
//     const markUp = countriesTempl(name);
//     refs.countriesList.insertAdjacentHTML('beforeend', markUp);
// }

// ).catch(error => console.log(error));
// })



