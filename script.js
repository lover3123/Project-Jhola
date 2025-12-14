/* * JHOLA SHOP APPLICATION
 * Updated with Function Concepts: Arrow, Parameterized, & Helper Functions
 */

const app = {
    products: [
        { id: 1, name: "Wireless Headphones", price: 3500, category: "Audio", inStock: true, image: "https://via.placeholder.com/250x200?text=Headphones" },
        { id: 2, name: "Gaming Mouse", price: 1200, category: "Accessories", inStock: true, image: "https://via.placeholder.com/250x200?text=Mouse" },
        { id: 3, name: "Mechanical Keyboard", price: 4500, category: "Accessories", inStock: false, image: "https://via.placeholder.com/250x200?text=Keyboard" },
        { id: 4, name: "USB-C Hub", price: 2000, category: "Accessories", inStock: true, image: "https://via.placeholder.com/250x200?text=USB+Hub" },
        { id: 5, name: "Laptop Stand", price: 1500, category: "Furniture", inStock: true, image: "https://via.placeholder.com/250x200?text=Stand" },
        { id: 6, name: "Webcam 1080p", price: 3200, category: "Electronics", inStock: true, image: "https://via.placeholder.com/250x200?text=Webcam" }
    ],
    
    cart: [],

    // --- NEW: ARROW FUNCTION [cite: 1917, 1922] ---
    // A concise function to format money consistently.
    // Example: 3500 -> "Rs. 3,500"
    formatCurrency: (amount) => {
        return "Rs. " + amount.toLocaleString(); 
    },

    // --- NEW: PARAMETERIZED FUNCTION [cite: 1856, 1871] ---
    // Takes a price and a tax rate, returns the tax amount.
    calculateTax: function(amount, taxRate) {
        return amount * taxRate;
    },

    init: function() {
        this.displayProducts("All"); 
        this.setupFilters();         
        console.log("Jhola Shop Initialized");
    },

    setupFilters: function() {
        const categories = ["All", ...new Set(this.products.map(p => p.category))];
        const filterContainer = document.getElementById("filter-buttons");
        if(!filterContainer) return; 

        filterContainer.innerHTML = "";
        
        categories.forEach(cat => {
            const btn = document.createElement("button");
            btn.textContent = cat;
            // Using Arrow Function callback
            btn.onclick = () => this.displayProducts(cat);
            filterContainer.appendChild(btn);
        });
    },

    displayProducts: function(filterCategory) {
        const container = document.getElementById("container");
        container.innerHTML = ""; 

        const filteredList = filterCategory === "All" 
            ? this.products 
            : this.products.filter(p => p.category === filterCategory);
        
        // Loop Optimization
        const len = filteredList.length;

        for (let i = 0; i < len; i++) {
            const product = filteredList[i];
            const card = document.createElement("article");
            card.classList.add("product-card");

            const oldPrice = product.price + 500; 
            const buttonState = product.inStock ? "" : "disabled";
            const buttonText = product.inStock ? "Add to Cart" : "Out of Stock";
            const buttonColor = product.inStock ? "" : "background-color: #ccc; cursor: not-allowed;";

            card.innerHTML = `
                <figure>
                    <img src="${product.image}" alt="${product.name}">
                    <figcaption style="font-size:0.8rem; color:#777; margin-top:5px;">
                        ${product.category}
                    </figcaption>
                </figure>
                <h3>${product.name}</h3>
                <p>
                    <span class="old-price">${this.formatCurrency(oldPrice)}</span>
                    <strong>${this.formatCurrency(product.price)}</strong>
                </p>
                <button 
                    onclick="app.addToCart(${product.id})" 
                    ${buttonState} 
                    style="${buttonColor}"
                >
                    ${buttonText}
                </button>
            `;

            container.appendChild(card);
        }
    },

    addToCart: function(productId) {
        const product = this.products.find(p => p.id === productId);
        if (product && product.inStock) {
            this.cart.push(product);
            this.updateCartDisplay();
            // Optional: You could use a toast notification here instead of alert
        }
    },

    removeFromCart: function(index) {
        this.cart.splice(index, 1);
        this.updateCartDisplay();
    },

    updateCartDisplay: function() {
        const cartTableBody = document.getElementById("cart-items");
        cartTableBody.innerHTML = "";

        let subTotal = 0;
        const len = this.cart.length;

        for (let i = 0; i < len; i++) {
            const item = this.cart[i];
            subTotal += item.price;
            
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.name}</td>
                <td>1</td>
                <td>${this.formatCurrency(item.price)}</td>
                <td>
                    <button class="remove-btn" onclick="app.removeFromCart(${i})">Remove</button>
                </td>
            `;
            cartTableBody.appendChild(row);
        }

        // --- NEW LOGIC: Calculate Tax & Total ---
        if (this.cart.length > 0) {
            // Using our PARAMETERIZED FUNCTION (13% Tax)
            const taxAmount = this.calculateTax(subTotal, 0.13); 
            const grandTotal = subTotal + taxAmount;

            // Row 1: Subtotal
            const subRow = document.createElement("tr");
            subRow.innerHTML = `<td colspan="2" style="text-align:right;">Subtotal:</td><td colspan="2">${this.formatCurrency(subTotal)}</td>`;
            
            // Row 2: Tax
            const taxRow = document.createElement("tr");
            taxRow.innerHTML = `<td colspan="2" style="text-align:right;">Tax (13%):</td><td colspan="2">${this.formatCurrency(taxAmount)}</td>`;

            // Row 3: Grand Total
            const totalRow = document.createElement("tr");
            totalRow.classList.add("total-row");
            totalRow.style.fontWeight = "bold";
            totalRow.innerHTML = `
                <td colspan="2" style="text-align:right;">Grand Total:</td>
                <td colspan="2">${this.formatCurrency(grandTotal)}</td>
            `;

            cartTableBody.appendChild(subRow);
            cartTableBody.appendChild(taxRow);
            cartTableBody.appendChild(totalRow);
        }
    },

    validateForm: function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        if (name === "" || email === "") {
            alert("Please fill in required fields.");
            return;
        }
        alert(`Thank you, ${name}!`);
        document.querySelector("form").reset();
    }
};

// --- NEW: IIFE (Immediately Invoked Function Expression)  ---
// This runs automatically to start the app, keeping the global scope clean.
(function() {
    app.init();
})();