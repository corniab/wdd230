const path = "./json/business.json"

// get main
const main = document.querySelector(".main-directory")


fetch(path).then(response => response.json())   
           .then(data => createCards(data))

function createCards(data) {
    const businesses = data.businesses

    businesses.forEach(business => {
        let businessCard = document.createElement("div")
        businessCard.className = "business-card"

        let logo = document.createElement("img")
        logo.src = business.logo
        logo.alt = `logo for ${business.name}`

        let businessInfo = document.createElement("div")
        businessInfo.className = "business-info"

        let addressH3 = document.createElement("h3")
        addressH3.textContent = "Address"

        let addressUl = document.createElement("ul")
        let nameLi = document("li")
        nameLi.textContent = business.name

        let addressLi = document.createElement("li") 
        addressLi.textContent = business.address

        let cityLi = document.createElement("li")
        cityLi.textContent = business.city
        
        addressUl.append(nameLi, addressLi, cityLi)

        let contactH3 = document.createElement("h3")
        contactH3.textContent = "Contact"

        let contactUl = document.createElement("ul")
        let phoneLi = document.createElement("li")
        phoneLi = business.phone

        let email

        
    })
}