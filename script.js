/* 
 * JHOLA TERMINAL SHOP APPLICATION - HACKCAT EDITION
 * Retro Cyberpunk E-Commerce Experience
 */

const app = {
    // Comprehensive Product Catalog with Rarity, XP, Coins
    products: [
        // === ELECTRONICS ===
        { id: 1, name: "Neon Gaming Headset", price: 4500, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop", description: "Premium wireless headset with RGB lighting and noise cancellation", rarity: "rare", xp: 45, coins: 15, rating: 4.8, reviews: 124, discount: 10 },
        { id: 2, name: "Cyber Mechanical Keyboard", price: 6800, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=300&fit=crop", description: "Cherry MX switches with customizable RGB per-key lighting", rarity: "epic", xp: 68, coins: 25, rating: 4.9, reviews: 89, discount: 0 },
        { id: 3, name: "Quantum Mouse Pro", price: 2200, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=300&fit=crop", description: "16000 DPI optical sensor with programmable buttons", rarity: "common", xp: 22, coins: 8, rating: 4.5, reviews: 256, discount: 15 },
        { id: 4, name: "USB-C Hub 7-in-1", price: 2800, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=400&h=300&fit=crop", description: "HDMI, USB 3.0, SD/TF card reader, 100W PD charging", rarity: "common", xp: 28, coins: 10, rating: 4.6, reviews: 178, discount: 0 },
        { id: 5, name: "4K Webcam Ultra", price: 5500, category: "Electronics", inStock: false, image: "https://images.unsplash.com/photo-1588167056675-12aed122bb23?w=400&h=300&fit=crop", description: "4K resolution at 30fps with auto-focus and dual mic", rarity: "rare", xp: 55, coins: 20, rating: 4.7, reviews: 92, discount: 0 },
        { id: 6, name: "Portable SSD 1TB", price: 8900, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1628135899478-4407734b2450?w=400&h=300&fit=crop", description: "Ultra-fast NVMe SSD with USB 3.2 Gen 2 interface", rarity: "epic", xp: 89, coins: 30, rating: 4.9, reviews: 67, discount: 5 },
        { id: 7, name: "Wireless Charger Pad", price: 1200, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1616349798282-8e1c0b2c0a2e?w=400&h=300&fit=crop", description: "15W fast wireless charging for Qi-enabled devices", rarity: "common", xp: 12, coins: 5, rating: 4.3, reviews: 312, discount: 20 },
        { id: 8, name: "Smart Watch Elite", price: 12500, category: "Electronics", inStock: true, image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=300&fit=crop", description: "AMOLED display, heart rate monitor, GPS, 7-day battery", rarity: "legendary", xp: 125, coins: 50, rating: 4.8, reviews: 145, discount: 0 },
        
        // === FASHION ===
        { id: 9, name: "Cyber Hoodie Black", price: 3200, category: "Fashion", inStock: true, image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=300&fit=crop", description: "Oversized fit with reflective logo details", rarity: "rare", xp: 32, coins: 12, rating: 4.7, reviews: 203, discount: 0 },
        { id: 10, name: "Pixel Art T-Shirt", price: 1500, category: "Fashion", inStock: true, image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=300&fit=crop", description: "100% cotton with retro 8-bit graphic print", rarity: "common", xp: 15, coins: 6, rating: 4.4, reviews: 445, discount: 10 },
        { id: 11, name: "Tech Cargo Pants", price: 4800, category: "Fashion", inStock: true, image: "https://images.unsplash.com/photo-1552160753-117159d741fc?w=400&h=300&fit=crop", description: "Water-resistant with multiple utility pockets", rarity: "rare", xp: 48, coins: 18, rating: 4.6, reviews: 167, discount: 0 },
        { id: 12, name: "LED Sneakers", price: 5600, category: "Fashion", inStock: false, image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=300&fit=crop", description: "Light-up soles with USB rechargeable battery", rarity: "epic", xp: 56, coins: 22, rating: 4.5, reviews: 98, discount: 15 },
        { id: 13, name: "Beanie Hacker Cap", price: 800, category: "Fashion", inStock: true, image: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400&h=300&fit=crop", description: "Acrylic knit with embroidered terminal logo", rarity: "common", xp: 8, coins: 3, rating: 4.2, reviews: 521, discount: 0 },
        { id: 14, name: "Denim Jacket Retro", price: 6200, category: "Fashion", inStock: true, image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&h=300&fit=crop", description: "Vintage wash with custom patches included", rarity: "rare", xp: 62, coins: 24, rating: 4.8, reviews: 134, discount: 0 },
        
        // === ACCESSORIES ===
        { id: 15, name: "RGB Mouse Pad XL", price: 1800, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1615663245857-acda5b2b7618?w=400&h=300&fit=crop", description: "Extended size with 16.8M color RGB lighting", rarity: "common", xp: 18, coins: 7, rating: 4.6, reviews: 289, discount: 0 },
        { id: 16, name: "Laptop Stand Aluminum", price: 2400, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=300&fit=crop", description: "Ergonomic design with heat dissipation", rarity: "common", xp: 24, coins: 9, rating: 4.7, reviews: 356, discount: 5 },
        { id: 17, name: "Cable Management Kit", price: 600, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1629815034250-0e0e6c4d8c2a?w=400&h=300&fit=crop", description: "Complete set of clips, sleeves, and ties", rarity: "common", xp: 6, coins: 2, rating: 4.3, reviews: 678, discount: 0 },
        { id: 18, name: "Monitor Light Bar", price: 3800, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1632515904960-3e9e1e0c8a5d?w=400&h=300&fit=crop", description: "Auto-dimming LED bar with remote control", rarity: "rare", xp: 38, coins: 14, rating: 4.8, reviews: 112, discount: 0 },
        { id: 19, name: "Desk Organizer Set", price: 1400, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop", description: "Minimalist design with pen holder and tray", rarity: "common", xp: 14, coins: 5, rating: 4.4, reviews: 234, discount: 10 },
        { id: 20, name: "Bluetooth Speaker Mini", price: 2100, category: "Accessories", inStock: true, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=300&fit=crop", description: "Portable speaker with 12-hour battery life", rarity: "common", xp: 21, coins: 8, rating: 4.5, reviews: 445, discount: 0 },
        
        // === GAMING ===
        { id: 21, name: "Gaming Chair Pro", price: 18500, category: "Gaming", inStock: true, image: "https://images.unsplash.com/photo-1598550476439-68477a568c74?w=400&h=300&fit=crop", description: "Ergonomic with lumbar support and recline function", rarity: "legendary", xp: 185, coins: 75, rating: 4.9, reviews: 78, discount: 0 },
        { id: 22, name: "Controller Elite", price: 5200, category: "Gaming", inStock: true, image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=400&h=300&fit=crop", description: "Customizable paddles and trigger stops", rarity: "epic", xp: 52, coins: 20, rating: 4.7, reviews: 156, discount: 0 },
        { id: 23, name: "VR Headset Air", price: 24000, category: "Gaming", inStock: false, image: "https://images.unsplash.com/photo-1622979135225-d2ba269fb1bd?w=400&h=300&fit=crop", description: "Standalone VR with 128GB storage", rarity: "legendary", xp: 240, coins: 100, rating: 4.8, reviews: 45, discount: 0 },
        { id: 24, name: "Racing Wheel Set", price: 15800, category: "Gaming", inStock: true, image: "https://images.unsplash.com/photo-1593305841991-05c29736f87e?w=400&h=300&fit=crop", description: "Force feedback wheel with pedal set", rarity: "epic", xp: 158, coins: 65, rating: 4.6, reviews: 34, discount: 10 },
        { id: 25, name: "Gaming Glasses Blue Cut", price: 1800, category: "Gaming", inStock: true, image: "https://images.unsplash.com/photo-1577245423800-5d2947f7a8f6?w=400&h=300&fit=crop", description: "Anti-blue light with UV protection", rarity: "common", xp: 18, coins: 7, rating: 4.4, reviews: 267, discount: 0 },
        
        // === BOOKS ===
        { id: 26, name: "Clean Code Book", price: 2200, category: "Books", inStock: true, image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=300&fit=crop", description: "A handbook of agile software craftsmanship", rarity: "rare", xp: 22, coins: 8, rating: 4.9, reviews: 892, discount: 0 },
        { id: 27, name: "Design Patterns", price: 2800, category: "Books", inStock: true, image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop", description: "Elements of reusable object-oriented software", rarity: "rare", xp: 28, coins: 10, rating: 4.8, reviews: 567, discount: 5 },
        { id: 28, name: "The Pragmatic Programmer", price: 2500, category: "Books", inStock: true, image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=300&fit=crop", description: "Your journey to mastery", rarity: "rare", xp: 25, coins: 9, rating: 4.9, reviews: 734, discount: 0 },
        { id: 29, name: "JavaScript Guide", price: 1800, category: "Books", inStock: true, image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=400&h=300&fit=crop", description: "Comprehensive guide to modern JS", rarity: "common", xp: 18, coins: 7, rating: 4.6, reviews: 423, discount: 0 },
        { id: 30, name: "System Design Interview", price: 3200, category: "Books", inStock: true, image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop", description: "An insider's guide to system design", rarity: "epic", xp: 32, coins: 12, rating: 4.8, reviews: 289, discount: 0 },
        
        // === HOME ===
        { id: 31, name: "Smart LED Strip 5m", price: 1600, category: "Home", inStock: true, image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop", description: "WiFi controlled RGB strip with music sync", rarity: "common", xp: 16, coins: 6, rating: 4.5, reviews: 512, discount: 15 },
        { id: 32, name: "Mini Projector HD", price: 8500, category: "Home", inStock: true, image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop", description: "1080p portable projector with built-in speaker", rarity: "epic", xp: 85, coins: 35, rating: 4.6, reviews: 167, discount: 0 },
        { id: 33, name: "Air Purifier Compact", price: 6800, category: "Home", inStock: true, image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=300&fit=crop", description: "HEPA filter for rooms up to 300 sq ft", rarity: "rare", xp: 68, coins: 28, rating: 4.7, reviews: 234, discount: 0 },
        { id: 34, name: "Digital Alarm Clock", price: 1200, category: "Home", inStock: true, image: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&h=300&fit=crop", description: "LED display with temperature and USB charging", rarity: "common", xp: 12, coins: 5, rating: 4.3, reviews: 389, discount: 0 },
        { id: 35, name: "Plant Pot Smart", price: 2400, category: "Home", inStock: false, image: "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=300&fit=crop", description: "Self-watering with moisture sensor", rarity: "rare", xp: 24, coins: 9, rating: 4.4, reviews: 156, discount: 0 },
        
        // === SPORTS ===
        { id: 36, name: "Yoga Mat Premium", price: 2200, category: "Sports", inStock: true, image: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400&h=300&fit=crop", description: "Non-slip surface with alignment lines", rarity: "common", xp: 22, coins: 8, rating: 4.6, reviews: 445, discount: 0 },
        { id: 37, name: "Resistance Bands Set", price: 1400, category: "Sports", inStock: true, image: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=400&h=300&fit=crop", description: "5 levels of resistance with door anchor", rarity: "common", xp: 14, coins: 5, rating: 4.5, reviews: 567, discount: 10 },
        { id: 38, name: "Smart Jump Rope", price: 1800, category: "Sports", inStock: true, image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?w=400&h=300&fit=crop", description: "Counts calories and jumps with app sync", rarity: "common", xp: 18, coins: 7, rating: 4.4, reviews: 234, discount: 0 },
        { id: 39, name: "Foam Roller Pro", price: 1600, category: "Sports", inStock: true, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d87?w=400&h=300&fit=crop", description: "High-density foam for muscle recovery", rarity: "common", xp: 16, coins: 6, rating: 4.7, reviews: 312, discount: 0 },
        { id: 40, name: "Water Bottle Insulated", price: 1200, category: "Sports", inStock: true, image: "https://images.unsplash.com/photo-1602143407151-01114192003f?w=400&h=300&fit=crop", description: "Keeps drinks cold for 24h, hot for 12h", rarity: "common", xp: 12, coins: 5, rating: 4.6, reviews: 678, discount: 0 }
    ],
    
    // User Profile & Gamification State
    user: {
        level: 1,
        xp: 0,
        xpToNextLevel: 100,
        coins: 100,
        streak: 1,
        lastLogin: null,
        achievements: [],
        quests: [
            { id: "FIRST_PURCHASE", name: "First Purchase", description: "Complete your first order", reward: 50, completed: false },
            { id: "CART_EXPLORER", name: "Cart Explorer", description: "Add 5 items to cart", reward: 25, completed: false },
            { id: "CATEGORY_MASTER", name: "Category Master", description: "Browse all categories", reward: 30, completed: false },
            { id: "REVIEW_WRITER", name: "Review Writer", description: "Write a product review", reward: 20, completed: false },
            { id: "LOYAL_CUSTOMER", name: "Loyal Customer", description: "7-day login streak", reward: 100, completed: false }
        ],
        badges: []
    },
    
    cart: [],
    orders: [],
    wishlist: [],
    currentFilter: "All",
    currentSort: "default",
    searchQuery: "",
    viewMode: "grid", // grid or list
    currentPage: 1,
    itemsPerPage: 8,
    notifications: [],
    
    // Utility Functions
    formatCurrency: (amount) => "Rs. " + amount.toLocaleString(),
    
    calculateXP: function(basePrice) { return Math.floor(basePrice / 100); },
    calculateCoins: function(basePrice) { return Math.floor(basePrice / 200); },
    calculateTax: function(amount, taxRate) { return amount * taxRate; },
    init: function() { this.loadCartFromStorage(); this.displayProducts("All"); this.setupFilters(); this.setupSearchAndSort(); this.setupEventListeners(); this.setupNavigation(); this.updateCartBadge(); this.updateCartDisplay(); this.handleInitialLoading(); },
    setupNavigation: function() {
        const navItems = document.querySelectorAll('.terminal-nav .nav-item');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const targetId = item.getAttribute('href')?.slice(1);
                const targetSection = document.getElementById(targetId);
                if (!targetId || !targetSection) return;
                e.preventDefault();
                document.querySelectorAll('.terminal-nav .nav-item').forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                document.querySelectorAll('.terminal-section').forEach(section => section.classList.remove('active'));
                targetSection.classList.add('active');
                targetSection.scrollIntoView({ behavior: 'smooth' });
            });
        });
    },
    handleInitialLoading: function() {
        const loadingScreen = document.getElementById('loading-screen');
        const mainInterface = document.getElementById('main-interface');
        const bootLog = document.getElementById('boot-log');
        const loadingBar = document.getElementById('loading-bar');
        const steps = [
            'BOOT SECTOR CHECK... OK',
            'LOADING ASSETS... OK',
            'INITIALIZING TERMINAL... OK',
            'SYNCING MARKETPLACE... OK',
            'COMPLETE. WELCOME.'
        ];
        steps.forEach((text, index) => {
            setTimeout(() => {
                if (bootLog) {
                    const line = document.createElement('div');
                    line.className = 'boot-line';
                    line.textContent = text;
                    bootLog.appendChild(line);
                }
                if (loadingBar) {
                    loadingBar.style.width = `${((index + 1) / steps.length) * 100}%`;
                }
            }, 300 * (index + 1));
        });
        setTimeout(() => {
            if (loadingScreen) loadingScreen.classList.add('hidden');
            if (mainInterface) mainInterface.classList.remove('hidden');
        }, 300 * steps.length + 400);
    },
    setupFilters: function() { const categories = ["All", ...new Set(this.products.map(p => p.category))]; const filterContainer = document.getElementById("filter-buttons"); if(!filterContainer) return; filterContainer.innerHTML = ""; categories.forEach(cat => { const btn = document.createElement("button"); btn.textContent = cat; btn.setAttribute('aria-pressed', cat === "All" ? "true" : "false"); if (cat === "All") btn.classList.add('active'); btn.onclick = () => { document.querySelectorAll('#filter-buttons button').forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); }); btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); this.currentFilter = cat; this.displayProducts(cat); }; filterContainer.appendChild(btn); }); },
    setupSearchAndSort: function() { const searchInput = document.getElementById('search-input'); const sortSelect = document.getElementById('sort-select'); if (searchInput) { searchInput.addEventListener('input', (e) => { this.searchQuery = e.target.value.toLowerCase(); this.displayProducts(this.currentFilter); }); } if (sortSelect) { sortSelect.addEventListener('change', (e) => { this.currentSort = e.target.value; this.displayProducts(this.currentFilter); }); } },
    setupEventListeners: function() { document.querySelectorAll('.close-modal').forEach(btn => { btn.addEventListener('click', () => { this.closeModal('checkout-modal'); this.closeModal('product-modal'); }); }); window.addEventListener('click', (e) => { if (e.target.classList.contains('modal')) this.closeModal(e.target.id); }); const checkoutBtn = document.getElementById('checkout-btn'); if (checkoutBtn) checkoutBtn.addEventListener('click', () => this.openCheckout()); const clearCartBtn = document.getElementById('clear-cart-btn'); if (clearCartBtn) clearCartBtn.addEventListener('click', () => this.clearCart()); const checkoutForm = document.getElementById('checkout-form'); if (checkoutForm) checkoutForm.addEventListener('submit', (e) => this.handleCheckout(e)); const contactForm = document.getElementById('contact-form'); if (contactForm) contactForm.addEventListener('submit', (e) => this.handleContact(e)); const cartBadge = document.getElementById('cart-badge'); if (cartBadge) cartBadge.addEventListener('click', () => { document.getElementById('cart-section').scrollIntoView({ behavior: 'smooth' }); }); },
    displayProducts: function(filterCategory) { const container = document.getElementById("container"); if (!container) return; container.innerHTML = ""; let filteredList = filterCategory === "All" ? this.products : this.products.filter(p => p.category === filterCategory); if (this.searchQuery) { filteredList = filteredList.filter(p => p.name.toLowerCase().includes(this.searchQuery) || p.description.toLowerCase().includes(this.searchQuery)); } switch(this.currentSort) { case 'price-low': filteredList.sort((a, b) => a.price - b.price); break; case 'price-high': filteredList.sort((a, b) => b.price - a.price); break; case 'name-asc': filteredList.sort((a, b) => a.name.localeCompare(b.name)); break; case 'name-desc': filteredList.sort((a, b) => b.name.localeCompare(a.name)); break; } if (filteredList.length === 0) { container.innerHTML = '<p>No products found.</p>'; return; } filteredList.forEach(product => { const card = document.createElement("article"); card.classList.add("product-card"); const oldPrice = product.price + 500; const buttonState = product.inStock ? "" : "disabled"; const buttonText = product.inStock ? "Add to Cart" : "Out of Stock"; card.innerHTML = '<figure><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"><figcaption>' + product.category + '</figcaption></figure><h3>' + product.name + '</h3><div class="price-info"><span class="old-price">' + this.formatCurrency(oldPrice) + '</span><strong>' + this.formatCurrency(product.price) + '</strong></div><button class="add-to-cart-btn" data-product-id="' + product.id + '" ' + buttonState + '>' + buttonText + '</button><button class="view-details-btn" data-product-id="' + product.id + '">View Details</button>'; container.appendChild(card); }); document.querySelectorAll('.add-to-cart-btn').forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); this.addToCart(parseInt(btn.getAttribute('data-product-id'))); }); }); document.querySelectorAll('.view-details-btn').forEach(btn => { btn.addEventListener('click', (e) => { e.stopPropagation(); this.showProductDetails(parseInt(btn.getAttribute('data-product-id'))); }); }); document.querySelectorAll('.product-card').forEach(card => { card.addEventListener('click', () => { const viewBtn = card.querySelector('.view-details-btn'); if (viewBtn) this.showProductDetails(parseInt(viewBtn.getAttribute('data-product-id'))); }); }); },
    showProductDetails: function(productId) { const product = this.products.find(p => p.id === productId); if (!product) return; const modalBody = document.getElementById('product-modal-body'); const stockClass = product.inStock ? 'in-stock' : 'out-of-stock'; modalBody.innerHTML = '<img src="' + product.image + '" alt="' + product.name + '"><div class="product-modal-info"><h2>' + product.name + '</h2><p class="category">' + product.category + '</p><p class="price">' + this.formatCurrency(product.price) + '</p><span class="stock-status ' + stockClass + '">' + (product.inStock ? 'In Stock' : 'Out of Stock') + '</span><p class="description">' + product.description + '</p>' + (product.inStock ? '<button onclick="app.addToCart(' + product.id + '); app.closeModal(\'product-modal\')">Add to Cart</button>' : '') + '</div>'; this.openModal('product-modal'); },
    addToCart: function(productId) { const product = this.products.find(p => p.id === productId); if (product && product.inStock) { const existingItem = this.cart.find(item => item.id === productId); if (existingItem) existingItem.quantity++; else this.cart.push({ ...product, quantity: 1 }); this.saveCartToStorage(); this.updateCartDisplay(); this.updateCartBadge(); this.showToast('Added ' + product.name + ' to cart!', 'success'); } },
    updateQuantity: function(index, change) { if (index < 0 || index >= this.cart.length) return; this.cart[index].quantity += change; if (this.cart[index].quantity <= 0) this.removeFromCart(index); else { this.saveCartToStorage(); this.updateCartDisplay(); this.updateCartBadge(); } },
    removeFromCart: function(index) { if (index < 0 || index >= this.cart.length) return; const itemName = this.cart[index].name; this.cart.splice(index, 1); this.saveCartToStorage(); this.updateCartDisplay(); this.updateCartBadge(); this.showToast('Removed ' + itemName + ' from cart', 'info'); },
    clearCart: function() { if (this.cart.length === 0) return; if (confirm('Clear your cart?')) { this.cart = []; this.saveCartToStorage(); this.updateCartDisplay(); this.updateCartBadge(); this.showToast('Cart cleared', 'info'); } },
    updateCartDisplay: function() { const cartTableBody = document.getElementById("cart-items"); const cartTotals = document.getElementById("cart-totals"); const cartEmptyMessage = document.getElementById("cart-empty-message"); const cartContent = document.getElementById("cart-content"); if (!cartTableBody) return; cartTableBody.innerHTML = ""; cartTotals.innerHTML = ""; if (this.cart.length === 0) { if (cartEmptyMessage) cartEmptyMessage.style.display = 'block'; if (cartContent) cartContent.style.display = 'none'; return; } if (cartEmptyMessage) cartEmptyMessage.style.display = 'none'; if (cartContent) cartContent.style.display = 'block'; let subTotal = 0; this.cart.forEach((item, index) => { const itemTotal = item.price * item.quantity; subTotal += itemTotal; const row = document.createElement("tr"); row.innerHTML = '<td>' + item.name + '</td><td>' + this.formatCurrency(item.price) + '</td><td><div class="quantity-controls"><button class="quantity-btn" onclick="app.updateQuantity(' + index + ', -1)">-</button><span class="quantity-display">' + item.quantity + '</span><button class="quantity-btn" onclick="app.updateQuantity(' + index + ', 1)">+</button></div></td><td>' + this.formatCurrency(itemTotal) + '</td><td><button class="remove-btn" onclick="app.removeFromCart(' + index + ')">Remove</button></td>'; cartTableBody.appendChild(row); }); const taxAmount = this.calculateTax(subTotal, 0.13); const grandTotal = subTotal + taxAmount; cartTotals.innerHTML = '<tr><td colspan="3" style="text-align:right;">Subtotal:</td><td colspan="2">' + this.formatCurrency(subTotal) + '</td></tr><tr><td colspan="3" style="text-align:right;">Tax (13%):</td><td colspan="2">' + this.formatCurrency(taxAmount) + '</td></tr><tr class="total-row"><td colspan="3" style="text-align:right;">Grand Total:</td><td colspan="2">' + this.formatCurrency(grandTotal) + '</td></tr>'; },
    updateCartBadge: function() { const cartCountEl = document.getElementById('cart-count'); if (cartCountEl) cartCountEl.textContent = this.cart.reduce((sum, item) => sum + item.quantity, 0); },
    saveCartToStorage: function() { try { localStorage.setItem('jholaCart', JSON.stringify(this.cart)); } catch(e) {} },
    loadCartFromStorage: function() { try { const saved = localStorage.getItem('jholaCart'); if(saved) this.cart = JSON.parse(saved); } catch(e) { this.cart = []; } },
    openCheckout: function() { if (this.cart.length === 0) { this.showToast('Cart is empty!', 'error'); return; } const summaryContent = document.getElementById('order-summary-content'); let summaryHTML = '', subtotal = 0; this.cart.forEach(item => { const itemTotal = item.price * item.quantity; subtotal += itemTotal; summaryHTML += '<div class="order-item"><span>' + item.name + ' x ' + item.quantity + '</span><span>' + this.formatCurrency(itemTotal) + '</span></div>'; }); summaryHTML += '<div class="order-item" style="font-weight:bold;margin-top:10px;padding-top:10px;border-top:2px solid #ddd;"><span>Total:</span><span>' + this.formatCurrency(subtotal + this.calculateTax(subtotal, 0.13)) + '</span></div>'; summaryContent.innerHTML = summaryHTML; this.openModal('checkout-modal'); },
    handleCheckout: function(e) { e.preventDefault(); const form = e.target; const formData = new FormData(form); const name = formData.get('name').trim(), email = formData.get('email').trim(); const phone = formData.get('phone').trim(), address = formData.get('address').trim(), city = formData.get('city'); if (!name || !email || !phone || !address || !city) { this.showToast('Fill all required fields', 'error'); return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { this.showToast('Invalid email', 'error'); return; } if (!/^[0-9]{10}$/.test(phone)) { this.showToast('Enter 10-digit phone', 'error'); return; } this.showToast('Processing...', 'info'); setTimeout(() => { this.cart = []; this.saveCartToStorage(); this.updateCartDisplay(); this.updateCartBadge(); this.closeModal('checkout-modal'); form.reset(); this.showToast('Order placed! ID: ORD-' + Date.now(), 'success'); window.scrollTo({ top: 0, behavior: 'smooth' }); }, 1500); },
    handleContact: function(e) { e.preventDefault(); const form = e.target, formData = new FormData(form); const name = formData.get('name').trim(), email = formData.get('email').trim(); if (!name || !email) { this.showToast('Fill required fields', 'error'); return; } if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { this.showToast('Invalid email', 'error'); return; } this.showToast('Thank you, ' + name + '!', 'success'); form.reset(); },
    openModal: function(modalId) { const modal = document.getElementById(modalId); if (modal) { modal.classList.add('show'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; } },
    closeModal: function(modalId) { const modal = document.getElementById(modalId); if (modal) { modal.classList.remove('show'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; } },
    showToast: function(message, type) { if(type===undefined)type='info'; const container = document.getElementById('toast-container'); if (!container) return; const toast = document.createElement('div'); toast.className = 'toast ' + type; const icon = type === 'success' ? '\u2713' : type === 'error' ? '\u2715' : '\u2139'; toast.innerHTML = '<span>' + icon + '</span><span>' + message + '</span>'; container.appendChild(toast); setTimeout(() => toast.remove(), 3000); }
};
(function() { if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function() { app.init(); }); else app.init(); })();
