// Sample cart items array (usually, this data would come from a server or session storage)
let cartItems = [
    { name: "Caribbean Getaway", price: 1500 },
    { name: "Mediterranean Adventure", price: 2500 },
    { name: "Alaskan Expedition", price: 1800 }
];

// Load cart items and display in the cart section
function loadCart() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Clear previous content
    let total = 0;

    cartItems.forEach((item, index) => {
        // Create a new div for each item
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        
        itemDiv.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        `;

        cartContainer.appendChild(itemDiv);
        total += item.price;
    });

    // Update total cost
    document.getElementById('total-cost').innerText = `Total: $${total.toFixed(2)}`;
}

// Remove item from cart
function removeItem(index) {
    cartItems.splice(index, 1);
    loadCart(); // Reload cart after item is removed
}

// Placeholder for checkout function
function checkout() {
    alert("Proceeding to checkout...");
    // Implement checkout functionality here
}

// Load cart items when the page loads
window.onload = loadCart;
