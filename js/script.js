// The event listener runs when the page is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // the const variable gets the greeting element and stores it
    const greetingElement = document.getElementById("welcome-greeting");

    
    //The if conditional stops errors on my projects and contact pages
    if (greetingElement) {
        updateGreeting();
    }
});

// This one holds the function to update the greeting based on time of day
function updateGreeting() {  

    const greetingElement = document.getElementById("welcome-greeting");
    const currentHour = new Date().getHours(); // Gets the hour (0-23)
    
    // A 'let' variable that can be changed
    let greetingText = "Welcome!"; 

    // conditionals
    if (currentHour < 12) {
        greetingText = "Good Morning, Welcome!";
    } else if (currentHour < 18) {
        greetingText = "Good Afternoon, Welcome!";
    } else {
        greetingText = "Good Evening, Welcome!";
    }

    // Update the text on the page
    greetingElement.textContent = greetingText;
}