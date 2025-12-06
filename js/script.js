document.addEventListener("DOMContentLoaded", function() {
    
    // ==========================================
    // 1. EXISTING FEATURE: Time-Based Greeting
    // ==========================================
    const greetingElement = document.getElementById("welcome-greeting");

    // Only run this if the greeting element exists (usually on Home page)
    if (greetingElement) {
        const currentHour = new Date().getHours();
        let greetingText = "Welcome!";

        if (currentHour < 12) {
            greetingText = "Good Morning, Welcome!";
        } else if (currentHour < 18) {
            greetingText = "Good Afternoon, Welcome!";
        } else {
            greetingText = "Good Evening, Welcome!";
        }

        greetingElement.textContent = greetingText;
    }


    // ==========================================
    // 2. NEW FEATURE: Form Validation (Step 9)
    // ==========================================
    const contactForm = document.getElementById("contactForm");

    // Only run this if the contact form exists (usually on Contact page)
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            // Prevent the browser from reloading the page
            event.preventDefault();

            // Get the values from the input fields
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const msgBox = document.getElementById("validationMessage");

            // Validation Logic
            if (name === "" || email === "" || message === "") {
                msgBox.textContent = "Error: Please fill in all fields.";
                msgBox.style.color = "red";
            } else if (!email.includes("@") || !email.includes(".")) {
                msgBox.textContent = "Error: Please enter a valid email address.";
                msgBox.style.color = "red";
            } else {
                // Success
                msgBox.textContent = "Success! Your message has been sent.";
                msgBox.style.color = "#FFBF00"; // Matches your Gold theme
                
                // Optional: Clear the form fields
                contactForm.reset();
            }
        });
    }


    // ==========================================
    // 3. NEW FEATURE: Page Visit Counter (Step 10)
    // ==========================================
    // This uses localStorage to remember how many times a user visited.
    
    // Get the current count from browser storage
    let visits = localStorage.getItem("page_visits");

    // If it doesn't exist, start at 1. Otherwise, increase it.
    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    // Save the new count back to storage
    localStorage.setItem("page_visits", visits);

    // Display the count IF the element exists on the page
    const visitCounterElement = document.getElementById("visitCounter");
    if (visitCounterElement) {
        visitCounterElement.textContent = `You have visited this site ${visits} time(s).`;
    }

});