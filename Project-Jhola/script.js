// 1. PRODUCT DATA
const products = [
    { id: 1, name: "Wireless Headphones", price: 2500, image: "https://via.placeholder.com/150" },
    { id: 2, name: "Gaming Mouse", price: 1200, image: "https://via.placeholder.com/150" },
    { id: 3, name: "Mechanical Keyboard", price: 4500, image: "https://via.placeholder.com/150" }
];

// 2. DISPLAY PRODUCTS
// Function to generate the HTML for the shop
function displayProducts() {
    const container = document.getElementById("container");
    
    // Clear the "Loading products..." text seen in your screenshot
    container.innerHTML = ""; 

    products.forEach((product) => {
        // CONCEPT A: Use <article> for self-contained content [cite: 48]
        const card = document.createElement("article"); 
        card.classList.add("product-card");
        card.innerHTML = `
            <figure style="margin:0; padding:0;">
                <img src="${product.image}" alt="${product.name}" style="width:100%">
                
                <figcaption style="font-size: 0.8rem; color: #777; margin-top: 5px;">
                    Best Seller
                </figcaption>
            </figure>
            
            <h3>${product.name}</h3>
            <p>Rs. ${product.price}</p>
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        
        
        container.appendChild(card);
    });
}

// 3. CART LOGIC (With Web Storage)
function addToCart(name, price) {
    // Get existing cart or create a new one
    let cart = JSON.parse(localStorage.getItem("myCart")) || [];

    // Add new item
    cart.push({ name, price });

    // Save back to Web Storage
    localStorage.setItem("myCart", JSON.stringify(cart));

    // Show feedback
    alert(name + " added to cart!");
    
    // Update the table immediately so you see the item!
    updateCartTable(); 
}

// 4. UPDATE TABLE FUNCTION
function updateCartTable() {
    const tbody = document.getElementById("cart-items");
    let cart = JSON.parse(localStorage.getItem("myCart")) || [];
    
    tbody.innerHTML = ""; // Clear current table so we don't list duplicates

    cart.forEach((item) => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>1</td>
            <td>${item.price}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

// --- INITIALIZE THE SHOP ---
displayProducts();  // Load the products on screen
updateCartTable();  // Load the cart from storage (if any items exist)

// PART 5: Form Validation (From PDF: "Practical Example: Form Validation")
function validateForm() {
    // 1. Retrieval: Get the input element (PDF Concept)
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const msgField = document.getElementById("comments");

    // 2. Logic: Check if fields are empty (PDF Concept)
    if (nameField.value === "" || emailField.value === "" || msgField.value === "") {
        // 3. Feedback: Alert the user (PDF Concept)
        alert("Please fill in all fields before sending!");
    } else {
        alert("Thank you, " + nameField.value + "! We have received your message.");
        // Optional: Clear the form after sending
        nameField.value = "";
        emailField.value = "";
        msgField.value = "";
    }
}