// Find the name of the town
let townTitle = document.getElementsByTagName("h2")[0].textContent;

// Make a request to current weather api
switch (townTitle) {
  case 'Preston, Idaho':
    townName = 'Preston'
    break;
  case 'Soda Springs, Idaho':
    townName = 'Soda Springs'
    break;
  case 'Fish Haven, Idaho':
    townName = 'Fish Haven'
    break;
  default:
    console.log("Town name not found")
  };

// Events API
const url = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(url).then(response => response.json())
          .then(data => loadEvents(data));

function loadEvents(data) {
  let townEvents = data.towns
  
  townEvents.forEach(townEvent => {
    if (townEvent.name === townName) {
      // Create events div
      let eventDiv = document.createElement("div");
      eventDiv.id = "town-events"

      let eventHeading = document.createElement("h3")
      eventHeading.textContent = "Upcoming Events"
      eventDiv.append(eventHeading)

      // Create p for each event and append it to div
      townEvent.events.forEach(newEvent => {
        let eventP = document.createElement("p")
        eventP.textContent = newEvent
        eventDiv.append(eventP)
      })

      // append div before article
      let articleDiv = document.getElementById("new-article")
      let mainTag = document.querySelector("main")
      mainTag.insertBefore(eventDiv, articleDiv)

    }
  })
};