// Add last visited date retrieved from local storage.
let lastVisited = document.getElementById("last-visited");

if(!localStorage.getItem('lastVisit')) {
  populateStorage();
} else {
  appendDate();
};

function populateStorage() {
  localStorage.setItem('lastVisit', new Date());
}

function appendDate() {
  let oldDate = new Date(localStorage.getItem('lastVisit'));
  let currentDate = new Date();

  let difference = currentDate.getTime() - oldDate.getTime();
  let differenceDay = Math.round(difference/(1000 * 3600 * 24));

  lastVisited.textContent = differenceDay;
}