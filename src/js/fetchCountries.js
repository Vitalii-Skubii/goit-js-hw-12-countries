


const fetchCountries = function (searchQuery) {
    const url = `https://restcountries.eu/rest/v2/name/${searchQuery}`;
    return fetch(url).then(response => response.json());
};
    
export default fetchCountries;

// // const options = {
// //     headers: {
// //         'Authorization':...;
// //     },
// // }

// refs.inputCountries.addEventListener('input', event => {
//     event.preventDefault();
// })

// const url = 'https://restcountries.eu/rest/v2/name/uni';
// fetch(url).then(response => response.json()).then(({ name }) => {
//     const markUp = countriesTempl(name);
//     refs.countriesList.insertAdjacentHTML(markUp);
// }

// ).catch(error => console.log(error));
