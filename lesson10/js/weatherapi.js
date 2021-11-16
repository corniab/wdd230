// Weather API
const cityID = '5604473'
const key = '16e5e0c89da2e533aa4d31b7753cd2ad'
const units = 'imperial'
const url = `https://api.openweathermap.org/data/2.5/weather?id=${cityID}&appid=${key}&units=${units}`

// Make a request to api
fetch(url).then(response => response.json())
          .then(data => output(data));

// Output function
function output(data) {
    console.log(data);
    document.getElementById('current-temp').textContent = data.main.temp;

    //Use a variable to store the image address which needs to be concatenated together given the API icon code value result.
    const imagesrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;

    //Use a variable to store the weather description.
    const description = data.weather[0].description;

    //Assign the <span> tag  with the id of 'imagesrc' the concatenated image variable to to display the full address for testing purposes.
    document.getElementById('imagesrc').textContent = imagesrc;

    //Set the src attribute for the <img> with the id of 'icon'.
    document.getElementById('icon').setAttribute('src', imagesrc);

   // Set the alt attribute for the <img> for accessibility.
   document.getElementById('icon').setAttribute('alt', description);
};

