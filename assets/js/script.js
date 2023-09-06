"use strict";

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
};

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

// header active when window scroll down to 100px

const header = document.querySelector("[data-header]");

const activeElemOnScroll = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};

addEventOnElem(window, "scroll", activeElemOnScroll);

// CHANGE THE DISPLAY COLOUR OF NAVBAR ELEMENTS WHEN HOVERED ON.

navbarLinks.forEach((link) => {
  link.addEventListener("mouseover", () => {
    link.style.color = "var(--sefety-orange)";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "var(--davys-gray)"; // Restore the default color on mouseout
  });
});

// CHANGE THE DISPLAY COLOUR OF BUTTON ELEMENTS WHEN HOVERED ON.

const buttons = document.querySelectorAll(".btn");

// Add event listeners for hover and focus
buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "transparent";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "var(--gunmetal)";
  });
});

// Function to show the paragraph on mouseover
function showParagraph(logoDiv) {
  // Find the paragraph within the logo
  const paragraph = logoDiv.querySelector("p");

  // Make the paragraph visible
  if (paragraph) {
    paragraph.style.visibility = "visible";
  }
}

// Function to hide the paragraph on mouseout
function hideParagraph(logoDiv) {
  // Find the paragraph within the logo
  const paragraph = logoDiv.querySelector("p");

  // Hide the paragraph
  if (paragraph) {
    paragraph.style.visibility = "hidden";
  }
}

// Zoom in and out on the projects
// Add css filters to all project cards

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach((card) => {
  const imgCover = card.querySelector(".img-cover");

  // Set initial brightness to 80%
  // imgCover.style.filter = "brightness(80%)";

  card.addEventListener("mouseenter", () => {
    imgCover.style.transform = "scale(1.19)";
    imgCover.style.filter = "brightness(105%)";
  });

  card.addEventListener("mouseleave", () => {
    imgCover.style.transform = "scale(1)";
    imgCover.style.filter = "brightness(80%)";
  });
});

const blogCards = document.querySelectorAll(".blog-card");

blogCards.forEach((card) => {
  const imgCover = card.querySelector(".img-cover");

  // Set initial brightness to 80%
  // imgCover.style.filter = "brightness(80%)";

  card.addEventListener("mouseenter", () => {
    imgCover.style.transform = "scale(1.19)";
    imgCover.style.filter = "brightness(105%)";
  });

  card.addEventListener("mouseleave", () => {
    imgCover.style.transform = "scale(1)";
    imgCover.style.filter = "brightness(80%)";
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const cookiePopup = document.getElementById("cookie-popup");
  const acceptCookieButton = document.getElementById("accept-cookie");
  const rejectCookieButton = document.getElementById("reject-cookie");
  const cancelIcon = document.getElementById("cancel-icon");

  // Function to close the cookie popup
  function closeCookiePopup() {
    cookiePopup.style.display = "none";
  }

  // Check if the user has accepted or rejected the cookie
  if (!localStorage.getItem("cookieAccepted")) {
    // If not, show the cookie popup
    cookiePopup.style.display = "block";

    // Add event listener to the accept button
    acceptCookieButton.addEventListener("click", function () {
      // Hide the cookie popup
      closeCookiePopup();

      // Set a flag in local storage to remember the user's choice
      localStorage.setItem("cookieAccepted", "true");
    });

    // Add event listener to the reject button
    rejectCookieButton.addEventListener("click", function () {
      // Hide the cookie popup
      closeCookiePopup();

      // Set a flag in local storage to remember the user's choice
      localStorage.setItem("cookieRejected", "true");
    });

    // Add event listener to the cancel icon
    cancelIcon.addEventListener("click", function () {
      // Hide the cookie popup
      closeCookiePopup();
    });
  }
});

// Get all elements with the class '.card-title'
const cardTitles = document.querySelectorAll(".blog-heads");

// Loop through all the elements and add event listeners
cardTitles.forEach((cardTitle) => {
  cardTitle.addEventListener("mouseover", function () {
    cardTitle.classList.add("hover:underline");
  });

  cardTitle.addEventListener("mouseout", function () {
    cardTitle.classList.remove("hover:underline");
  });
});
