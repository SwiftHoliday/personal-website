// Declare your constants and variables (state)
let year; 

// Select and cche DOM element references
const yearEL = document.getElementById('year');


// Initialize 




// Define application functions

// run the function as soon as page loads
init();

function init() {
    year = new Date().getFullYear();
    yearEL.innerText = year;
}