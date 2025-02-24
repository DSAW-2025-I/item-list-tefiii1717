document.addEventListener("DOMContentLoaded", () => {
    const productsGrid = document.querySelector(".products-grid");
    const cart = document.querySelector(".cart-items");
    const cartTitle = document.querySelector(".cart-title");
    const totalPriceElement = document.getElementById("total-price");
    let cartItems = [];

    const products = [
        {
            "image": "./assets/image-waffle-thumbnail.jpg",
            "name": "Waffle with Berries",
            "category": "Waffle",
            "price": 6.50
        },
        {
            "image": "./assets/image-creme-brulee-thumbnail.jpg",
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
        }
    ];

    function renderProducts() {
        productsGrid.innerHTML = "";
        products.forEach((product, index) => {
            const productHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="product-name">${product.name}</p>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-index="${index}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            productsGrid.innerHTML += productHTML;
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
    }

    function addToCart(event) {
        const index = event.currentTarget.dataset.index; // <-- Corregido para que funcione bien
        const product = products[index];

        cartItems.push(product);
        updateCart();
    }

    function updateCart() {
        cart.innerHTML = "";
        cartItems.forEach((item, i) => {
            cart.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${i})">X</button>
                </div>
            `;
        });

        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        cartTitle.textContent = `Your Cart (${cartItems.length})`;
    }

    window.removeFromCart = function(index) {
        cartItems.splice(index, 1);
        updateCart();
    };

    renderProducts();
});
document.addEventListener("DOMContentLoaded", () => {
    const productsGrid = document.querySelector(".products-grid");
    const cart = document.querySelector(".cart-items");
    const cartTitle = document.querySelector(".cart-title");
    const totalPriceElement = document.getElementById("total-price");
    let cartItems = [];

    const products = [
        {
            "image": "./assets/images/image-waffle-thumbnail.jpg",
            "name": "Waffle with Berries",
            "category": "Waffle",
            "price": 6.50
        },
        {
            "image": "./assets/images/image-creme-brulee-thumbnail.jpg",
            "name": "Vanilla Bean Crème Brûlée",
            "category": "Crème Brûlée",
            "price": 7.00
        }
    ];

    function renderProducts() {
        productsGrid.innerHTML = "";
        products.forEach((product, index) => {
            const productHTML = `
                <div class="product-card">
                    <img src="${product.image}" alt="${product.name}">
                    <p class="product-name">${product.name}</p>
                    <p class="product-category">${product.category}</p>
                    <p class="product-price">$${product.price.toFixed(2)}</p>
                    <button class="add-to-cart" data-index="${index}">
                        <i class="fas fa-shopping-cart"></i> Add to Cart
                    </button>
                </div>
            `;
            productsGrid.innerHTML += productHTML;
        });

        document.querySelectorAll(".add-to-cart").forEach(button => {
            button.addEventListener("click", addToCart);
        });
    }

    function addToCart(event) {
        const index = event.currentTarget.dataset.index; // <-- Corregido para que funcione bien
        const product = products[index];

        cartItems.push(product);
        updateCart();
    }

    function updateCart() {
        cart.innerHTML = "";
        cartItems.forEach((item, i) => {
            cart.innerHTML += `
                <div class="cart-item">
                    <p>${item.name}</p>
                    <p>$${item.price.toFixed(2)}</p>
                    <button onclick="removeFromCart(${i})">X</button>
                </div>
            `;
        });

        const total = cartItems.reduce((sum, item) => sum + item.price, 0);
        totalPriceElement.textContent = `$${total.toFixed(2)}`;
        cartTitle.textContent = `Your Cart (${cartItems.length})`;
    }

    window.removeFromCart = function(index) {
        cartItems.splice(index, 1);
        updateCart();
    };

    renderProducts();
});
