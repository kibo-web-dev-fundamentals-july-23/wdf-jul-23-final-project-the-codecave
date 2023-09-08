("use strict");

// Main code
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const header = document.querySelector("[data-header]");
const buttons = document.querySelectorAll(".btn");
const projectCards = document.querySelectorAll(".project-card");
const blogCards = document.querySelectorAll(".blog-card");
const cookiePopup = document.getElementById("cookie-popup");
const acceptCookieButton = document.getElementById("accept-cookie");
const rejectCookieButton = document.getElementById("reject-cookie");
const cancelIcon = document.getElementById("cancel-icon");
const cardTitles = document.querySelectorAll(".blog-heads");
const logoDiv = document.querySelector(".logoDiv");

addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navbarLinks, "click", closeNavbar);
addEventOnElem(window, "scroll", activeElemOnScroll);

navbarLinks.forEach(handleNavbarLinksHover);
buttons.forEach(handleButtonHover);
projectCards.forEach(handleProjectCardHover);
blogCards.forEach(handleProjectCardHover);

document.addEventListener("DOMContentLoaded", handleCookiePopup);
cardTitles.forEach(handleCardTitleHover);

logoDiv.addEventListener("mouseover", () => {
  showParagraph(logoDiv);
});

logoDiv.addEventListener("mouseout", () => {
  hideParagraph(logoDiv);
});

// Utility function to add event listeners to elements
function addEventOnElem(elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}

// Navigation functions
function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

function closeNavbar() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

function handleNavbarLinksHover() {
  navbarLinks.forEach((link) => {
    link.addEventListener("mouseover", () => {
      link.style.color = "var(--sefety-orange)";
    });

    link.addEventListener("mouseout", () => {
      link.style.color = "var(--davys-gray)";
    });
  });
}

// Button functions
function handleButtonHover(button) {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "transparent";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "var(--gunmetal)";
  });
}

// Header on scroll function
function activeElemOnScroll() {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// Project card functions
function handleProjectCardHover(card) {
  const imgCover = card.querySelector(".img-cover");
  card.addEventListener("mouseenter", () => {
    imgCover.style.transform = "scale(1.19)";
    imgCover.style.filter = "brightness(105%)";
  });

  card.addEventListener("mouseleave", () => {
    imgCover.style.transform = "scale(1)";
    imgCover.style.filter = "brightness(80%)";
  });
}

// Cookie popup functions
function closeCookiePopup() {
  cookiePopup.style.display = "none";
}

function handleCookiePopup() {
  if (!localStorage.getItem("cookieAccepted")) {
    cookiePopup.style.display = "block";

    acceptCookieButton.addEventListener("click", () => {
      closeCookiePopup();
      localStorage.setItem("cookieAccepted", "true");
    });

    rejectCookieButton.addEventListener("click", () => {
      closeCookiePopup();
      localStorage.setItem("cookieRejected", "true");
    });

    cancelIcon.addEventListener("click", () => {
      closeCookiePopup();
    });
  }
}

// Card title functions
function handleCardTitleHover(cardTitle) {
  cardTitle.addEventListener("mouseover", () => {
    cardTitle.classList.add("hover:underline");
  });

  cardTitle.addEventListener("mouseout", () => {
    cardTitle.classList.remove("hover:underline");
  });
}
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
