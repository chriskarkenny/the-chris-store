// ========================================
// ELEMENTS
// ========================================

const shopButton = document.getElementById("shop-button");
const returnShopButton = document.getElementById("return-shop");
const shop = document.getElementById("shop");

const cart = document.getElementById("cart");
const heart = document.getElementById("heart");
const menuButton = document.getElementById("menu-button");

const fakeMessage = document.getElementById("fake-message");
const fakeMessageText = document.getElementById("fake-message-text");

const products = document.querySelectorAll(".product");

const productModal = document.getElementById("product-modal");
const modalBackdrop = document.getElementById("modal-backdrop");
const modalClose = document.getElementById("modal-close");

const modalImage = document.getElementById("modal-product-image");
const modalName = document.getElementById("modal-product-name");
const modalPrice = document.getElementById("modal-product-price");
const modalDescription = document.getElementById("modal-product-description");

const sizeSection = document.getElementById("size-section");
const sizeButtons = document.querySelectorAll(".size-button");

const quantityMinus = document.getElementById("quantity-minus");
const quantityPlus = document.getElementById("quantity-plus");
const quantityDisplay = document.getElementById("quantity");

const addToBag = document.getElementById("add-to-bag");

const footerJokes = document.querySelectorAll(".footer-joke");

let quantity = 1;



// ========================================
// SCROLL TO SHOP
// ========================================

function scrollToShop() {

    shop.scrollIntoView({
        behavior: "smooth"
    });

}

shopButton.addEventListener("click", scrollToShop);

returnShopButton.addEventListener("click", scrollToShop);

menuButton.addEventListener("click", scrollToShop);



// ========================================
// WISHLIST
// ========================================

heart.addEventListener("click", () => {

    if (heart.textContent.trim() === "♡") {

        heart.textContent = "♥";

        showMessage("AN EXCELLENT DECISION.");

    } else {

        heart.textContent = "♡";

        showMessage("YOUR DECISION HAS BEEN NOTED.");

    }

});



// ========================================
// MESSAGE FUNCTION
// ========================================

let messageTimer;

function showMessage(text) {

    clearTimeout(messageTimer);

    fakeMessageText.textContent = text;

    fakeMessage.classList.add("show");

    messageTimer = setTimeout(() => {

        fakeMessage.classList.remove("show");

    }, 2500);

}



// ========================================
// BAG
// ========================================

cart.addEventListener("click", () => {

    showMessage("YOUR BAG IS CURRENTLY DEVOID OF CHRIS.");

});



// ========================================
// OPEN PRODUCT
// ========================================

products.forEach(product => {

    product.addEventListener("click", () => {

        const name = product.dataset.name;
        const price = product.dataset.price;
        const image = product.dataset.image;
        const description = product.dataset.description;
        const type = product.dataset.type;


        modalName.textContent = name;

        modalPrice.textContent = price;

        modalImage.src = image;

        modalImage.alt = name;

        modalDescription.textContent = description;


        // RESET QUANTITY

        quantity = 1;

        quantityDisplay.textContent = quantity;


        // RESET SIZE SELECTION

        sizeButtons.forEach(button => {

            button.classList.remove("selected");

        });


        // HIDE SIZE OPTIONS FOR ONE-SIZE PRODUCTS

        if (type === "onesize") {

            sizeSection.style.display = "none";

        } else {

            sizeSection.style.display = "block";

        }


        // OPEN

        productModal.classList.add("open");

        document.body.classList.add("modal-open");

    });

});



// ========================================
// CLOSE PRODUCT
// ========================================

function closeProductModal() {

    productModal.classList.remove("open");

    document.body.classList.remove("modal-open");

}

modalClose.addEventListener("click", closeProductModal);

modalBackdrop.addEventListener("click", closeProductModal);

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        closeProductModal();

    }

});



// ========================================
// SIZE SELECTION
// ========================================

sizeButtons.forEach(button => {

    button.addEventListener("click", () => {

        sizeButtons.forEach(size => {

            size.classList.remove("selected");

        });

        button.classList.add("selected");

    });

});



// ========================================
// QUANTITY
// ========================================

quantityMinus.addEventListener("click", () => {

    if (quantity > 1) {

        quantity--;

        quantityDisplay.textContent = quantity;

    }

});


quantityPlus.addEventListener("click", () => {

    if (quantity < 12) {

        quantity++;

        quantityDisplay.textContent = quantity;

    } else {

        showMessage("LIMIT 12 PER HOUSEHOLD.");

    }

});



// ========================================
// ADD TO BAG
// ========================================

addToBag.addEventListener("click", () => {

    showMessage(
        "THIS ITEM IS TOO EXCLUSIVE FOR YOUR CURRENT REGION."
    );

});



// ========================================
// FOOTER JOKES
// ========================================

footerJokes.forEach(button => {

    button.addEventListener("click", () => {

        showMessage(button.dataset.message);

    });

});
