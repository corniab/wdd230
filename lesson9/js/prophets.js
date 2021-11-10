// Prophets API
const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

// Fetch data.
fetch(requestURL).then(response => response.json())
                 .then(data => output(data));

// Output data to page.
function output(data) {

  // Grab array associated with prophets.
  let prophets = data['prophets']

  // Grab .cards div
  const card = document.getElementById('cards');

  // Loop through array of prophets and append to page.
  prophets.forEach(prophet => {
    let name = `${prophet['name']} ${prophet['lastname']}`;

    // Create section
    let section = document.createElement('section');

    // Create h2
    let title = document.createElement('h2');
    title.textContent = name;

    // Create p for dob
    let dob = document.createElement('p');
    dob.textContent = `Date of Birth: ${prophet['birthdate']}`;

    // Create p for place of birth
    let birthplace = document.createElement('p');
    birthplace.textContent = `Place of Birth: ${prophet['birthplace']}`;

    // Create img
    let img = document.createElement('img');
    img.src = prophet['imageurl'];
    img.alt = `Picture of ${name}`;


    // Append to section
    section.append(title, img, dob, birthplace)

    // Append to card
    card.append(section)
  });
}