import './styles.css';
import { error} from './js/pnotify';
// // import './js/refs';
const debounce = require('lodash.debounce');
import countriesTemplates from './templates/countries.hbs';
import singleCountryTemplate from './templates/singleCountry.hbs';
import fetchCountries from './js/fetchCountries';
const refs = {
    countriesList: document.querySelector(".js-countries"),
inputCountries: document.querySelector(".js-input"),
};

// // refs.countriesList.innerHTML = "";

   const getCountries = function (event){ event.preventDefault();
    fetchCountries(event.target.value).then(data =>countriesMarkup(data) ).catch(() => {
        error({
            delay: 1000,
            text: 'Country not found!',
        })
    })
}
    
   const countriesMarkup=function(data){
        if (data.length > 10) {
            error({
                delay: 1000,
                title: 'Too many matches found.',
                text: 'Please type in more specific information!',
            })
        }
        if (data.length > 1 && data.length < 10) {
            refs.countriesList.innerHTML = '';
            const markup = countriesTemplates(data);
    
            console.log(data);
            refs.countriesList.insertAdjacentHTML('beforeend', markup);
        } else if (data.length === 1) {
            refs.countriesList.innerHTML = '';
            const country = singleCountryTemplate(data[0]);
            refs.countriesList.insertAdjacentHTML('beforeend', country);
        }
}
    
refs.inputCountries.addEventListener('input', debounce(getCountries, 500));


    // const url = `https://restcountries.eu/rest/v2/name/${searchCountries}`;
    // fetch(url).then(response => response.json()).then(data => {
    //     if (data.length > 10) {
    //         error({
    //             delay: 500,
    //             title: 'Too many matches found.',
    //             text: 'Please type in more specific information!',
    //         })
    //     }
    //     if (data.length > 1 && data.length < 10) {
    //         refs.countriesList.innerHTML = '';
    //         const markup = countriesTemplates(data);
    
    //         console.log(data);
    //         refs.countriesList.insertAdjacentHTML('beforeend', markup);
    //     } else if (data.length === 1) {
    //         refs.countriesList.innerHTML = '';
    //         const country = singleCountryTemplate(data[0]);
    //         refs.countriesList.insertAdjacentHTML('beforeend', country);
    //     }
    // }).catch(() => {
    //     error({
    //         delay: 500,
    //         text: 'Country not found!',
    //     })
    // });







// const url = `https://restcountries.eu/rest/v2/name/${searchCountries}`;
// fetch(url).then(response => response.json()).then(({ name }) => {
    
//     const markUp = countriesTempl(name);
//     refs.countriesList.insertAdjacentHTML('beforeend', markUp);
// }

// ).catch(error => console.log(error));
// })



