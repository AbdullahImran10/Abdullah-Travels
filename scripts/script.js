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