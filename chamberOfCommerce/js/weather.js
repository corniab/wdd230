const key = "16e5e0c89da2e533aa4d31b7753cd2ad"
const units = "imperial"
const lat =  "40.5622"
const lon = "-111.9297"
const part = ["minutely", "hourly"]

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&exclude=${part}&lon=${lon}&appid=${key}&units=${units}`


// weather content
const weatherContent = document.querySelector(".weather-content")

fetch(url).then(response => response.json())
          .then(data => createForecast(data))


function createForecast(data) {
    let dailyForecasts = data.daily   
    console.log(dailyForecasts)

    for (let i=1; i < 5; i++) {
        let forecastDay = new Date(dailyForecasts[i].dt*1000).toLocaleDateString("en-US", {weekday: "long"})
        let forecastTemp = `${dailyForecasts[i].temp["day"]} &deg;F`
        let forecastIcon = `https://openweathermap.org/img/w/${dailyForecasts[i].weather[0].icon}.png`;

        let foreCastTempDiv = document.createElement("div")

        let foreCastTempDay = document.createElement("p")
        foreCastTempDay.innerText = forecastDay

        let forecastTempP = document.createElement("p")
        forecastTempP.innerHTML = forecastTemp

        foreCastTempDiv.append(forecastDay, forecastTempP)

        let dailyForecast = document.createElement("div")

        let dailyImage = document.createElement("img")
        dailyImage.src = forecastIcon
        
        dailyForecast.append(dailyImage, foreCastTempDiv)

        
        weatherContent.append(dailyForecast)


    }
}

