// DOM elements
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");


// Process the data 
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));


// Functions
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToMatch, cities) {
    // to return an array of objects 
    // that has similarities city || state name to user input
    return cities.filter(place => {
        // variable that contains user input
        // g, to find all instances of the user inputted letter in data
        // i, case-insensitive
        const regex = new RegExp(wordToMatch, "gi");
        return place.city.match(regex) || place.state.match(regex);
    })
}

function displayMatches() {
    const matchedArray = findMatches(this.value, cities);

    const html = matchedArray.map(place => {
        // variable that contains user input
        const regex = new RegExp(this.value, "gi");

        // variables to highlight user inputted letter
        const cityName = place.city.replace(regex, `<span class="highlight">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="highlight">${this.value}</span>`);

        return `
            <li>
            <span>${cityName}, ${stateName}</span>
            <span class="population">${numberWithCommas(place.population)}</span>
            </li>
        `;
    }).join(""); // to join the array elements become string

    suggestions.innerHTML = html;
}

searchInput.addEventListener("input", displayMatches);
