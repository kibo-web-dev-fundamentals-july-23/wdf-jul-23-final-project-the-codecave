// Main code

// Selecting various elements by their data attributes or IDs
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

// Utility function to add event listeners to elements
function addEventOnElem(elem, type, callback) {
  if (elem.length > 1) {
    // If elem is a collection of elements (e.g., a NodeList)
    for (let i = 0; i < elem.length; i++) {
      // Loop through each element in the collection
      elem[i].addEventListener(type, callback);
      // Add the event listener with the specified type and callback function
    }
  } else {
    // If elem is a single element
    elem.addEventListener(type, callback);
    // Add the event listener with the specified type and callback function
  }
}

// Adding event listeners to multiple elements with a common type and callback
addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navbarLinks, "click", closeNavbar);
addEventOnElem(window, "scroll", activeElemOnScroll);

// Handling hover effects for navigation links
navbarLinks.forEach(handleNavbarLinksHover);
buttons.forEach(handleButtonHover);
projectCards.forEach(handleProjectCardHover);
blogCards.forEach(handleProjectCardHover);

// Handling the cookie popup when the DOM is loaded
document.addEventListener("DOMContentLoaded", handleCookiePopup);

// Handling hover effects for card titles
cardTitles.forEach(handleCardTitleHover);

// Adding mouseover and mouseout event listeners to the logoDiv
logoDiv.addEventListener("mouseover", () => {
  showParagraph(logoDiv);
});

logoDiv.addEventListener("mouseout", () => {
  hideParagraph(logoDiv);
});

// Logo functions
// Function to show the logo paragraph on mouseover
function showParagraph(logoDiv) {
  // Find the paragraph within the logo
  const paragraph = logoDiv.querySelector("p");

  // Make the paragraph visible
  if (paragraph) {
    paragraph.style.visibility = "visible";
  }
}

// Function to hide the logo paragraph on mouseout
function hideParagraph(logoDiv) {
  // Find the paragraph within the logo
  const paragraph = logoDiv.querySelector("p");

  // Hide the paragraph
  if (paragraph) {
    paragraph.style.visibility = "hidden";
  }
}

// Navigation functions
// Toggles the navigation menu and overlay's visibility
function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

// Closes the navigation menu
function closeNavbar() {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

// Handles hover effects for navigation links
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

// Handles hover effects for buttons
function handleButtonHover(button) {
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "transparent";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "var(--gunmetal)";
  });
}

// Header on scroll function

// Adds or removes the "active" class from the header based on scroll position
function activeElemOnScroll() {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
}

// Project card functions

// Handles hover effects for project cards
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

// Closes the cookie popup
function closeCookiePopup() {
  cookiePopup.style.display = "none";
}

// Handles the display of the cookie popup when the page loads
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

// Handles hover effects for card titles
function handleCardTitleHover(cardTitle) {
  cardTitle.addEventListener("mouseover", () => {
    cardTitle.classList.add("hover:underline");
  });

  cardTitle.addEventListener("mouseout", () => {
    cardTitle.classList.remove("hover:underline");
  });
}
