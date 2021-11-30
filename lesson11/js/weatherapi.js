// Find the name of the town
const townPage = document.getElementsByTagName("h2")[0].textContent;
let lat = ''
let lon = ''
  
// Make a request to current weather api
switch (townPage) {
  case 'Preston, Idaho':
    lat = '42.090499638'
    lon = '111.8766'
    break;
  case 'Soda Springs, Idaho':
    lat = '42.6544'
    lon = '111.6047'
    break;
  case 'Fish Haven, Idaho':
    lat = '42.0372'
    lon = '111.3960'
    break;
  default:
    console.log("Town name not found")
};

// Weather API
const key = '16e5e0c89da2e533aa4d31b7753cd2ad'
const units = 'imperial'
const currentWeather = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`
const fiveDay = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=${units}`
const imagesrc = 'https://openweathermap.org/img/w/'

// Fetch data for current town page
fetch(currentWeather).then(response => response.json())
                     .then(data => summary(data));

// Weather summary function
function summary(data) {
  // Current description
  document.getElementById("description").textContent = data.weather[0]["description"];

  // High temperature
  document.getElementById("temperature").textContent = Math.round(data.main.temp_max);

  // Humidity
  document.getElementById("humidity").textContent = data.main.humidity;

  // Wind Speed
  document.getElementById("windspeed").textContent = Math.round(data.wind.speed);

  // Calculates and returns windchill factor for overlay.
  const temperature = parseFloat(document.getElementById("temperature").textContent);
  const windspeed = parseFloat(document.getElementById("windspeed").textContent);

  const windchill = Math.round(35.74 + (.6215*temperature) - (35.75*Math.pow(windspeed, .16)) + (.4725*temperature*Math.pow(windspeed, .16)))

  document.getElementById("windchill").textContent = windchill
};

// Make a request to forecast api
fetch(fiveDay).then(response => response.json())
              .then(data => forecast(data))

// 5 day forecast function.
function forecast(data) {
  const forecast_list = data.list

  const forecast_div = document.getElementById("forecast")

  forecast_list.forEach(day => {
    if (day.dt_txt.substring(11,) == "18:00:00") {
      
      // fix date format
      let dateWrong = day.dt_txt

      // Replace '-' with '/'
      let dateRight = dateWrong.replace(/-/g, "/")

      // Create article
      article = document.createElement("article")

      // Create header
      header = document.createElement("header")

      // Create heading
      heading = document.createElement("h4")
      heading.textContent = new Date(dateRight).toLocaleDateString('en-us', {weekday:"long"})

      // Create div .forecast-content
      div = document.createElement("div")
      div.classList.add("forecast-content")

      // Create img
      img = document.createElement("img")
      img.src = `${imagesrc}${day.weather[0].icon}.png`
      img.alt = "Forecast weather icon"

      // Create p
      p = document.createElement("p")
      p.innerHTML = `High: ${Math.round(day.main.temp_max)} &#8457;`

      // Append img and p to div
      div.append(img, p)

      // Append heading to header
      header.append(heading)

      // Append div and header to article
      article.append(header, div)

      // Append article to #forecast
      forecast_div.append(article)

    }
  })

}