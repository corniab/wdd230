// Town API
const townAPI = "https://byui-cit230.github.io/weather/data/towndata.json"

// Grab town info from API.
fetch(townAPI).then(response => response.json())
              .then(data => output(data))

// Output town information to page.
function output(data) {

    // Get towns list
    let towns = data['towns']

    // Create list of towns including Preston, Soda Springs, and Fish Haven
    const town = [towns[6], towns[0], towns[2]]  

    // Get townContent div.
    const townContent = document.querySelector('.town-content')

    // Loop through each town
    town.forEach(place => {
        // Create section
        let section = document.createElement('section');
        section.classList.add('town-section');

        // Create div to contain heading and motto
        let div = document.createElement('div');
        div.classList.add('town-heading');

        // Create heading
        let heading = document.createElement('h3');
        heading.textContent = place['name'];

        // Create motto
        let motto = document.createElement('p');
        motto.textContent = place['motto'];
        
        // Year founded
        let yearFounded = document.createElement('p');
        yearFounded.textContent = `Year Founded: ${place['yearFounded']}`;

        // Population
        let population = document.createElement('p');
        population.textContent = `Population: ${place['currentPopulation']}`;

        // Rain fall
        let rainfall = document.createElement('p');
        rainfall.textContent = `Rainfall: ${place['averageRainfall']}`;

        // Image
        let img = document.createElement('img');
        img.src = `images/${place['photo']}`;
        img.alt = `Image of mountains and lakes around ${place['name']}`;

        // Append heading and motto to div
        div.append(heading, motto, yearFounded, population, rainfall);

        // Append rest of content to section
        section.append(div, img); 
        
        // Append section to page
        townContent.append(section);


    })
}
