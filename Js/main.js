document.addEventListener("DOMContentLoaded", function () {
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");
    const cartIcon = document.getElementById("cart-icon");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");
    const openSidebarBtn = document.getElementById("open-sidebar"); // Hamburger menu
    const sidebarNav = document.getElementById("sidebarNav"); // Sidebar navigation

    // Toggle search bar
    if (searchIcon) {
        searchIcon.addEventListener("click", function () {
            searchBar.classList.toggle("open");
        });
    }

    // Toggle cart sidebar
    if (cartIcon) {
        cartIcon.addEventListener("click", function () {
            cartSidebar.classList.toggle("open");
        });
    }

    // Close cart sidebar
    if (closeCartBtn) {
        closeCartBtn.addEventListener("click", function () {
            cartSidebar.classList.remove("open");
        });
    }

    // Toggle sidebar navigation (hamburger menu)
    if (openSidebarBtn) {
        openSidebarBtn.addEventListener("click", function () {
            sidebarNav.style.width = "250px"; // Open sidebar
        });
    }

    // Close sidebar navigation
    if (sidebarNav) {
        sidebarNav.querySelector(".closebtn").addEventListener("click", function () {
            sidebarNav.style.width = "0"; // Close sidebar
        });
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const promoImage = document.getElementById('promo-image');
    const promoImages = ['Image/ring1.png', 'Image/ring2.jpg', 'Image/ring3.jpg'];
    let currentImageIndex = 0;

    function changePromoImage() {
        promoImage.style.opacity = 0;
        setTimeout(() => {
            currentImageIndex = (currentImageIndex + 1) % promoImages.length;
            promoImage.src = promoImages[currentImageIndex];
            promoImage.style.opacity = 1;
        }, 500);
    }

    setInterval(changePromoImage, 5000);
});

const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
const cartItemsList = document.getElementById('cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function () {
        const product = this.closest('.product');
        const productName = product.dataset.name;
        const productPrice = parseFloat(product.dataset.price);
        const productImage = product.dataset.image;

        // Create a new cart item
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <img src="${productImage}" alt="${productName}" class="cart-item-image">
            <div>
                <p>${productName}</p>
                <p>$${productPrice.toFixed(2)}</p>
                <div class="quantity-controls">
                    <button class="decrease-quantity">-</button>
                    <input type="number" class="item-quantity" value="1" min="1">
                    <button class="increase-quantity">+</button>
                </div>
                <button class="remove-from-cart-btn">Remove</button>
            </div>
        `;

        cartItemsList.appendChild(cartItem);

        const decreaseQuantityBtn = cartItem.querySelector('.decrease-quantity');
        const increaseQuantityBtn = cartItem.querySelector('.increase-quantity');
        const itemQuantityInput = cartItem.querySelector('.item-quantity');

        decreaseQuantityBtn.addEventListener('click', function () {
            itemQuantityInput.value = Math.max(parseInt(itemQuantityInput.value, 10) - 1, 1);
        });
        increaseQuantityBtn.addEventListener('click', function () {
            itemQuantityInput.value = parseInt(itemQuantityInput.value, 10) + 1;
        });

        const removeButton = cartItem.querySelector('.remove-from-cart-btn');
        removeButton.addEventListener('click', function () {
            cartItemsList.removeChild(cartItem);
        });

        // Ensure the cart sidebar stays open when an item is added
        cartSidebar.classList.add('open');
    });
});
