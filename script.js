// Headder 
setTimeout(() => {
    const welcome = document.getElementById("welcome-text");
    welcome.style.opacity = '0';
    setTimeout(() => {
        welcome.style.display = 'none';
    }, 200); // wait for opacity transition
}, 2500);

// Contact us 
addEventListener("submit", function (e) {
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

// Subscription add 
function validateEmail() {
    const email = document.getElementById("emailInput").value;
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (gmailRegex.test(email)) {
        alert("🎉 Congratulations! You’ve joined the Vibe Closet!");
    } else {
        alert("Please enter a valid Gmail address (example@gmail.com)");
    }
}


// Sercive 
function addToCart(button) {
    //Image aur name
    const card = button.closest('.product-card');
    const image = card.querySelector("img").getAttribute('src');
    const name = card.querySelector("h3").innerText;
    const price = card.querySelector("p").innerText;

    const item = { image, name, price };

    // Get existing cart 
    let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    // add new item   
    cartItems.push(item);

    // Save back to localStorage 
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // Go to cart page 
    // window.location.href = "cart.html";
    // object store 
    // const item = { image: img, name: name, price: price };
    // localStorage.setItem("cartItem", JSON.stringify(item));

    // cart page 
    // window.location.href = "cart.html";
    // console.log("item saved to cart:", item);
}

// Cart 