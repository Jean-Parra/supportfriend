import { cart, removeItem, updateItem, cartNumberNavbar } from './cart-module_prosthesis.js';

// Cart ul element
const cartList = document.getElementsByClassName('cart-items__list')[0];

// Cart totals element
const cartTotals = document.getElementsByClassName('cart-totals')[0];
const cartTitle = document.getElementById('cart-items-title');

const updateCartList = () => {
	cartTitle.textContent = `${cart.length} Articles`;

	// Clear actual data
	cartList.innerHTML = '';

	// Update cart number on navbar
	cartNumberNavbar.textContent = cart.length;

	let subtotal = 0;
	let total = 0;

	cart.forEach((item) => {
		subtotal +=
			parseInt(item.price.replaceAll('.', '')) *
			item.onCart;

		const cartItem = document.createElement('li');
		cartItem.classList.add('cart-item');

		const itemImage = document.createElement('img');
		itemImage.classList.add('cart-item__image');
		itemImage.src = `../assets/prosthesis/${item.id}.jpg`;
		itemImage.alt = `${item.item} product image`;
		cartItem.appendChild(itemImage);

		// Title and amount
		const itemText = document.createElement('div');
		itemText.classList.add('cart-item__text');
		const itemTitle = document.createElement('h3');
		itemTitle.textContent = item.item;
		itemText.appendChild(itemTitle);

		if (item.amount !== '') {
			const itemAmount = document.createElement('p');
			itemAmount.textContent = item.amount;
			itemText.appendChild(itemAmount);
		}

		cartItem.appendChild(itemText);

		// On cart input
		const itemOnCart = document.createElement('div');
		itemOnCart.classList.add('cart-item__on-cart');
		const itemLabel = document.createElement('label');
		itemLabel.htmlFor = `${item.id}-input`;
		itemLabel.textContent = 'Quantity';
		const itemInput = document.createElement('input');
		itemInput.type = 'number';
		itemInput.min = 1;
		itemInput.name = `${item.id}-input`;
		itemInput.id = `${item.id}-input`;
		itemInput.value = `${item.onCart}`;
		itemOnCart.appendChild(itemLabel);
		itemOnCart.appendChild(itemInput);
		cartItem.appendChild(itemOnCart);

		const itemPrice = document.createElement('p');
		itemPrice.classList.add('cart-item__price');
		itemPrice.textContent = item.price;
		cartItem.appendChild(itemPrice);

		const removeImage = document.createElement('img');
		removeImage.classList.add('cart-item__remove');
		removeImage.src = '../assets/icons/trash-fill.svg';
		removeImage.alt = `Remove ${item.item} from cart`;
		cartItem.appendChild(removeImage);

		// Input value change listener
		itemInput.addEventListener('change', (e) => {
			updateItem(item.id, parseInt(e.target.value));
			updateCartList();
		});

		// Click listener on trash icon
		removeImage.addEventListener('click', () => {
			removeItem(item.id);
			updateCartList();
		});

		// Add the new row
		cartList.appendChild(cartItem);
	});

	// Get total
	//subtotal = subtotal.toFixed(2);
	total = (subtotal * 1.19); // Add IVA

	cartTotals.innerHTML = `
        <h2 class="subtitle">Summary of your order:</h2>
        <div class="cart-totals__row">
            <p>Subtotal:</p>
            <p>${subtotal}</p>
        </div>
        <div class="cart-totals__row cart-totals__row--bold">
            <p>Total:</p>
            <p>${total}</p>
        </div>
        <p class="cart-totals__ship">(Shipping included)</p>
        <button class="btn btn--block btn--green"id="compra">Place an order</button>
        <a class="cart-totals__redirection" href="./prosthesis.html">Want to add more products?</a>
    `;
};

updateCartList(); // Invoke on load
