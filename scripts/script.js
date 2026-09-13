/* ========================================
   ABDULLAH TRAVELS
   MAIN JAVASCRIPT
======================================== */


/* ========================================
   1. MOBILE NAVIGATION
======================================== */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("show");

        // Change hamburger icon
        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
            menuToggle.setAttribute("aria-label", "Close navigation menu");
        } else {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute("aria-label", "Open navigation menu");
        }

    });

}


/* ========================================
   2. CLOSE MOBILE MENU
      WHEN A LINK IS CLICKED
======================================== */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navLinks) {
            navLinks.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );
        }

    });

});


/* ========================================
   3. CHANGE NAVBAR WHEN SCROLLING
======================================== */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", function () {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ========================================
   4. HERO VIDEO FALLBACK
======================================== */

const heroVideo = document.querySelector(".hero-video");

if (heroVideo) {

    heroVideo.addEventListener("error", function () {

        console.log("Hero video could not be loaded.");

        heroVideo.style.display = "none";

    });

}

/* ========================================
   5. GALLERY LIGHTBOX
======================================== */

const galleryItems = document.querySelectorAll(".gallery-item");

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxCaption = document.getElementById("lightboxCaption");
const lightboxClose = document.getElementById("lightboxClose");


if (
    galleryItems.length > 0 &&
    lightbox &&
    lightboxImage &&
    lightboxCaption &&
    lightboxClose
) {

    galleryItems.forEach(function (item) {

        item.addEventListener("click", function () {

            const image = item.querySelector("img");
            const title = item.querySelector(".image-overlay span");
            const description = item.querySelector(".image-overlay p");

            if (!image) {
                return;
            }

            // Put clicked image inside lightbox
            lightboxImage.src = image.src;

            lightboxImage.alt = image.alt;

            // Create caption
            if (title && description) {

                lightboxCaption.textContent =
                    title.textContent + " - " +
                    description.textContent;

            } else {

                lightboxCaption.textContent = image.alt;

            }

            // Show lightbox
            lightbox.classList.add("show");

            // Prevent page scrolling
            document.body.style.overflow = "hidden";

        });

    });


    // Close button

    lightboxClose.addEventListener("click", function () {

        lightbox.classList.remove("show");

        document.body.style.overflow = "";

    });


    // Close when clicking outside image

    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {

            lightbox.classList.remove("show");

            document.body.style.overflow = "";

        }

    });


    // Close with Escape key

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            lightbox.classList.contains("show")
        ) {

            lightbox.classList.remove("show");

            document.body.style.overflow = "";

        }

    });

}

/* ========================================
   6. CONTACT FORM VALIDATION
======================================== */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    const successMessage =
        document.getElementById("successMessage");


    contactForm.addEventListener("submit", function (event) {

        // Stop the form from actually submitting
        event.preventDefault();


        // Clear previous errors
        clearErrors();


        let isValid = true;


        /* ================================
           NAME VALIDATION
        ================================= */

        if (nameInput.value.trim() === "") {

            showError(
                nameInput,
                "Please enter your name."
            );

            isValid = false;

        } else if (nameInput.value.trim().length < 3) {

            showError(
                nameInput,
                "Name must be at least 3 characters."
            );

            isValid = false;

        } else {

            showSuccess(nameInput);

        }


        /* ================================
           EMAIL VALIDATION
        ================================= */

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {

            showError(
                emailInput,
                "Please enter your email."
            );

            isValid = false;

        } else if (!emailPattern.test(emailInput.value.trim())) {

            showError(
                emailInput,
                "Please enter a valid email address."
            );

            isValid = false;

        } else {

            showSuccess(emailInput);

        }


        /* ================================
           PHONE VALIDATION
        ================================= */

        if (phoneInput.value.trim() === "") {

            showError(
                phoneInput,
                "Please enter your phone number."
            );

            isValid = false;

        } else if (phoneInput.value.trim().length < 7) {

            showError(
                phoneInput,
                "Please enter a valid phone number."
            );

            isValid = false;

        } else {

            showSuccess(phoneInput);

        }


        /* ================================
           SUBJECT VALIDATION
        ================================= */

        if (subjectInput.value.trim() === "") {

            showError(
                subjectInput,
                "Please enter a subject."
            );

            isValid = false;

        } else {

            showSuccess(subjectInput);

        }


        /* ================================
           MESSAGE VALIDATION
        ================================= */

        if (messageInput.value.trim() === "") {

            showError(
                messageInput,
                "Please enter your message."
            );

            isValid = false;

        } else if (messageInput.value.trim().length < 10) {

            showError(
                messageInput,
                "Message must be at least 10 characters."
            );

            isValid = false;

        } else {

            showSuccess(messageInput);

        }


        /* ================================
           FINAL RESULT
        ================================= */

        if (isValid) {

            successMessage.textContent =
                "Your message has been submitted successfully!";

            contactForm.reset();

        } else {

            successMessage.textContent = "";

        }

    });


    /* ================================
       SHOW ERROR
    ================================= */

    function showError(input, message) {

        const formGroup =
            input.closest(".form-group");

        const errorMessage =
            formGroup.querySelector(".error-message");

        formGroup.classList.add("error");

        formGroup.classList.remove("success");

        errorMessage.textContent = message;
    }


    /* ================================
       SHOW SUCCESS
    ================================= */

    function showSuccess(input) {

        const formGroup =
            input.closest(".form-group");

        const errorMessage =
            formGroup.querySelector(".error-message");

        formGroup.classList.remove("error");

        formGroup.classList.add("success");

        errorMessage.textContent = "";
    }


    /* ================================
       CLEAR ERRORS
    ================================= */

    function clearErrors() {

        const formGroups =
            contactForm.querySelectorAll(".form-group");

        formGroups.forEach(function (group) {

            group.classList.remove("error");
            group.classList.remove("success");

            const errorMessage =
                group.querySelector(".error-message");

            if (errorMessage) {
                errorMessage.textContent = "";
            }

        });

    }

}