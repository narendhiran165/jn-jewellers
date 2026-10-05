// ==============================
// MOBILE MENU
// ==============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {
        navMenu.classList.remove("active");
    });

});


// ==============================
// WHATSAPP SETTINGS
// ==============================

// Demo number.
// Replace this with the actual client's WhatsApp number later.

const whatsappNumber = "919999999999";


// ==============================
// PRODUCT ENQUIRY
// ==============================

const enquiryButtons = document.querySelectorAll(".enquire-btn");

enquiryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName = this.getAttribute("data-product");

        const message =
            "Hello JN Jewellers!%0A%0A" +
            "I am interested in: " +
            productName +
            "%0A%0APlease share more details.";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            message;

        window.open(whatsappURL, "_blank");

    });

});


// ==============================
// MAIN WHATSAPP BUTTON
// ==============================

const mainWhatsapp = document.getElementById("mainWhatsapp");

mainWhatsapp.addEventListener("click", function () {

    const message =
        "Hello JN Jewellers!%0A%0A" +
        "I would like to know more about your jewellery collections.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        message;

    window.open(whatsappURL, "_blank");

});


// ==============================
// FLOATING WHATSAPP
// ==============================

const whatsappFloat = document.getElementById("whatsappFloat");

whatsappFloat.addEventListener("click", function (event) {

    event.preventDefault();

    const message =
        "Hello JN Jewellers! I would like to enquire about your jewellery collections.";

    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);

    window.open(whatsappURL, "_blank");

});


// ==============================
// SIMPLE SCROLL REVEAL
// ==============================

const revealElements = document.querySelectorAll(
    ".collection-card, .product-card, .why-card, .review-card"
);

const revealObserver = new IntersectionObserver(
    function (entries, observer) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    revealObserver.observe(element);

});