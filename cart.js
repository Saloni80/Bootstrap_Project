// cart.js

const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
let total = 0;

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseInt(button.getAttribute('data-price'));

    const li = document.createElement('li');
    li.className = 'list-group-item';
    li.textContent = `${name} - ₹${price}`;

    cartItems.appendChild(li);

    total += price;
    cartTotal.textContent = total;
  });
});
