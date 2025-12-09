// Highlight active navigation link for PC and tablet
const currentLocation = window.location.pathname.split("/").pop();
console.log("Current Location:", currentLocation);

document.querySelectorAll('.nav-links ul li a').forEach(link => {
    console.log("Comparing:", link.getAttribute('href'), "with", currentLocation);
    if (link.getAttribute('href') === currentLocation) {
        link.classList.add('active');
        console.log("Active class added to:", link);
    }
});
// Smooth scroll to top when clicking links with href="#"
// document.querySelectorAll('.logo-text a').forEach(anchor => {
//     anchor.addEventListener('click', function(event) {
//         event.preventDefault(); // Prevent default jump behavior
//         const scrollDuration = 500; // Duration in milliseconds
//         const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculate step size

//         // Smooth scrolling effect
//         const scrollInterval = setInterval(function() {
//             if (window.scrollY !== 0) {
//                 window.scrollBy(0, scrollStep);
//             } else {
//                 clearInterval(scrollInterval); 
//             }
//         }, 15); 
//     });
// });




const navLinks = document.getElementById("navLinks");
const menuIcon = document.querySelector('ion-icon[name="menu-outline"]');
const closeIcon = document.querySelector('ion-icon[name="close-outline"]');

function showMenu() {
    navLinks.classList.add('show'); 
    menuIcon.style.display = 'none';
}

function hideMenu() {
    navLinks.classList.remove('show');
    menuIcon.style.display = 'block';
}

// scrollOnNav
window.addEventListener('scroll', function () {
    const linls = document.querySelector('.nav-links');
    const logo = document.querySelector('.logo-back');
    
    if (window.scrollY > 50) { 
        logo.classList.add('scrolled');
        linls.classList.add('scrolled');
        if (window.innerWidth <= 479) {
            linls.classList.remove('scrolled');
        }
    } else {
        logo.classList.remove('scrolled');
        linls.classList.remove('scrolled');
    }
});

// Check if the device is mobile or tablet
function isMobileOrTablet() {
    return window.matchMedia("(max-width: 779px)").matches;
}

const catalogLink = document.getElementById('catalog-link');
catalogLink.addEventListener('click', event => {
    if (isMobileOrTablet()) {
        event.preventDefault();

        const dropdownMenu = catalogLink.nextElementSibling;
        dropdownMenu.classList.toggle('show');

        catalogLink.classList.toggle('active');

        // // Change text color only for "CATALOG"
        // if (catalogLink.classList.contains('active')) {
        //     catalogLink.style.color = "#e66e1e"; // Active: red text
        // } else {
        //     catalogLink.style.color = "#fff"; // Revert to default
        // }

        console.log("Catalog menu toggled!");
    }
});
// -----------Heart Animation-----------
// JavaScript to handle the click event and popup behavior
document.getElementById("heart").addEventListener("click", function() {
    const popup = document.getElementById("popup");
    popup.classList.remove("hidden"); // Show popup
    popup.style.animation = "zoomSpin 1s ease forwards"; // Trigger the zoom-spin animation
    setTimeout(() => {
        popup.classList.add("hidden"); // Hide popup after 2 seconds
    }, 2000);
});

// a-click-effect------
const clickableElements = document.querySelectorAll('.click-effect-a');

clickableElements.forEach(element => {
    element.addEventListener('mousedown', () => {
        element.style.transform = 'scale(0.98)';
        element.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
        element.style.filter = 'brightness(90%)'; // Darkens the element slightly
    });

    element.addEventListener('mouseup', () => {
        element.style.backgroundColor = ''; 
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
        element.style.filter = ''; // Reset brightness
    });

    element.addEventListener('mouseleave', () => {
        element.style.backgroundColor = ''; 
        element.style.transform = 'scale(1)';
        element.style.boxShadow = '';
        element.style.filter = ''; // Reset brightness
    });
});

// button-click-effect------
let activeElement = null; // Tracks the specific button being clicked

const buttonElements = document.querySelectorAll('.click-effect-button');

buttonElements.forEach(element => {
    element.addEventListener('mousedown', () => {
        activeElement = element; // Store the clicked button
        element.style.transform = 'scale(0.98)';
        element.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
        element.style.filter = 'brightness(90%)';
    });

    element.addEventListener('mouseup', () => {
        if (activeElement === element) { // Reset only if it's the originally clicked button
            activeElement = null; // Reset tracking
            element.style.backgroundColor = ''; 
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '';
            element.style.filter = '';
        }
    });

    element.addEventListener('mouseleave', () => {
        if (activeElement === element) { // Remove effect when moving away while holding the mouse
            element.style.backgroundColor = ''; 
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '';
            element.style.filter = '';
        }
    });

    element.addEventListener('mouseenter', () => {
        if (activeElement === element) { // Reapply the effect when returning to the button while holding the mouse
            element.style.transform = 'scale(0.98)';
            element.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
            element.style.filter = 'brightness(90%)';
        }
    });
});

// Ensure reset when releasing the mouse anywhere on the page
document.addEventListener('mouseup', () => {
    if (activeElement) {
        activeElement.style.transform = 'scale(1)';
        activeElement.style.boxShadow = '';
        activeElement.style.filter = '';
        activeElement = null; // Ensure tracking is cleared
    }
});


//button-click-cart------
let isMouseDown = null; // Track the clicked button

const buttons = document.querySelectorAll('.click-btn-add');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        isMouseDown = button; // Store the specific button clicked
        button.style.filter = 'brightness(90%)';
        button.style.transform = 'scale(0.98)';
        button.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
    });

    button.addEventListener('mouseleave', () => {
        if (isMouseDown === button) return; // Prevent reset if mouse is still pressed
        button.style.filter = '';
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '';
    });

    button.addEventListener('mouseenter', () => {
        if (isMouseDown === button) { // Apply effect only if re-entering the originally clicked button
            button.style.filter = 'brightness(90%)';
            button.style.transform = 'scale(0.98)';
            button.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
        }
    });
});

// Ensure reset when releasing the mouse anywhere on the page
document.addEventListener('mouseup', () => {
    if (isMouseDown) {
        isMouseDown.style.filter = '';
        isMouseDown.style.transform = 'scale(1)';
        isMouseDown.style.boxShadow = '';
    }
    isMouseDown = null; // Properly reset tracking after mouse release
});

//cart---------
function submitForm() {
    // Collecting all input values from the form
    const fullName = document.getElementById('full-name').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const email = document.getElementById('email').value;
    const houseNumber = document.getElementById('house-number').value;
    const streetName = document.getElementById('street-name').value;
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    const postalCode = document.getElementById('postal-code').value;
    const preferredContact = document.querySelector('input[name="preferred-contact"]:checked');

    // Validating that all required fields are filled
    if (fullName && phoneNumber && email && houseNumber && streetName && city && state && postalCode && preferredContact) {
        // Displaying the confirmation message
        document.getElementById('confirmation-message').style.display = 'block';

        // Logging the collected form data to the console for debugging
        console.log("Form Submitted Successfully!");
        console.log("Full Name:", fullName);
        console.log("Phone Number:", phoneNumber);
        console.log("Email Address:", email);
        console.log("House/Flat Number:", houseNumber);
        console.log("Street Name:", streetName);
        console.log("City:", city);
        console.log("State:", state);
        console.log("Postal Code:", postalCode);
        console.log("Preferred Contact Method:", preferredContact.value);
    } else {
        // Alerting the user if any field is missing
        alert("Please fill out all required fields!");
    }
}
//small cart-------
// Cart Array to Store Items
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to Add Items to the Cart
function addToCart(itemName, itemPrice) {
    const existingItem = cart.find(item => item.name === itemName);

    if (existingItem) {
        existingItem.quantity += 1; 
    } else {
        // Add New Item to Cart
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
    }

    // Save the updated cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

// Function to Render the Cart Section
function renderCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalContainer = document.querySelector('.cart-total');
    const itemsNumber = document.querySelector('.items-number');
    const itemsNumber1 = document.querySelector('.items-number1');

    // Clear Previous Cart Data
    cartItemsContainer.innerHTML = '';

    // Get Cart Data from LocalStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || []; // Get updated cart (empty if cleared)

    // Variable to Calculate Total Price and Quantity
    let total = 0;
    let totalQuantity = 0;

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} - ₹${item.price}
            <div> 
            <button class="price-up-down" onclick="decreaseQuantity('${item.name}')"><</button>
            <span>${item.quantity}</span>
            <button class="price-up-down" onclick="increaseQuantity('${item.name}')">></button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
        total += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    // Update Total Price
    totalContainer.innerHTML = `<strong>Total:</strong> ₹${total}`;

    // Update Total Quantity (Number of Items in Cart)
    if (itemsNumber) {
        itemsNumber.innerHTML = totalQuantity; // Update items-number
    }
    if (itemsNumber1) {
        itemsNumber1.innerHTML = totalQuantity; // Update items-number1
    }
}


function increaseQuantity(itemName) {
    const cartItem = cart.find(item => item.name === itemName); // Find the item in the cart
    if (cartItem) {
        cartItem.quantity++; // Increment the quantity
        localStorage.setItem('cart', JSON.stringify(cart)); // Save changes to localStorage
        renderCart(); // Refresh the cart display
    }
}

function decreaseQuantity(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName); // Find the item's index in the cart

    if (itemIndex !== -1) {
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--; 
        } else {
            cart.splice(itemIndex, 1);
        }

        localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
        renderCart(); 
    }
}
// Initialize Cart Rendering on Page Load
document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});


// cart-button-click-effect/disable------
document.addEventListener('DOMContentLoaded', () => {
    updateCheckoutButton(); // Run once at page load
});

function updateCheckoutButton() {
    const checkoutBtn = document.querySelector('.checkout-btn');
    const cartItems = document.querySelectorAll('.cart-items li');

    if (cartItems.length === 0) {
        checkoutBtn.style.pointerEvents = 'none'; // Disable clicks
        checkoutBtn.style.opacity = '0.6'; // Dim button color
        checkoutBtn.style.backgroundColor = 'gray'; // Change color to gray
        checkoutBtn.style.filter = 'brightness(100%)'; // Prevent click effect
    } else {
        checkoutBtn.style.pointerEvents = 'auto'; // Enable clicks
        checkoutBtn.style.opacity = '1'; // Restore normal color
        checkoutBtn.style.backgroundColor = ''; // Use default button color
        checkoutBtn.style.filter = ''; // Restore click effect
    }
}

// Run `updateCheckoutButton` whenever cart changes dynamically
const cartObserver = new MutationObserver(updateCheckoutButton);
const cartContainer = document.querySelector('.cart-items'); // Observe cart list
cartObserver.observe(cartContainer, { childList: true }); // Detects when items are added or removed

document.querySelector('.cart-clear').addEventListener('click', () => {
    setTimeout(() => {
        updateCheckoutButton(); // Check cart status after clearing
    }, 400);
});





//cart-clear-------
document.querySelector('.cart-clear').addEventListener('click', () => {
    const items = Array.from(document.querySelectorAll('.cart-items li')); // Get all cart items
    items.reverse(); // Start clearing from the bottom

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('swipe-out'); // Add animation class
            item.addEventListener('transitionend', () => {
                item.remove(); // Remove item from the DOM after animation ends
            });
        }, index * 100); // Add cascading delay (200ms per item)
    });

    setTimeout(() => {
        // Reset cart in localStorage and global memory
        localStorage.setItem('cart', JSON.stringify([]));
        cart = [];
        renderCart(); 
    }, items.length * 100 + 300);
});

document.addEventListener('DOMContentLoaded', () => {
    renderCart();
});

// price-up-down-click-effect------
let activeButton = null; // Tracks the specific button that was clicked

document.addEventListener('mousedown', (event) => {
    const button = event.target.closest('.price-up-down'); // Detect clicked button
    if (!button) return; // Ignore clicks outside buttons

    activeButton = button; // Store the clicked button
    button.style.filter = 'brightness(90%)';
    button.style.transform = 'scale(0.98)';
    button.style.boxShadow = 'inset 0 2px 6px rgba(0, 0, 0, 0.6)';
});

document.addEventListener('mouseup', () => {
    if (activeButton) {
        activeButton.style.filter = '';
        activeButton.style.transform = 'scale(1)';
        activeButton.style.boxShadow = '';
    }
    activeButton = null; // Reset tracking after mouse release
});

document.addEventListener('mouseleave', (event) => {
    if (!activeButton) return;

    const button = event.target.closest('.price-up-down');
    if (button === activeButton) return; // Maintain effect if still holding the mouse
    
    button.style.filter = '';
    button.style.transform = 'scale(1)';
    button.style.boxShadow = '';
});





//mobile cart-------
function toggleCart() {
    const cart = document.querySelector('.right-cart');
    const iconFixed = document.querySelector('.icon-fixed');
    const cartItems = document.querySelector('.items-number1');

    // Toggle the 'active' class on the cart
    cart.classList.toggle('active');

    // Remove box-shadow directly if 'active' is applied
    if (cart.classList.contains('active')) {
        iconFixed.style.boxShadow = 'none';
        iconFixed.style.backgroundColor = 'transparent';
        cartItems.style.display = 'none';
    } else {
        iconFixed.style.boxShadow = '-2px -5px 8px 0.5px rgba(0, 0, 0, 0.6)';
        iconFixed.style.backgroundColor = '#f4f4f4';
        cartItems.style.display = 'block';
    }
}

// -----------slider-banner----------
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 8) {
        counter = 1;
    }
}, 5000);