// ========================================
// ELEMENTS
// ========================================

const shopButton = document.getElementById("shop-button");
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

let quantity = 1;



// ========================================
// SHOP NOW
// ========================================

shopButton.addEventListener("click", () => {

    shop.scrollIntoView({
        behavior: "smooth"
    });

});



// ========================================
// MENU
// ========================================

menuButton.addEventListener("click", () => {

    shop.scrollIntoView({
        behavior: "smooth"
    });

});



// ========================================
// WISHLIST
// ========================================

heart.addEventListener("click", () => {

    if (heart.textContent.trim() === "♡") {

        heart.textContent = "♥";

    } else {

        heart.textContent = "♡";

    }

});



// ========================================
// FAKE MESSAGE FUNCTION
// ========================================

function showMessage(text) {

    fakeMessageText.textContent = text;

    fakeMessage.classList.add("show");

    setTimeout(() => {

        fakeMessage.classList.remove("show");

    }, 2200);

}



// ========================================
// BAG
// ========================================

cart.addEventListener("click", () => {

    showMessage("YOUR BAG IS CURRENTLY EMPTY.");

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


        // RESET SIZES

        sizeButtons.forEach(button => {

            button.classList.remove("selected");

        });


        // HIDE SIZE OPTIONS FOR NON-CLOTHING ITEMS

        if (type === "onesize") {

            sizeSection.style.display = "none";

        } else {

            sizeSection.style.display = "block";

        }


        // OPEN MODAL

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

    if (quantity < 10) {

        quantity++;

        quantityDisplay.textContent = quantity;

    }

});



// ========================================
// ADD TO BAG
// ========================================

addToBag.addEventListener("click", () => {

    showMessage("NOT AVAILABLE IN YOUR REGION.");

});