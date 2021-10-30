// Set format for date to display.
const dateFormat = {weekday: "long",
                 month: "long",
                 day: "2-digit",
                 year: "numeric"

}

// Create new Date object.
const currentDate = new Date();

// Create date string to display.
const displayDate = currentDate.toLocaleString('en-us', dateFormat);
  
// Add display date to document.
document.getElementById("currentDate").textContent = displayDate;

// Return the copyright year.
document.getElementById("copyright").textContent = currentDate.getFullYear();

// Add banner at top of page if its Saturday.
if (currentDate.getDay() == 5) {
    let body = document.querySelector("body")
    let eventDiv = document.createElement("div")
    eventDiv.textContent = "Saturday = Preston Pancakes in the Park!\
                            9:00 a.m. Saturday at the city park pavilion."
    eventDiv.id = "event"
                            
    referenceNode = document.getElementById("container")
    body.insertBefore(eventDiv,referenceNode)
  
  }

// Add current date to forecast articles
const forecastDay = document.querySelectorAll(".forecast-day");

// Create list of weekdays.
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayNumber = currentDate.getDay()

forecastDay.forEach(day => {
  if (dayNumber == 6) {
    dayNumber = -1;
  };
  dayNumber += 1
  day.textContent = dayName[dayNumber]

});
