document.addEventListener("DOMContentLoaded", function () {
    // Get references to the cart icons, cart sidebar, and close button
    const headerCartIcon = document.getElementById("header-cart-icon");
    const hoveringCartIconContainer = document.getElementById("cart-icon-container");
    const cartSidebar = document.getElementById("cart-sidebar");
    const closeCartBtn = document.getElementById("close-cart");

    // Toggle cart sidebar when the header cart icon is clicked
    if (headerCartIcon && cartSidebar) {
        headerCartIcon.addEventListener("click", function () {
            cartSidebar.classList.toggle("open"); // Toggle the sidebar open/close

            // Hide the hovering cart icon when the sidebar is opened via header cart icon
            if (cartSidebar.classList.contains("open")) {
                hoveringCartIconContainer.style.display = 'none';
            } else {
                hoveringCartIconContainer.style.display = 'flex';
            }
        });
    }

    // Toggle cart sidebar when the hovering cart icon is clicked
    if (hoveringCartIconContainer && cartSidebar) {
        hoveringCartIconContainer.addEventListener("click", function () {
            cartSidebar.classList.add("open"); // Show the sidebar
            hoveringCartIconContainer.style.display = 'none'; // Hide the hovering cart icon
        });
    }

    // Close cart sidebar when close button is clicked
    if (closeCartBtn && cartSidebar) {
        closeCartBtn.addEventListener("click", function () {
            cartSidebar.classList.remove("open"); // Close the sidebar
            hoveringCartIconContainer.style.display = 'flex'; // Show the hovering cart icon again
        });
    }
});

// Add to Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemsList = document.getElementById('cart-items');
    const cartCounter = document.getElementById('cart-count');
    let itemCount = 0; // Initialize item count

    // Add items to cart when Add to Cart button is clicked
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function () {
            const product = this.closest('.product');
            const productName = product.dataset.name;
            const productPrice = parseFloat(product.dataset.price);
            const productImage = product.dataset.image;

            // Create a new cart item element
            const cartItem = document.createElement('li');
            cartItem.classList.add('cart-item');
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

            // Update cart item count
            itemCount++;
            cartCounter.textContent = itemCount;

            // Handle quantity controls
            const decreaseQuantityBtn = cartItem.querySelector('.decrease-quantity');
            const increaseQuantityBtn = cartItem.querySelector('.increase-quantity');
            const itemQuantityInput = cartItem.querySelector('.item-quantity');

            decreaseQuantityBtn.addEventListener('click', function () {
                itemQuantityInput.value = Math.max(parseInt(itemQuantityInput.value, 10) - 1, 1);
            });

            increaseQuantityBtn.addEventListener('click', function () {
                itemQuantityInput.value = parseInt(itemQuantityInput.value, 10) + 1;
            });

            // Remove item from cart
            const removeButton = cartItem.querySelector('.remove-from-cart-btn');
            removeButton.addEventListener('click', function () {
                cartItemsList.removeChild(cartItem);
                itemCount--;
                cartCounter.textContent = itemCount;
            });
        });
    });
});
