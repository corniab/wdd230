// Return the date last modified as 'Wednesday, 24 July 2020'
let lastUpdated = new Date(document.lastModified);

// Parse day of the week
const weekdays = ["Sunday", "Monday", "Tuesday", 
                  "Wednesday", "Thursday", "Friday", 
                  "Saturday"
                ];

let weekday = weekdays[lastUpdated.getDay()];

// Parse the day of the month
let monthDate = lastUpdated.getDate();

// Parse the month
const monthNames = ["January", "February", "March", 
                    "April", "May", "June",
                    "July", "August", "September", 
                    "October", "November", "December"
                  ];

let month = monthNames[lastUpdated.getMonth()];

// Parse the year
let year = lastUpdated.getFullYear();

// Combine date values into one string
let dateFinal = `${weekday}, ${monthDate} ${month} ${year}`;
  
// Return the modified date  
document.getElementById("lastUpdated").textContent = dateFinal;

// Return the copyright year.
document.getElementById("copyright").textContent = 
  new Date().getFullYear();

const toggleNav = document.querySelector('.toggle-nav');
const mainNav = document.querySelector('.navigation')

toggleNav.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainNav.classList.remove('responsive')};