// Return the date last modified as 'Wednesday, 24 July 2020'
let currentDate = new Date();

// Parse day of the week
const weekdays = ["Sunday", "Monday", "Tuesday", 
                  "Wednesday", "Thursday", "Friday", 
                  "Saturday"
                ];

let weekday = weekdays[currentDate.getDay()];

// Parse the day of the month
let monthDate = currentDate.getDate();

// Parse the month
const monthNames = ["January", "February", "March", 
                    "April", "May", "June",
                    "July", "August", "September", 
                    "October", "November", "December"
                  ];

let month = monthNames[currentDate.getMonth()];

// Parse the year
let year = currentDate.getFullYear();

// Combine date values into one string
let dateFinal = `${weekday}, ${monthDate} ${month} ${year}`;
  
// Return the modified date  
document.getElementById("currentDate").textContent = dateFinal;

// Return the copyright year.
document.getElementById("copyright").textContent = 
  new Date().getFullYear();

// Add banner at top of page if its Saturday.
if (currentDate.getDay() == 6) {
    let body = document.querySelector("body")
    let eventDiv = document.createElement("div")
    eventDiv.textContent = "Saturday = Preston Pancakes in the Park!\
                            9:00 a.m. Saturday at the city park pavilion."
    eventDiv.id = "event"
                            
    referenceNode = document.getElementById("container")
    body.insertBefore(eventDiv,referenceNode)
  
  }