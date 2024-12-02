document.addEventListener("DOMContentLoaded", () => {
  const cartItemsContainer = document.getElementById("cart-items");
  const totalPriceElement = document.getElementById("total-price");

  // Get cart items from localStorage
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

  // Check if the cart is empty
  if (cartItems.length === 0) {
    cartItemsContainer.innerHTML = `<tr><td colspan="4">Your cart is empty.</td></tr>`;
    totalPriceElement.textContent = "Total: $0.00";
    return;
  }

  // Populate cart table
  let totalPrice = 0;

  cartItems.forEach((item, index) => {
    totalPrice += parseFloat(item.price);

    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${item.name}</td>
            <td><img src="${item.image}" alt="${
      item.name
    }" width="50" height="50"></td>
            <td>$${parseFloat(item.price).toFixed(2)}</td>
            <td><button class="remove-item" data-index="${index}">Remove</button></td>
        `;
    cartItemsContainer.appendChild(row);
  });

  // Update total price
  totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;

  // Add event listeners to remove buttons
  document.querySelectorAll(".remove-item").forEach((button) => {
    button.addEventListener("click", (e) => {
      const index = e.target.dataset.index;
      cartItems.splice(index, 1); // Remove item from cart array
      localStorage.setItem("cart", JSON.stringify(cartItems)); // Update localStorage
      location.reload(); // Refresh the page to update the cart
    });
  });
});

// Checkout button functionality
document.getElementById("checkout-button").addEventListener("click", () => {
  alert("Proceeding to checkout...");
  localStorage.removeItem("cart"); // Clear the cart
  location.href = "project-home.html"; // Redirect to checkout page
});
