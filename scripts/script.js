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