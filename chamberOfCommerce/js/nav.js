// Toggle the navigation to collapse in small views
const toggleNav = document.querySelector('.toggle-nav');
const mainNav = document.querySelector('.navigation')

toggleNav.addEventListener('click', () => {mainNav.classList.toggle('responsive')}, false);

// Wayfinding--Show the user which page they're on.
const navItem = document.querySelectorAll(".nav-item")

let currentPage = window.location.href;

// Loop through each navItem and compare it to the current url.
// If its a match apply the active-nav class to the element.

navItem.forEach(element => {

  if (element.href === currentPage) {
    element.classList.add("active-nav")
  } else {
    element.classList.remove("active-nav")
  }
});
