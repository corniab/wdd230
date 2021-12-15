const key = "16e5e0c89da2e533aa4d31b7753cd2ad"
const units = "imperial"
const lat =  "40.5622"
const lon = "-111.9297"
const part = ["minutely", "hourly"]

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&exclude=${part}&lon=${lon}&appid=${key}&units=${units}`


// weather content
const weatherContent = document.querySelector(".weather-content")

// current conditions
const heroTemp = document.getElementById("hero-temp")
const heroHumidity = document.getElementById("humidity")
const forecastDescription = document.getElementById("forecast-description")

fetch(url).then(response => response.json())
          .then(data => createForecast(data))

function createForecast(data) {
    //update current conditions
    let current = data.current  
    heroTemp.innerHTML = `${Math.round(current.temp)}&deg;F`
    heroHumidity.innerHTML = `${current.humidity}%`
    forecastDescription.innerHTML = current.weather[0].description

    //Create 4 day forecast
    let dailyForecasts = data.daily 
    for (let i=1; i < 5; i++) {
        let forecastDay = new Date(dailyForecasts[i].dt*1000).toLocaleDateString("en-US", {weekday: "long"})
        let forecastTemp = `${dailyForecasts[i].temp["day"]}&deg;F`
        let forecastIcon = `https://openweathermap.org/img/w/${dailyForecasts[i].weather[0].icon}.png`;

        let foreCastTempDiv = document.createElement("div")
        foreCastTempDiv.className = "forecast-temp"

        let foreCastTempDay = document.createElement("p")
        foreCastTempDay.innerHTML = forecastDay

        let forecastTempP = document.createElement("p")
        forecastTempP.innerHTML = forecastTemp

        foreCastTempDiv.append(forecastTempP, foreCastTempDay)

        let dailyForecast = document.createElement("div")
        dailyForecast.className = "daily-forecast"

        let dailyImage = document.createElement("img")
        dailyImage.src = forecastIcon
        
        dailyForecast.append(dailyImage, foreCastTempDiv)

        
        weatherContent.append(dailyForecast)


    }
    
    //Display alerts if any
    let wrapper = document.querySelector(".wrapper")
    let body = document.querySelector("body")
    if (data.events) {
        let alertsDiv = document.createElement("div")
        alertsDiv.className = "alerts"

        alertsP = document.createElement("p")
        alertsP.innerHTML = data.events.description

        alertsDiv.append(alertsP)

        //insert alerts div before wrapper
        body.insertBefore(alertsDiv, wrapper)
    }
}

