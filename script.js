// Headder 
setTimeout(() => {
    const welcome = document.getElementById('welcome-text');
    welcome.style.opacity = '0';
    setTimeout(() => {
        welcome.style.display = 'none';
    }, 200); // wait for opacity transition
}, 3000);


// Contact us 
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault(); // form submit hone se roke

    const name = document.querySelector("input[name='name']").value.trim();
    const email = document.querySelector("input[name='email']").value.trim();
    const message = document.querySelector("textarea[name='message']").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
    } else if (!email.includes("@") || !email.includes(".")) {
        alert("Please enter a valid email address.");
    } else {
        alert("Thank you, " + name + "! Your message has been sent.");
        // form reset
        document.querySelector("form").reset();
    }
});


function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
        alert("🎉 Congratulations! You’ve joined the Vibe Closet!");
    } else {
        alert("Please enter a valid Gmail address (example@gmail.com)");
    }
}