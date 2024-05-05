"use strict";

// modal variables
const modal = document.querySelector("[data-modal]");
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalCloseOverlay = document.querySelector("[data-modal-overlay]");

// modal function
const modalCloseFunc = function () {
  modal.classList.add("closed");
};

// modal eventListener
modalCloseOverlay.addEventListener("click", modalCloseFunc);
modalCloseBtn.addEventListener("click", modalCloseFunc);

// notification toast variables
const notificationToast = document.querySelector("[data-toast]");
const toastCloseBtn = document.querySelector("[data-toast-close]");

// notification toast eventListener
toastCloseBtn.addEventListener("click", function () {
  notificationToast.classList.add("closed");
});

function acc() {
  let phi = prompt("Enter your name?");
  let phill = prompt("Make an order?");
  let philll = prompt("Enter your phone number");
  let philly = prompt("Enter payment option");
  if (phill === "spaghetti" || phill === "indomine" || phill === "coffee") {
    let button = document.querySelector("button");
    button.innerHTML =
      "🤗🤗🤗<br />Thank you  " +
      phi +
      ".  Wait while we process your order, we will get back shortly.";
  } else {
    let button = document.querySelector("button");
    button.innerHTML =
      "😥<br />Sorry " +
      phi +
      ". We cannot proccess your order now. Please try again later.";
  }
}
let accbut = document.querySelector("button");
accbut.addEventListener("click", acc);

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll(
  "[data-mobile-menu-open-btn]"
);
const mobileMenu = document.querySelectorAll("[data-mobile-menu]");
const mobileMenuCloseBtn = document.querySelectorAll(
  "[data-mobile-menu-close-btn]"
);
const overlay = document.querySelector("[data-overlay]");

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove("active");
    overlay.classList.remove("active");
  };

  mobileMenuOpenBtn[i].addEventListener("click", function () {
    mobileMenu[i].classList.add("active");
    overlay.classList.add("active");
  });

  mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc);
  overlay.addEventListener("click", mobileMenuCloseFunc);
}

// accordion variables
const accordionBtn = document.querySelectorAll("[data-accordion-btn]");
const accordion = document.querySelectorAll("[data-accordion]");

for (let i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener("click", function () {
    const clickedBtn = this.nextElementSibling.classList.contains("active");

    for (let i = 0; i < accordion.length; i++) {
      if (clickedBtn) break;

      if (accordion[i].classList.contains("active")) {
        accordion[i].classList.remove("active");
        accordionBtn[i].classList.remove("active");
      }
    }

    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("active");
  });
}

(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel').carousel();
    $('.modal').modal();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// Attach click event listener to heart-outline buttons
const heartOutlineButtons = document.querySelectorAll(".btn-action ion-icon[name='heart-outline']");
heartOutlineButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Get product ID from the parent element or any relevant attribute
        const productId = this.closest('.showcase').dataset.productId; // Example: Get product ID from dataset
        // Get user ID (if needed) from the session or any relevant source
        const userId = getUserId(); // Replace getUserId() with the actual function to retrieve the user ID
        // Get product data
        const productData = getProductData(this.closest('.showcase'));
        // Call function to add product to wishlist
        addToWishlist(userId, productId, productData);
    });
});

// Function to retrieve the user ID (replace with actual implementation)
function getUserId() {
    // Implement logic to retrieve the user ID (e.g., from session, local storage, etc.)
    // For demonstration, returning a hardcoded user ID
    return "user123"; // Example: Hardcoded user ID
}

// Function to extract product data from the showcase element
function getProductData(showcaseElement) {
    // Extract product data from the showcase element
    const productTitle = showcaseElement.querySelector('.showcase-title').textContent;
    const productPrice = showcaseElement.querySelector('.price').textContent;
    // Additional product data extraction if needed
    return { title: productTitle, price: productPrice };
}

// Frontend function to add a product to the wishlist
function addToWishlist(userId, productId, productData) {
    // Send user ID, product ID, and product data to the server endpoint for adding to the wishlist
    fetch("/wishlist/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId, productData }),
    })
    .then(response => {
        if (response.ok) {
            // Product added to wishlist successfully
            // Handle UI updates as needed
            console.log("Product added to wishlist successfully");
        } else {
            // Error adding product to wishlist
            console.error("Error adding product to wishlist");
        }
    })
    .catch(error => {
        console.error("Error adding product to wishlist:", error);
    });
}

// Attach click event listener to bag-add-outline buttons
const bagAddButtons = document.querySelectorAll(".btn-action ion-icon[name='bag-add-outline']");
bagAddButtons.forEach(button => {
    button.addEventListener("click", function() {
        // Get product ID from the parent element or any relevant attribute
        const productId = this.closest('.showcase').dataset.productId; // Example: Get product ID from dataset
        // Get user ID (if needed) from the session or any relevant source
        const userId = getUserId(); // Replace getUserId() with the actual function to retrieve the user ID
        // Get product data
        const productData = getProductData(this.closest('.showcase'));
        // Call function to add product to cart
        addToCart(userId, productId, productData);
    });
});

// Function to retrieve the user ID (replace with actual implementation)
function getUserId() {
    // Implement logic to retrieve the user ID (e.g., from session, local storage, etc.)
    // For demonstration, returning a hardcoded user ID
    return "user123"; // Example: Hardcoded user ID
}

// Function to extract product data from the showcase element
function getProductData(showcaseElement) {
    // Extract product data from the showcase element
    const productTitle = showcaseElement.querySelector('.showcase-title').textContent;
    const productPrice = showcaseElement.querySelector('.price').textContent;
    // Additional product data extraction if needed
    return { title: productTitle, price: productPrice };
}

// Frontend function to add a product to the cart
function addToCart(userId, productId, productData) {
    // Send user ID, product ID, and product data to the server endpoint for adding to the cart
    fetch("/cart/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId, productData }),
    })
    .then(response => {
        if (response.ok) {
            // Product added to cart successfully
            // Handle UI updates as needed
            console.log("Product added to cart successfully");
        } else {
            // Error adding product to cart
            console.error("Error adding product to cart");
        }
    })
    .catch(error => {
        console.error("Error adding product to cart:", error);
    });
}
