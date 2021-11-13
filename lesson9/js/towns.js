// Town API
const townAPI = "https://byui-cit230.github.io/weather/data/towndata.json"

// Grab town info from API.
fetch(townAPI).then(response => response.json())
              .then(towns => output(towns))

// Output town information to page.
function output(towns) {
    console.log(towns)
}
