// Grab all final image paths.
let imagesToLoad = document.querySelectorAll('img[data-src]');

// Declare function for setting the src attribute of the image.
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if (!src) {
        return;
    } else {

        img.src = src;
    }
}

// Declare the options that will be passed into the InstersectionObserver instance.
const options = {
    threshold: 1,
    rootMargin: "0px 0px 500px 0px"
};

// Create an instance of IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            preloadImage(entry.target);
            observer.unobserve(entry.target);
        }
    })
}, options);

// Pass each
imagesToLoad.forEach(image => {
    observer.observe(image);
});


// Update weather rating
function adjustRating(rating) {
    document.getElementById("ratingvalue").textContent = rating;
}