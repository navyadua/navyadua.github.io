// Get the necessary elements
const slides1 = document.querySelector(".sliders");
const slideItems1 = document.querySelectorAll(".slide");
const prevBtn1 = document.querySelector(".prev");
const nextBtn1 = document.querySelector(".next");
const indicators1 = document.querySelectorAll(".indicator .dot");

// Set the initial slide index and time interval
let currentSlide1 = 0;
let interval1;

// Function to show a slide by its index
function showSlide1(index1) {
// Set the slide index
currentSlide1 = index1;

// Hide all slides except the one with the current index
slideItems1.forEach((item1, i1) => {
if (i1 === currentSlide1) {
item1.style.display = "block";
} else {
item1.style.display = "none";
}
});

// Set the active indicator dot
indicators1.forEach((dot1, i1) => {
if (i1 === currentSlide1) {
dot1.classList.add("active");
} else {
dot1.classList.remove("active");
}
});
}

// Function to show the next slide
function showNextSlide1() {
let nextSlide1 = currentSlide1 + 1;
if (nextSlide1 >= slideItems1.length) {
nextSlide1 = 0;
}
showSlide1(nextSlide1);
}

// Function to show the previous slide
function showPrevSlide1() {
let prevSlide1 = currentSlide1 - 1;
if (prevSlide1 < 0) {
prevSlide1 = slideItems1.length - 1;
}
showSlide1(prevSlide1);
}

// Start the slideshow
function startSlideshow1() {
interval1 = setInterval(showNextSlide1, 3000);
}

// Stop the slideshow
function stopSlideshow1() {
clearInterval(interval1);
}

// Add event listeners to the navigation controls
prevBtn1.addEventListener("click", () => {
stopSlideshow1();
showPrevSlide1();
});
nextBtn1.addEventListener("click", () => {
stopSlideshow1();
showNextSlide1();
});

// Add event listeners to the indicator dots
indicators1.forEach((dot1, i1) => {
dot1.addEventListener("click", () => {
stopSlideshow1();
showSlide1(i1);
});
});

// Show the first slide
showSlide1(currentSlide1);

// Start the slideshow
startSlideshow1();