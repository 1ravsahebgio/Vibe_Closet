
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

    // Save back to localStorage me save hoga
    localStorage.setItem("cartItems", JSON.stringify(cartItems));


}



// Input Filter Search Product's

const inputValue = document.getElementById("inputValue");
let productGrid = document.querySelector(".product-grid");
let productCards = Array.from(document.getElementsByClassName("product-card"));
const textShow = document.getElementById("textShow");

const originalOrder = productCards.slice();

inputValue.addEventListener("input", function () {
    const text = this.value.toLowerCase();
    const matching = [];

    productCards.forEach(card => {
        let h3 = card.querySelector("h3");
        if (h3 && h3.textContent.toLowerCase().includes(text)) {
            productGrid.prepend(card); // move matching card starting me jayengi
            matching.push(h3.textContent);
        }
    });

    // Clear purane old message
    textShow.innerHTML = "";

    // ✅ Show message input
    if (text === "") {
        textShow.innerText = "";

        originalOrder.forEach(card => productGrid.appendChild(card));
        return;

    } else if (matching.length === 0) {
        textShow.innerText = "❌ No match found";
        textShow.style.color = "red";
    } else {
        // Sirf pehle 3 matches show karega ye. 
        const topMatches = matching.slice(0, 2);
        textShow.innerHTML = `<p>${topMatches.join(" <br> ")}</p>`;
        textShow.style.color = "black";
    }

}); 