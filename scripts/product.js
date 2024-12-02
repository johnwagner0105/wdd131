const urlParams = new URLSearchParams(window.location.search);
const productName = urlParams.get("name");
const productPrice = urlParams.get("price");
const productImageUrl = urlParams.get("url");

document.getElementById("product-name").textContent = productName;
document.getElementById("product-price").textContent = `$${parseFloat(
  productPrice
).toFixed(2)}`;
const productImage = document.getElementById("product-image");
productImage.src = productImageUrl;
productImage.alt = productName;
const productDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
document.getElementById("product-description").textContent = productDescription;
console.log(productDescription);

document.getElementById("add-to-cart").addEventListener("click", () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const newItem = {
    name: productName,
    price: parseFloat(productPrice).toFixed(2),
    image: productImageUrl,
  };

  cartItems.push(newItem);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  alert(`${productName} has been added to your cart!`);
});
