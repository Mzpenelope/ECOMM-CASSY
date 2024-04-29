// wishlist.js
document.addEventListener("DOMContentLoaded", function() {
    const wishlistItemsContainer = document.getElementById("wishlist-items");

    // Sample data for demonstration
    const wishlistItems = [
        {
            id: 1,
            name: "Product 1",
            price: "$10.99",
            image: "https://via.placeholder.com/150",
            // Add more properties as needed
        },
        {
            id: 2,
            name: "Product 2",
            price: "$19.99",
            image: "https://via.placeholder.com/150",
            // Add more properties as needed
        }
    ];

    // Render wishlist items
    function renderWishlistItems() {
        wishlistItemsContainer.innerHTML = "";

        wishlistItems.forEach(item => {
            const wishlistItem = document.createElement("div");
            wishlistItem.classList.add("wishlist-item");

            wishlistItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="wishlist-item-details">
                    <h3>${item.name}</h3>
                    <p>${item.price}</p>
                </div>
                <div class="wishlist-item-actions">
                    <button class="remove-btn" data-id="${item.id}">Remove</button>
                    <button class="add-to-cart-btn" data-id="${item.id}">Add to Cart</button>
                </div>
            `;

            wishlistItemsContainer.appendChild(wishlistItem);
        });
    }

    // Remove item from wishlist
    function removeItemFromWishlist(itemId) {
        const index = wishlistItems.findIndex(item => item.id === itemId);
        if (index !== -1) {
            wishlistItems.splice(index, 1);
            renderWishlistItems();
        }
    }

    // Add event listeners for remove and add to cart buttons
    wishlistItemsContainer.addEventListener("click", function(event) {
        if (event.target.classList.contains("remove-btn")) {
            const itemId = parseInt(event.target.dataset.id);
            removeItemFromWishlist(itemId);
        } else if (event.target.classList.contains("add-to-cart-btn")) {
            // Handle adding item to cart
            console.log("Item added to cart!");
        }
    });

    // Initial render
    renderWishlistItems();
});
