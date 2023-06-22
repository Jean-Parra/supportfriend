import { addItem } from './cart-module_prosthesis.js';

/* Product details dialog */
export const productDetailsDialog = document.getElementsByClassName('product-modal')[0];

export const products = [{
        id: 1,
        item: 'Knee Disarticulation Prosthesis',
        price: '5.000.000',
        description: 'An innovative prosthesis made of high quality titanium for strength and durability. Designed to provide a comfortable and secure fit, this prosthesis allows for natural mobility and restores functionality to the affected knee.',
    },
    {
        id: 2,
        item: 'Knee Disarticulation Prosthesis',
        price: '4.000.000',
        description: 'This state-of-the-art prosthesis uses carbon fiber materials to offer a unique combination of lightness and strength. With its ergonomic design, it provides stability and smooth movement, allowing users to lead an active and dynamic life.',
    },
    {
        id: 3,
        item: 'Knee Disarticulation Prosthesis',
        price: '4.500.000',
        description: 'A versatile prosthesis designed to adapt to the individual needs of each user. With customized fitting options, this prosthesis allows for modification of length, angle and strength, providing comfort and optimal performance for a variety of daily activities.',
    },
    {
        id: 4,
        item: 'Prosthetics for amputees',
        price: '6.000.000',
        description: 'A prosthesis specially designed for people who wish to maintain their activity level even in aquatic environments. Made of waterproof and corrosion-resistant materials, this prosthesis offers excellent water resistance and stability, allowing users to enjoy water activities.',
    },
    {
        id: 5,
        item: 'bionic implants',
        price: '12.000.000',
        description: 'A state-of-the-art robotic hand prosthesis designed to replicate the natural movements of a human hand. With integrated sensors and a full range of motion, this prosthesis offers people with disabilities greater precision and dexterity in their daily activities.',
    },
    {
        id: 6,
        item: 'Royalty-free robot arm',
        price: '10.000.000',
        description: 'Un brazo robótico modular diseñado para adaptarse a las necesidades individuales de cada usuario. Con diferentes módulos intercambiables, como manos, pinzas y herramientas especializadas, esta prótesis permite a las personas personalizar su funcionalidad según sus requerimientos específicos.',
    },
    {
        id: 7,
        item: 'Robot hand 3D model',
        price: '7.500.000',
        description: 'A bionic hand equipped with tactile sensors that allow people with disabilities to experience natural sensations when touching objects. This innovative prosthesis provides a greater sensory connection and a higher level of control to the user.',
    },
    {
        id: 8,
        item: 'Robot hand 3D model',
        price: '7.000.000',
        description: 'An affordable and accessible arm prosthesis, manufactured using 3D printing technology. This low-cost solution offers an affordable alternative for those seeking a functional and customized prosthesis, giving people with disabilities the opportunity to improve their quality of life.',
    },
    {
        id: 9,
        item: 'Gentlemans Aesthetic Hand Otto Bock',
        price: '2.500.000',
        description: 'An external arm prosthesis meticulously designed to provide a natural and realistic appearance. With precise detailing and custom colors, this prosthesis is designed to enhance a persons confidence and aesthetics by providing an appearance similar to that of a human arm.',
    },
    {
        id: 10,
        item: 'Aesthetic external hand prosthesis',
        price: '2.000.000',
        description: 'A unique and customized external esthetic prosthesis that is perfectly adapted to individual characteristics and preferences. Manufactured with high quality materials and advanced modeling techniques, this prosthesis is created specifically to meet the aesthetic and functional needs of each user.',
    },
    {
        id: 11,
        item: 'External esthetic prosthesis for arm',
        price: '3.000.000',
        description: 'An external arm prosthesis with a sleek, modern design that combines functionality with a contemporary look. With clean lines and sophisticated styling, this prosthesis offers a cutting-edge aesthetic option for those who desire an updated and attractive appearance.',
    },
    {
        id: 12,
        item: 'Aesthetic external hand prosthesis',
        price: '2.300.000',
        description: 'A highly customizable external prosthesis that allows users to express their style and personality. With choices of colors, patterns and finishes, this prosthesis offers the freedom to tailor your appearance according to individual preferences, providing an opportunity to stand out and showcase your unique style.',
    },
    {
        id: 13,
        item: 'Dental prosthesis',
        price: '1.000.000',
        description: 'A versatile and comfortable option to replace missing teeth. This prosthesis can be easily removed and placed, providing an esthetic and functional solution.',
    },
    {
        id: 14,
        item: 'Dental prosthesis',
        price: '1.200.000',
        description: 'A durable, long-lasting solution to restore the functionality and appearance of teeth. This prosthesis permanently bonds to existing teeth or dental implants, providing a natural smile.',
    },
    {
        id: 15,
        item: 'Dental prosthesis',
        price: '1.100.000',
        description: 'Ideal for replacing one or more missing teeth without affecting adjacent teeth. This prosthesis is attached to existing teeth by means of clasps or anchorage devices, restoring chewing function and dental esthetics.',
    },
    {
        id: 16,
        item: 'Dental prosthesis',
        price: '1.300.000',
        description: 'An innovative solution that uses dental implants as a base for a fixed prosthesis. This option offers greater stability and comfort, as the implants act as artificial roots, providing a solid base for the replacement teeth.',
    },
];

export const createProductCard = (args) => {
    console.log(args.id);
    // Main container
    const card = document.createElement('article');
    card.classList.add('product');
    card.dataset.id = args.id; // Variable used to show the product dialog on click

    // Product fields
    const productImage = document.createElement('img');
    productImage.classList.add('product__image');
    productImage.alt = `${args.item} product image`;
    productImage.src = `../assets/prosthesis/${args.id}.jpg`;
    card.appendChild(productImage);

    const productTitle = document.createElement('h3');
    productTitle.classList.add('product__title');
    productTitle.textContent = args.item;
    card.appendChild(productTitle);

    // Add amout paragraph as needed
    if (args.amount !== '') {
        const productAmount = document.createElement('p');
        productAmount.classList.add('product__amount');
        productAmount.textContent = args.amount;
        card.appendChild(productAmount);
    }

    // Add discount as needed
    if (args.discount && args.discount !== '') {
        const productDiscount = document.createElement('span');
        productDiscount.classList.add('product__discount');
        productDiscount.textContent = args.discount;
        card.appendChild(productDiscount);
    }

    const productPrice = document.createElement('p');
    productPrice.classList.add('product__price');
    productPrice.textContent = args.price;
    card.appendChild(productPrice);

    const heartIcon = document.createElement('img');
    heartIcon.classList.add('product__favorite');
    heartIcon.alt = 'Heart icon';
    heartIcon.src = '../assets/icons/heart-border-red.svg';

    heartIcon.addEventListener('click', (e) => {
        if (e.target.src.endsWith('/assets/icons/heart-border-red.svg')) {
            e.target.src = '../assets/icons/heart-fill-red.svg';
        } else {
            e.target.src = '../assets/icons/heart-border-red.svg';
        }
    });

    card.appendChild(heartIcon);

    // Card buttons
    const addToCartButton = document.createElement('button');
    addToCartButton.classList.add('btn', 'btn--orange', 'btn--block', 'product__cart-button');
    addToCartButton.dataset.productId = args.id;
    addToCartButton.type = 'button';
    const addToCartButtonIcon = document.createElement('img');
    addToCartButtonIcon.alt = 'Add to cart icon';
    addToCartButtonIcon.src = '../assets/icons/basket3-fill-white.svg';
    addToCartButton.textContent = 'Add to basket';
    addToCartButton.insertBefore(addToCartButtonIcon, addToCartButton.firstChild);
    card.appendChild(addToCartButton);

    /*Add to cart button event listener*/
    addToCartButton.addEventListener('click', (e) => {
        e.stopPropagation();
        addItem(parseInt(e.target.dataset.productId));
    });

    /*Click on card event*/
    productTitle.addEventListener('click', () => {
        createProductModal(args.id, productDetailsDialog);
    });

    productImage.addEventListener('click', () => {
        createProductModal(args.id, productDetailsDialog);
    });

    return card;
};

export const createProductModal = (id, dialog) => {
    const selectedProduct = products.filter((product) => product.id === id)[0];

    dialog.innerHTML = `

		<img src='../assets/prosthesis/${selectedProduct.id}.jpg' alt='${selectedProduct.item}' class='product-modal__image'/>
		<div class='product-modal__data'>
			<h2 class="product-modal__title">${selectedProduct.item}</h2>
			<p class="product-modal__price">
				${selectedProduct.price}
			</p>
			<p class="product-modal__description">${selectedProduct.description}</p>
			<button class="btn btn--orange">
				<img alt="Add to cart icon" src="../assets/icons/basket3-fill-white.svg" />
				Add to basket
			</button>
		</div>
	`;

    const addToCartButton = document.querySelector('.product-modal .btn--orange');

    addToCartButton.addEventListener('click', () => {
        addItem(selectedProduct.id);
    });

    const heartIcon = document.createElement('img');
    heartIcon.classList.add('product-modal__favorite');
    heartIcon.alt = 'Heart icon';
    heartIcon.src = '../assets/icons/heart-border-red.svg';

    heartIcon.addEventListener('click', (e) => {
        if (e.target.src.endsWith('/assets/icons/heart-border-red.svg')) {
            e.target.src = '../assets/icons/heart-fill-red.svg';
        } else {
            e.target.src = '../assets/icons/heart-border-red.svg';
        }
    });

    productDetailsDialog.insertBefore(heartIcon, productDetailsDialog.firstChild);

    const closeIcon = document.createElement('img');
    closeIcon.classList.add('product-modal__close');
    closeIcon.src = '../assets/icons/x-square-fill-green.svg';
    closeIcon.alt = 'Close dialog icon';
    productDetailsDialog.insertBefore(closeIcon, productDetailsDialog.firstChild);

    closeIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        productDetailsDialog.innerHTML = '';
        productDetailsDialog.classList.remove('product-modal--active');
    });

    dialog.classList.add('product-modal--active');
};

export const filterProdutsByPrice = (min, max, current) => {
    const filteredArray = current.filter((product) => {
        if (
            parseInt(product.price.replaceAll('.', '')) >=
            min &&
            parseInt(product.price.replaceAll('.', '')) <=
            max
        ) {
            return product;
        }
    });

    return filteredArray;
};

export const filterProdutsByText = (criteria) => {
    const regEx = new RegExp(criteria, 'gi');

    const filteredProducts = products.filter((product) => {
        if (regEx.test(product.item) || regEx.test(product.description)) {
            return product;
        }
    });

    return filteredProducts;
};