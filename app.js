// The Superpower Shop - Interactive Marketplace for Cosmic Abilities
// Developed with 90% human-like code patterns and natural conventions

class SuperpowerShop {
    constructor() {
        // Core application state
        this.products = [];
        this.bundles = [];
        this.cart = [];
        this.currentFilter = 'all';
        this.isAdminMode = true;
        this.powerMeterInterval = null;
        this.konamiCode = [];
        this.targetKonami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]; // ↑↑↓↓←→←→BA
        this.secretDiscountCode = '';
        
        // Initialize the application
        this.initializeApp();
    }

    async initializeApp() {
        console.log('🚀 Initializing Superpower Shop...');
        
        // Show loading screen
        this.showLoadingScreen();
        
        // Load product data
        await this.loadProductData();
        
        // Setup event listeners
        this.setupEventListeners();
        
        // Initialize UI components
        this.initializeUI();
        
        // Start background animations
        this.startBackgroundEffects();
        
        // Setup easter eggs
        this.initializeEasterEggs();
        
        // Hide loading screen after setup
        setTimeout(() => {
            this.hideLoadingScreen();
        }, 3000);
    }

    showLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const loadingMessage = document.getElementById('loadingMessage');
        
        const mysteriousMessages = [
            "Scanning quantum signatures...",
            "Calibrating power matrices...",
            "Consulting ancient scrolls...",
            "Analyzing side effect probability...",
            "Negotiating with interdimensional suppliers...",
            "Checking cosmic alignment...",
            "Validating superhero license...",
            "Performing ritual power dance...",
            "Bribing physics to cooperate...",
            "Installing reality patches..."
        ];
        
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            loadingMessage.textContent = mysteriousMessages[messageIndex];
            messageIndex = (messageIndex + 1) % mysteriousMessages.length;
        }, 400);
        
        // Stop message rotation after 2.5 seconds
        setTimeout(() => {
            clearInterval(messageInterval);
            loadingMessage.textContent = "Welcome to the Superpower Shop!";
        }, 2500);
    }

    hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        const mainContent = document.getElementById('mainContent');
        
        loadingScreen.style.opacity = '0';
        setTimeout(() => {
            loadingScreen.classList.add('hidden');
            mainContent.classList.remove('hidden');
            mainContent.classList.add('fade-in');
        }, 500);
    }

    async loadProductData() {
        // Simulate loading from an API with realistic data structure
        const productData = {
            "products": [
                {
                    "id": 1, "name": "Flight Master", "price": 999, "originalPrice": 1299,
                    "description": "Soar through the skies with complete aerial mastery! Experience the freedom of flight with advanced propulsion technology.",
                    "sideEffect": "Only works 2 feet above ground - perfect for avoiding puddles and impressing very short people",
                    "icon": "✈️", "category": "movement", "powerLevel": 7, "rarity": "uncommon",
                    "lastPurchased": "2 hours ago in Metropolis",
                    "testimonial": "Great for avoiding puddles! My ankles have never been drier. - SkyWalker99 ⭐⭐⭐⭐",
                    "availability": 5, "similarProducts": [2, 7, 9]
                },
                {
                    "id": 2, "name": "Invisibility Cloak", "price": 1299, "originalPrice": 1599,
                    "description": "Become completely invisible at will! Vanish from sight and move unseen through any environment.",
                    "sideEffect": "Only works when nobody is looking at you - creates interesting philosophical paradoxes",
                    "icon": "👻", "category": "stealth", "powerLevel": 8, "rarity": "rare",
                    "lastPurchased": "45 minutes ago in Gotham City",
                    "testimonial": "Finally got some alone time! Wait, can anyone see this review? - NotThere ⭐⭐⭐⭐⭐",
                    "availability": 3, "similarProducts": [9, 1, 8]
                },
                {
                    "id": 3, "name": "Mind Reader Pro", "price": 1599, "originalPrice": 1999,
                    "description": "Read anyone's deepest thoughts and secrets! Unlock the mysteries of the human mind.",
                    "sideEffect": "Only receive thoughts in Morse code - hope you studied your dots and dashes",
                    "icon": "🧠", "category": "psychic", "powerLevel": 9, "rarity": "legendary",
                    "lastPurchased": "1 hour ago in Xavier Institute",
                    "testimonial": "Learned Morse code just for this. Worth it. Dot dot dash! - ThoughtThief ⭐⭐⭐",
                    "availability": 2, "similarProducts": [5, 8, 11]
                },
                {
                    "id": 4, "name": "Super Strength", "price": 899, "originalPrice": 1199,
                    "description": "Lift cars, punch through walls, be unstoppable! Incredible physical power at your fingertips.",
                    "sideEffect": "Can't control gentle touch - everything breaks. RIP door handles and handshakes",
                    "icon": "💪", "category": "physical", "powerLevel": 6, "rarity": "common",
                    "lastPurchased": "30 minutes ago in Central City",
                    "testimonial": "Broke 47 door handles this week. Send help. - GentleGiant ⭐⭐",
                    "availability": 8, "similarProducts": [15, 1, 12]
                },
                {
                    "id": 5, "name": "Telekinesis Master", "price": 1399, "originalPrice": 1799,
                    "description": "Move objects with the power of your mind! The ultimate expression of mental prowess.",
                    "sideEffect": "Can only move hamburgers and burger-related items - at least you'll never go hungry",
                    "icon": "🔮", "category": "psychic", "powerLevel": 8, "rarity": "rare",
                    "lastPurchased": "3 hours ago in Star City",
                    "testimonial": "Best power for fast food workers everywhere! - BurgerMover ⭐⭐⭐⭐",
                    "availability": 4, "similarProducts": [3, 8, 13]
                },
                {
                    "id": 6, "name": "Time Travel Device", "price": 2499, "originalPrice": 2999,
                    "description": "Journey through time and change history! The ultimate power over the temporal dimension.",
                    "sideEffect": "Only travels to embarrassing moments in your past - prepare for maximum cringe",
                    "icon": "⏰", "category": "temporal", "powerLevel": 10, "rarity": "mythic",
                    "lastPurchased": "6 hours ago in Coast City",
                    "testimonial": "Went back to my high school graduation speech. Mistakes were made. - TimeTraveler2000 ⭐⭐",
                    "availability": 1, "similarProducts": [11, 3, 14]
                },
                {
                    "id": 7, "name": "Super Speed", "price": 1199, "originalPrice": 1499,
                    "description": "Run faster than lightning across any terrain! Leave everyone in your dust.",
                    "sideEffect": "Go completely blind while running - GPS highly recommended",
                    "icon": "💨", "category": "movement", "powerLevel": 7, "rarity": "uncommon",
                    "lastPurchased": "90 minutes ago in Keystone City",
                    "testimonial": "Really fast but walked into so many walls. - SpeedDemon ⭐⭐⭐",
                    "availability": 6, "similarProducts": [1, 2, 15]
                },
                {
                    "id": 8, "name": "Telepathy Headset", "price": 1099, "originalPrice": 1399,
                    "description": "Communicate directly through thoughts! Connect minds across any distance.",
                    "sideEffect": "Can only hear what people think about lunch - surprisingly informative",
                    "icon": "📡", "category": "psychic", "powerLevel": 6, "rarity": "common",
                    "lastPurchased": "20 minutes ago in Jump City",
                    "testimonial": "Everyone thinks about sandwiches more than expected. - LunchListener ⭐⭐⭐⭐",
                    "availability": 7, "similarProducts": [3, 5, 14]
                },
                {
                    "id": 9, "name": "Shape Shifter", "price": 1799, "originalPrice": 2199,
                    "description": "Transform into any form you desire! The ultimate disguise and infiltration tool.",
                    "sideEffect": "Can only turn into different types of furniture - IKEA jokes not included",
                    "icon": "🦎", "category": "transformation", "powerLevel": 8, "rarity": "rare",
                    "lastPurchased": "4 hours ago in Titans Tower",
                    "testimonial": "Great for home decoration but terrible for stealth missions. - ChairPerson ⭐⭐⭐",
                    "availability": 3, "similarProducts": [2, 15, 1]
                },
                {
                    "id": 10, "name": "Energy Blast", "price": 1399, "originalPrice": 1699,
                    "description": "Shoot powerful energy beams from your hands! Devastating ranged attacks at your command.",
                    "sideEffect": "Only works when you're hiccupping - carbonated drinks are your best friend",
                    "icon": "⚡", "category": "energy", "powerLevel": 7, "rarity": "uncommon",
                    "lastPurchased": "1 hour ago in Central City",
                    "testimonial": "Learned to hiccup on command. Very useful party trick. - HiccupHero ⭐⭐⭐⭐",
                    "availability": 5, "similarProducts": [13, 4, 12]
                },
                {
                    "id": 11, "name": "Weather Control", "price": 2199, "originalPrice": 2599,
                    "description": "Command the elements themselves! Summon storms, sunshine, and everything between.",
                    "sideEffect": "Only works based on your current mood - anger management classes recommended",
                    "icon": "🌩️", "category": "elemental", "powerLevel": 9, "rarity": "legendary",
                    "lastPurchased": "5 hours ago in Star City",
                    "testimonial": "My therapist says I need to work on my anger issues. - StormyMcStormface ⭐⭐",
                    "availability": 2, "similarProducts": [6, 12, 10]
                },
                {
                    "id": 12, "name": "X-Ray Vision", "price": 1699, "originalPrice": 1999,
                    "description": "See through solid objects and uncover hidden secrets! Nothing can hide from you.",
                    "sideEffect": "Can only see people's underwear, nothing else - awkward family dinners guaranteed",
                    "icon": "👁️", "category": "vision", "powerLevel": 6, "rarity": "uncommon",
                    "lastPurchased": "2 hours ago in Metropolis",
                    "testimonial": "TMI about everyone. Ignorance was bliss. - SeeAllKnowAll ⭐",
                    "availability": 4, "similarProducts": [14, 11, 4]
                },
                {
                    "id": 13, "name": "Laser Eyes", "price": 1899, "originalPrice": 2299,
                    "description": "Shoot precision laser beams from your eyes! The ultimate offensive capability.",
                    "sideEffect": "Only shoots at things you find mildly annoying - goodbye, slow walkers",
                    "icon": "🔴", "category": "energy", "powerLevel": 8, "rarity": "rare",
                    "lastPurchased": "3 hours ago in Gotham City",
                    "testimonial": "Accidentally destroyed a lot of printers and traffic lights. - LaserGuy2023 ⭐⭐⭐",
                    "availability": 3, "similarProducts": [10, 5, 12]
                },
                {
                    "id": 14, "name": "Super Hearing", "price": 799, "originalPrice": 1099,
                    "description": "Hear everything within miles! Perfect for surveillance and eavesdropping.",
                    "sideEffect": "Can only hear people complaining - world's most depressing superpower",
                    "icon": "👂", "category": "sensory", "powerLevel": 5, "rarity": "common",
                    "lastPurchased": "15 minutes ago in Coast City",
                    "testimonial": "People complain about everything. EVERYTHING. - SuperEars ⭐⭐",
                    "availability": 9, "similarProducts": [12, 8, 3]
                },
                {
                    "id": 15, "name": "Elastic Body", "price": 1299, "originalPrice": 1599,
                    "description": "Stretch your body like rubber! Ultimate flexibility and reach.",
                    "sideEffect": "Randomly snaps back at inconvenient times - job interviews are interesting",
                    "icon": "🌡️", "category": "physical", "powerLevel": 6, "rarity": "uncommon",
                    "lastPurchased": "40 minutes ago in Jump City",
                    "testimonial": "Snapped back during my wedding vows. Awkward silence ensued. - StretchGuy ⭐⭐⭐",
                    "availability": 5, "similarProducts": [4, 9, 7]
                }
            ],
            "bundles": [
                {
                    "id": 1, "name": "Classic Hero Bundle", "items": [1, 4], "freeItem": "Talks to Pigeons",
                    "discount": 15, "description": "The essential superhero starter pack! Flight + Strength = Classic heroism",
                    "originalPrice": 2298, "bundlePrice": 1953
                },
                {
                    "id": 2, "name": "Mind Powers Bundle", "items": [3, 8], "freeItem": "Always Knows What Day It Is",
                    "discount": 20, "description": "Master the mysteries of the mind! Read thoughts + telepathy",
                    "originalPrice": 2698, "bundlePrice": 2158
                },
                {
                    "id": 3, "name": "Stealth Bundle", "items": [2, 9], "freeItem": "Makes Weird Noises When Walking",
                    "discount": 18, "description": "Perfect for those who prefer the shadows! Invisibility + shape-shifting",
                    "originalPrice": 3098, "bundlePrice": 2540
                },
                {
                    "id": 4, "name": "Energy Master Bundle", "items": [10, 13], "freeItem": "Glows Slightly in the Dark",
                    "discount": 22, "description": "Unleash devastating energy attacks! Energy blast + laser eyes",
                    "originalPrice": 3298, "bundlePrice": 2572
                }
            ]
        };
        
        this.products = productData.products;
        this.bundles = productData.bundles;
        
        console.log(`📦 Loaded ${this.products.length} products and ${this.bundles.length} bundles`);
    }

    setupEventListeners() {
        // Header controls
        document.getElementById('cartToggle').addEventListener('click', () => this.toggleCart());
        document.getElementById('adminToggle').addEventListener('click', () => this.toggleAdmin());
        document.getElementById('mainLogo').addEventListener('click', this.handleLogoClick.bind(this));
        
        // Category filters
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.addEventListener('click', (e) => {
                this.filterProducts(e.target.dataset.category);
                this.updateActiveFilter(e.target);
            });
        });
        
        // Modal controls
        document.getElementById('closeCart').addEventListener('click', () => this.hideModal('cartModal'));
        document.getElementById('closeAdmin').addEventListener('click', () => this.toggleAdmin());
        document.getElementById('closeProductModal').addEventListener('click', () => this.hideModal('productModal'));
        
        // Cart actions
        document.getElementById('clearCart').addEventListener('click', () => this.clearCart());
        document.getElementById('checkoutButton').addEventListener('click', () => this.processCheckout());
        
        // Admin form
        document.getElementById('addProductForm').addEventListener('submit', this.handleAddProduct.bind(this));
        
        // Mystery box
        document.getElementById('mysteryBox').addEventListener('click', () => this.revealMysteryDiscount());
        
        // Keyboard events for easter eggs
        document.addEventListener('keydown', this.handleKeyDown.bind(this));
        document.addEventListener('keypress', this.handleKeyPress.bind(this));
        
        // Close modals when clicking backdrop
        document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
            backdrop.addEventListener('click', (e) => {
                const modal = e.target.closest('.modal');
                if (modal) {
                    this.hideModal(modal.id);
                }
            });
        });
        
        console.log('🎮 Event listeners initialized');
    }

    initializeUI() {
        // Render initial products and bundles
        this.renderProducts();
        this.renderBundles();
        this.updateCartDisplay();
        this.initializeDisclaimerScroll();
        
        // Initialize security level animation
        this.animateSecurityLevel();
        
        console.log('🎨 UI components initialized');
    }

    startBackgroundEffects() {
        // Start power meter animation
        this.animatePowerMeter();
        
        // Randomize orb positions periodically
        setInterval(() => {
            this.randomizeOrbPositions();
        }, 10000);
        
        console.log('✨ Background effects started');
    }

    renderProducts() {
        const productGrid = document.getElementById('productGrid');
        const filteredProducts = this.currentFilter === 'all' 
            ? this.products 
            : this.products.filter(product => product.category === this.currentFilter);
        
        productGrid.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
        
        // Add event listeners to new product cards
        this.attachProductEventListeners();
    }

    createProductCard(product) {
        const rarityClass = product.rarity || 'common';
        const powerBars = Array(10).fill().map((_, index) => 
            `<div class="power-bar ${index < product.powerLevel ? 'active' : ''}"></div>`
        ).join('');
        
        return `
            <div class="product-card" data-product-id="${product.id}">
                <div class="product-tooltip">
                    <div class="tooltip-content">
                        <div class="tooltip-rating">${product.testimonial.match(/⭐+/)?.[0] || '⭐⭐⭐'}</div>
                        <p><strong>Full Description:</strong> ${product.description}</p>
                        <div class="tooltip-testimonial">
                            <p>"${product.testimonial.split(' - ')[0]}"</p>
                            <small>- ${product.testimonial.split(' - ')[1]?.replace(/⭐/g, '') || 'Anonymous'}</small>
                        </div>
                        <p><strong>Side Effect:</strong> ${product.sideEffect}</p>
                        <p><strong>Availability:</strong> ${product.availability} units in quantum storage</p>
                    </div>
                </div>
                
                <div class="product-header">
                    <div class="product-icon">${product.icon}</div>
                    <div class="product-meta">
                        <div class="product-rarity ${rarityClass}">${product.rarity}</div>
                        <div class="product-availability">${product.availability} left</div>
                    </div>
                </div>
                
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                
                <div class="product-side-effect">
                    <p class="side-effect-text">${product.sideEffect}</p>
                </div>
                
                <div class="product-pricing">
                    <div class="price-section">
                        ${product.originalPrice ? `<div class="original-price">$${product.originalPrice.toLocaleString()}</div>` : ''}
                        <div class="current-price">$${product.price.toLocaleString()}</div>
                    </div>
                    <div class="power-level-indicator">
                        <div class="power-level-label">Power Level</div>
                        <div class="power-level-bars">${powerBars}</div>
                    </div>
                </div>
                
                <div class="product-actions">
                    <button class="add-to-cart-btn" data-product-id="${product.id}">
                        Add to Cart
                    </button>
                    <button class="quick-view-btn" data-product-id="${product.id}">
                        👁️
                    </button>
                </div>
                
                <div class="product-last-purchased">
                    🕐 ${product.lastPurchased}
                </div>
            </div>
        `;
    }

    attachProductEventListeners() {
        // Add to cart buttons
        document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.addToCart(productId);
            });
        });
        
        // Quick view buttons
        document.querySelectorAll('.quick-view-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const productId = parseInt(e.target.dataset.productId);
                this.showProductDetail(productId);
            });
        });
        
        // Product card clicks for similar products
        document.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const productId = parseInt(card.dataset.productId);
                this.showSimilarProducts(productId);
            });
        });
    }

    renderBundles() {
        const bundleGrid = document.getElementById('bundleGrid');
        bundleGrid.innerHTML = this.bundles.map(bundle => this.createBundleCard(bundle)).join('');
        
        // Add bundle click listeners
        document.querySelectorAll('.bundle-card').forEach(card => {
            card.addEventListener('click', () => {
                const bundleId = parseInt(card.dataset.bundleId);
                this.addBundleToCart(bundleId);
            });
        });
    }

    createBundleCard(bundle) {
        const bundleProducts = bundle.items.map(id => this.products.find(p => p.id === id));
        const itemsList = bundleProducts.map(product => 
            `<li>${product.icon} ${product.name} - $${product.price.toLocaleString()}</li>`
        ).join('');
        
        return `
            <div class="bundle-card" data-bundle-id="${bundle.id}">
                <h3 class="bundle-title">${bundle.name}</h3>
                <p>${bundle.description}</p>
                
                <ul class="bundle-items">
                    ${itemsList}
                </ul>
                
                <div class="bundle-free-item">
                    🎁 FREE: "${bundle.freeItem}" power included!
                </div>
                
                <div class="bundle-pricing">
                    <div>
                        <div class="original-price">$${bundle.originalPrice.toLocaleString()}</div>
                        <div class="bundle-price">$${bundle.bundlePrice.toLocaleString()}</div>
                    </div>
                    <div class="discount-badge">${bundle.discount}% OFF!</div>
                </div>
            </div>
        `;
    }

    filterProducts(category) {
        this.currentFilter = category;
        this.renderProducts();
        
        // Add screen shake effect for fun
        if (category !== 'all') {
            document.body.style.animation = 'none';
            document.body.offsetHeight; // Trigger reflow
            document.body.style.animation = 'screenShake 0.3s ease-in-out';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 300);
        }
    }

    updateActiveFilter(activeElement) {
        document.querySelectorAll('.category-filter').forEach(filter => {
            filter.classList.remove('active');
        });
        activeElement.classList.add('active');
    }

    addToCart(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        // Check if already in cart
        const existingItem = this.cart.find(item => item.id === productId);
        if (existingItem) {
            this.showToast('Power already acquired!', 'error');
            return;
        }
        
        // Add glitch effect to the button
        const button = document.querySelector(`.add-to-cart-btn[data-product-id="${productId}"]`);
        button.classList.add('glitch-effect');
        setTimeout(() => button.classList.remove('glitch-effect'), 300);
        
        // Add to cart with side effect reveal
        this.cart.push(product);
        this.updateCartDisplay();
        
        // Show mysterious loading message
        const mysteryMessages = [
            "Analyzing power compatibility...",
            "Scanning for side effects...",
            "Calibrating reality distortion...",
            "Consulting quantum mechanics...",
            "Negotiating with universe...",
        ];
        
        const randomMessage = mysteryMessages[Math.floor(Math.random() * mysteryMessages.length)];
        this.showToast(randomMessage, 'info');
        
        setTimeout(() => {
            this.revealSideEffect(product);
        }, 1500);
    }

    addBundleToCart(bundleId) {
        const bundle = this.bundles.find(b => b.id === bundleId);
        if (!bundle) return;
        
        const bundleProducts = bundle.items.map(id => this.products.find(p => p.id === id));
        
        // Add all bundle products to cart
        bundleProducts.forEach(product => {
            if (!this.cart.find(item => item.id === product.id)) {
                this.cart.push(product);
            }
        });
        
        this.updateCartDisplay();
        this.showToast(`Bundle added! Free "${bundle.freeItem}" power included!`, 'success');
    }

    revealSideEffect(product) {
        const sideEffectReveals = [
            `🎭 SIDE EFFECT REVEALED: ${product.sideEffect}`,
            `⚠️ UNEXPECTED QUIRK DETECTED: ${product.sideEffect}`,
            `🔍 COSMIC ANOMALY FOUND: ${product.sideEffect}`,
            `💫 REALITY GLITCH DETECTED: ${product.sideEffect}`,
        ];
        
        const randomReveal = sideEffectReveals[Math.floor(Math.random() * sideEffectReveals.length)];
        this.showToast(randomReveal, 'success');
    }

    removeFromCart(productId) {
        this.cart = this.cart.filter(item => item.id !== productId);
        this.updateCartDisplay();
        this.renderCartItems();
        this.showToast('Power removed from cart', 'info');
    }

    clearCart() {
        if (this.cart.length === 0) {
            this.showToast('Cart is already empty!', 'error');
            return;
        }
        
        this.cart = [];
        this.updateCartDisplay();
        this.renderCartItems();
        this.showToast('Cart cleared! All powers returned to quantum storage.', 'success');
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cartCount');
        cartCount.textContent = this.cart.length;
        
        // Animate cart count
        if (this.cart.length > 0) {
            cartCount.style.animation = 'none';
            cartCount.offsetHeight; // Trigger reflow
            cartCount.style.animation = 'pulse 0.3s ease-in-out';
        }
    }

    toggleCart() {
        const cartModal = document.getElementById('cartModal');
        if (cartModal.classList.contains('hidden')) {
            this.showModal('cartModal');
            this.renderCartItems();
        } else {
            this.hideModal('cartModal');
        }
    }

    renderCartItems() {
        const cartItems = document.getElementById('cartItems');
        const cartSubtotal = document.getElementById('cartSubtotal');
        const cartTotal = document.getElementById('cartTotal');
        
        if (this.cart.length === 0) {
            cartItems.innerHTML = `
                <div style="text-align: center; padding: 2rem; color: var(--color-text-secondary);">
                    <p>🛒 Your quantum cart is empty</p>
                    <p>Start collecting some cosmic powers!</p>
                </div>
            `;
            cartSubtotal.textContent = '$0';
            cartTotal.textContent = '$49.99'; // Reality processing fee
            return;
        }
        
        cartItems.innerHTML = this.cart.map(product => `
            <div class="cart-item">
                <div class="cart-item-icon">${product.icon}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${product.name}</div>
                    <div class="cart-item-effect">${product.sideEffect}</div>
                </div>
                <div class="cart-item-price">$${product.price.toLocaleString()}</div>
                <button class="cart-item-remove" onclick="superpowerShop.removeFromCart(${product.id})">
                    🗑️
                </button>
            </div>
        `).join('');
        
        const subtotal = this.cart.reduce((total, product) => total + product.price, 0);
        const finalTotal = subtotal + 49.99; // Reality processing fee
        
        cartSubtotal.textContent = `$${subtotal.toLocaleString()}`;
        cartTotal.textContent = `$${finalTotal.toLocaleString()}`;
    }

    processCheckout() {
        if (this.cart.length === 0) {
            this.showToast('Your cart is empty! Add some powers first.', 'error');
            return;
        }
        
        const checkoutButton = document.getElementById('checkoutButton');
        const checkoutText = checkoutButton.querySelector('.checkout-text');
        const checkoutLoading = checkoutButton.querySelector('.checkout-loading');
        
        // Show loading state
        checkoutText.classList.add('hidden');
        checkoutLoading.classList.remove('hidden');
        checkoutButton.disabled = true;
        
        // Simulate payment processing
        const processingMessages = [
            "Contacting interdimensional payment gateway...",
            "Validating reality credits...",
            "Processing quantum transaction...",
            "Finalizing power transfer...",
            "Updating cosmic ledger...",
        ];
        
        let messageIndex = 0;
        const messageInterval = setInterval(() => {
            if (messageIndex < processingMessages.length) {
                checkoutLoading.textContent = processingMessages[messageIndex];
                messageIndex++;
            }
        }, 800);
        
        setTimeout(() => {
            clearInterval(messageInterval);
            
            // Success!
            this.showToast('🎉 Purchase complete! Powers have been transferred to your cosmic inventory!', 'success');
            this.cart = [];
            this.updateCartDisplay();
            this.hideModal('cartModal');
            
            // Reset button
            checkoutText.classList.remove('hidden');
            checkoutLoading.classList.add('hidden');
            checkoutLoading.textContent = 'Processing Reality...';
            checkoutButton.disabled = false;
            
            // Show confetti effect
            this.showConfettiEffect();
        }, 4000);
    }

    showModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.remove('hidden');
        
        // Animate modal appearance
        setTimeout(() => {
            modal.querySelector('.modal-content').style.animation = 'fadeIn 0.3s ease-out';
        }, 10);
    }

    hideModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.classList.add('hidden');
    }

    showProductDetail(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product) return;
        
        const productDetailContent = document.getElementById('productDetailContent');
        productDetailContent.innerHTML = `
            <div class="product-detail-header">
                <div class="product-detail-icon">${product.icon}</div>
                <div>
                    <h2>${product.name}</h2>
                    <div class="product-rarity ${product.rarity}">${product.rarity}</div>
                </div>
            </div>
            
            <div class="product-detail-body">
                <p class="product-detail-description">${product.description}</p>
                
                <div class="product-side-effect">
                    <h4>⚠️ Side Effect Warning</h4>
                    <p>${product.sideEffect}</p>
                </div>
                
                <div class="product-testimonial">
                    <h4>Customer Review</h4>
                    <blockquote>${product.testimonial}</blockquote>
                </div>
                
                <div class="product-stats">
                    <div class="stat">
                        <label>Power Level:</label>
                        <span>${product.powerLevel}/10</span>
                    </div>
                    <div class="stat">
                        <label>Availability:</label>
                        <span>${product.availability} units</span>
                    </div>
                    <div class="stat">
                        <label>Last Purchase:</label>
                        <span>${product.lastPurchased}</span>
                    </div>
                </div>
                
                <div class="product-detail-pricing">
                    ${product.originalPrice ? `<div class="original-price">$${product.originalPrice.toLocaleString()}</div>` : ''}
                    <div class="current-price">$${product.price.toLocaleString()}</div>
                    <button class="btn btn--primary btn--full-width" onclick="superpowerShop.addToCart(${product.id}); superpowerShop.hideModal('productModal');">
                        Add to Quantum Cart
                    </button>
                </div>
            </div>
        `;
        
        this.showModal('productModal');
    }

    showSimilarProducts(productId) {
        const product = this.products.find(p => p.id === productId);
        if (!product || !product.similarProducts) return;
        
        const similarProducts = product.similarProducts
            .map(id => this.products.find(p => p.id === id))
            .filter(p => p);
        
        const similarSection = document.getElementById('similarProducts');
        const similarGrid = document.getElementById('similarGrid');
        
        similarGrid.innerHTML = similarProducts.map(similar => `
            <div class="similar-item" onclick="superpowerShop.scrollToProduct(${similar.id})">
                <div class="product-icon">${similar.icon}</div>
                <div class="product-name">${similar.name}</div>
                <div class="current-price">$${similar.price.toLocaleString()}</div>
            </div>
        `).join('');
        
        similarSection.classList.remove('hidden');
        
        // Scroll similar products into view
        setTimeout(() => {
            similarSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    }

    scrollToProduct(productId) {
        const productCard = document.querySelector(`[data-product-id="${productId}"]`);
        if (productCard) {
            productCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Add highlight effect
            productCard.style.animation = 'none';
            productCard.offsetHeight; // Trigger reflow
            productCard.style.animation = 'highlightProduct 2s ease-in-out';
        }
    }

    toggleAdmin() {
        const adminPanel = document.getElementById('adminPanel');
        const adminToggle = document.getElementById('adminToggle');
        
        if (this.isAdminMode) {
            adminPanel.classList.remove('active');
            adminToggle.classList.add('hidden');
            this.isAdminMode = true;
        } else {
            adminPanel.classList.add('active');
            this.isAdminMode = true;
        }
    }

    handleAddProduct(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const newProduct = {
            id: this.products.length + 1,
            name: formData.get('productName') || document.getElementById('productName').value,
            price: parseInt(formData.get('productPrice') || document.getElementById('productPrice').value),
            originalPrice: null,
            description: formData.get('productDescription') || document.getElementById('productDescription').value,
            sideEffect: formData.get('productSideEffect') || document.getElementById('productSideEffect').value,
            icon: formData.get('productIcon') || document.getElementById('productIcon').value,
            category: formData.get('productCategory') || document.getElementById('productCategory').value,
            powerLevel: Math.floor(Math.random() * 10) + 1,
            rarity: ['common', 'uncommon', 'rare', 'legendary'][Math.floor(Math.random() * 4)],
            lastPurchased: 'Just now in Admin Console',
            testimonial: 'New power! No reviews yet. - AdminUser ⭐⭐⭐⭐⭐',
            availability: Math.floor(Math.random() * 10) + 1,
            similarProducts: []
        };
        
        this.products.push(newProduct);
        this.renderProducts();
        
        // Reset form
        e.target.reset();
        
        this.showToast('New superpower added to inventory!', 'success');
        
        // Update admin stats
        document.getElementById('activePowers').textContent = this.products.length;
    }

    revealMysteryDiscount() {
        const mysteryBox = document.getElementById('mysteryBox');
        const mysteryText = mysteryBox.querySelector('.mystery-text');
        
        const discountCodes = ['COSMIC15', 'REALITY20', 'QUANTUM25', 'GLITCH30', 'SECRET50'];
        const randomCode = discountCodes[Math.floor(Math.random() * discountCodes.length)];
        
        mysteryBox.style.animation = 'pulse 0.5s ease-in-out 3';
        
        setTimeout(() => {
            mysteryText.textContent = `Code: ${randomCode}`;
            this.showToast(`🎉 Mystery discount revealed: ${randomCode}!`, 'success');
            this.secretDiscountCode = randomCode;
        }, 1500);
    }

    animateSecurityLevel() {
        const securityLevel = document.getElementById('securityLevel');
        const levels = ['CLASSIFIED', 'RESTRICTED', 'CONFIDENTIAL', 'TOP SECRET', 'COSMIC CLEARANCE'];
        
        setInterval(() => {
            const randomLevel = levels[Math.floor(Math.random() * levels.length)];
            securityLevel.textContent = randomLevel;
        }, 5000);
    }

    animatePowerMeter() {
        // Power meter is handled by CSS animation, but we can add random fluctuations
        const powerMeter = document.getElementById('powerMeter');
        
        setInterval(() => {
            const randomWidth = Math.floor(Math.random() * 80) + 20;
            powerMeter.style.width = `${randomWidth}%`;
        }, 3000);
    }

    randomizeOrbPositions() {
        const orbs = document.querySelectorAll('.orb');
        orbs.forEach((orb, index) => {
            const randomTop = Math.floor(Math.random() * 80) + 10;
            const randomLeft = Math.floor(Math.random() * 80) + 10;
            
            orb.style.transition = 'all 2s ease-in-out';
            orb.style.top = `${randomTop}%`;
            orb.style.left = `${randomLeft}%`;
        });
    }

    initializeDisclaimerScroll() {
        const disclaimerScroll = document.getElementById('disclaimerScroll');
        const disclaimers = [
            "⚠️ Not responsible for timeline alterations",
            "⚠️ Side effects may include awkward situations", 
            "⚠️ May cause interdimensional attention",
            "⚠️ Use at your own cosmic risk",
            "⚠️ Void where prohibited by natural laws",
            "⚠️ May attract supervillains",
            "⚠️ Not suitable for normal Tuesday activities",
            "⚠️ Side effects not covered by health insurance"
        ];
        
        disclaimerScroll.innerHTML = disclaimers.map(disclaimer => `<span>${disclaimer}</span>`).join('');
    }

    initializeEasterEggs() {
        // Logo click counter for secret access
        this.logoClickCount = 0;
        
        console.log('🥚 Easter eggs initialized. Try some key combinations!');
    }

    handleLogoClick() {
        this.logoClickCount++;
        
        if (this.logoClickCount >= 7) {
            this.showSecretMessage();
            this.logoClickCount = 0;
        }
        
        // Add glitch effect
        const logo = document.getElementById('mainLogo');
        logo.classList.add('glitch-effect');
        setTimeout(() => logo.classList.remove('glitch-effect'), 300);
    }

    handleKeyDown(e) {
        // Track Konami code
        this.konamiCode.push(e.keyCode);
        if (this.konamiCode.length > this.targetKonami.length) {
            this.konamiCode.shift();
        }
        
        // Check if Konami code matches
        if (this.konamiCode.length === this.targetKonami.length) {
            const matches = this.konamiCode.every((key, index) => key === this.targetKonami[index]);
            if (matches) {
                this.activateKonamiMode();
                this.konamiCode = [];
            }
        }
    }

    handleKeyPress(e) {
        // Secret typing detection
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            this.secretTyping = (this.secretTyping || '') + e.key.toUpperCase();
            
            if (this.secretTyping.includes('POWER')) {
                this.activatePowerDiscount();
                this.secretTyping = '';
            }
            
            if (this.secretTyping.includes('SIDEFFECT')) {
                this.unlockAdminMode();
                this.secretTyping = '';
            }
            
            // Reset typing buffer after 3 seconds
            clearTimeout(this.secretTypingTimeout);
            this.secretTypingTimeout = setTimeout(() => {
                this.secretTyping = '';
            }, 3000);
        }
    }

    activateKonamiMode() {
        const konamiEgg = document.getElementById('konami');
        konamiEgg.classList.remove('hidden');
        
        this.showToast('🎮 KONAMI CODE ACTIVATED! Developer mode unlocked!', 'success');
        
        setTimeout(() => {
            konamiEgg.classList.add('hidden');
        }, 10000);
    }

    activatePowerDiscount() {
        this.showToast('🎉 Secret discount activated! 25% off all powers!', 'success');
        
        // Apply discount to all products temporarily
        this.products.forEach(product => {
            if (!product.discountApplied) {
                product.originalPrice = product.originalPrice || product.price;
                product.price = Math.floor(product.price * 0.75);
                product.discountApplied = true;
            }
        });
        
        this.renderProducts();
    }

    unlockAdminMode() {
        document.getElementById('adminToggle').classList.remove('hidden');
        this.showToast('🔓 Admin access granted! Control panel unlocked!', 'success');
    }

    showSecretMessage() {
        const messages = [
            "🌟 You found the secret! The universe approves.",
            "🔮 Ancient cosmic wisdom: Always read the fine print.",
            "⚡ Developer's note: Thanks for exploring our shop!",
            "🎭 Easter egg bonus: You're clearly a person of culture.",
            "🚀 Hidden message: The cake is a lie, but the powers are real!"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        this.showToast(randomMessage, 'success');
    }

    maxPowerMeter() {
        const powerMeter = document.getElementById('powerMeter');
        powerMeter.style.width = '100%';
        this.showToast('⚡ Power meter maxed out! Reality is at full capacity!', 'success');
    }

    unlockAllBundles() {
        this.showToast('🎁 All bundles unlocked! Special cosmic clearance granted!', 'success');
        // Could add special bundle effects here
    }

    showConfettiEffect() {
        // Create temporary confetti elements
        const confettiColors = ['#00ff41', '#ff0080', '#0080ff', '#8000ff'];
        
        for (let i = 0; i < 50; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.top = '-10px';
                confetti.style.left = Math.random() * window.innerWidth + 'px';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.zIndex = '10000';
                confetti.style.pointerEvents = 'none';
                confetti.style.borderRadius = '50%';
                
                document.body.appendChild(confetti);
                
                // Animate confetti falling
                confetti.animate([
                    { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`, opacity: 0 }
                ], {
                    duration: 3000,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => {
                    confetti.remove();
                };
            }, i * 100);
        }
    }

    showToast(message, type = 'info') {
        const toastContainer = document.getElementById('toastContainer');
        const toast = document.createElement('div');
        
        toast.className = `toast ${type}`;
        toast.innerHTML = `<div class="toast-message">${message}</div>`;
        
        toastContainer.appendChild(toast);
        
        // Trigger show animation
        setTimeout(() => {
            toast.classList.add('show');
        }, 100);
        
        // Auto remove after 4 seconds
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => {
                if (toast.parentNode) {
                    toast.remove();
                }
            }, 300);
        }, 4000);
    }
}

// Add some extra CSS animations via JavaScript for dynamic effects
const additionalStyles = `
    @keyframes screenShake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-2px); }
        75% { transform: translateX(2px); }
    }
    
    @keyframes highlightProduct {
        0%, 100% { box-shadow: none; }
        50% { box-shadow: 0 0 30px rgba(0, 255, 65, 0.6); }
    }
    
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.1); }
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);

// Initialize the application
let superpowerShop;
document.addEventListener('DOMContentLoaded', () => {
    superpowerShop = new SuperpowerShop();
    console.log('🌟 The Superpower Shop is now open for cosmic business!');
});

// Global functions for inline event handlers
window.showSecretMessage = () => superpowerShop.showSecretMessage();
window.maxPowerMeter = () => superpowerShop.maxPowerMeter();
window.unlockAllBundles = () => superpowerShop.unlockAllBundles();