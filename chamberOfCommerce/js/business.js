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
        businessInfo.className = "business-card"

        let addressH3 = document.createElement("h3")
        addressH3.textContent = "Address"

        let addressUl = document.createElement("ul")
        let nameLi = document.createElement("li")
        nameLi.textContent = business.name

        let addressLi = document.createElement("li") 
        addressLi.textContent = business.address

        let cityLi = document.createElement("li")
        cityLi.textContent = business.city
        
        // append li to ul
        addressUl.append(nameLi, addressLi, cityLi)

        let contactH3 = document.createElement("h3")
        contactH3.textContent = "Contact"

        let contactUl = document.createElement("ul")
        let phoneLi = document.createElement("li")
        phoneLi.textContent = business.phone

        let emailLi = document.createElement("li")
        emailLi.textContent = business.email

        // append li to ul
        contactUl.append(phoneLi, emailLi)


        // append img, h3, ul to div
        businessInfo.append(logo, addressH3, addressUl, contactH3, contactUl)

        //append to main
        main.append(businessInfo)

        
    })
}