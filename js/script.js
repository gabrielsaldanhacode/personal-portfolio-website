document.addEventListener("DOMContentLoaded", function() {
    

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

    const contactForm = document.getElementById("contactForm");

 
    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            
            event.preventDefault();

        
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const msgBox = document.getElementById("validationMessage");

   
            if (name === "" || email === "" || message === "") {
                msgBox.textContent = "Error: Please fill in all fields.";
                msgBox.style.color = "red";
            } else if (!email.includes("@") || !email.includes(".")) {
                msgBox.textContent = "Error: Please enter a valid email address.";
                msgBox.style.color = "red";
            } else {
                // Success
                msgBox.textContent = "Success! Your message has been sent.";
                msgBox.style.color = "#FFBF00";
                
                contactForm.reset();
            }
        });
    }

    let visits = localStorage.getItem("page_visits");

    if (!visits) {
        visits = 1;
    } else {
        visits = parseInt(visits) + 1;
    }

    localStorage.setItem("page_visits", visits);

    const visitCounterElement = document.getElementById("visitCounter");
    if (visitCounterElement) {
        visitCounterElement.textContent = `You have visited this site ${visits} time(s).`;
    }

});