const path = "./json/business.json"

// get main
const main = document.querySelector(".main-directory")
console.log(main)

fetch(path).then(response => response.json())   
           .then(data => createCards(data))

function createCards(data) {
    const businesses = data.businesses

    businesses.forEach(business => {
        
    })
}