const hamburgerButton = document.getElementById("hamburger");
const menu = document.getElementById("menu");
const closeButton = document.getElementById("close");

hamburgerButton.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
        menu.classList.remove("hidden");
        menu.classList.add("visible");
        hamburgerButton.innerHTML = "&#10006;";
    } else {
        menu.classList.remove("visible");
        menu.classList.add("hidden");
        hamburgerButton.innerHTML = "&#9776";
    }
});

closeButton.addEventListener("click", () => {
    menu.classList.remove("visible");
    menu.classList.add("hidden");
    hamburgerButton.innerHTML = "&#9776;";
})

const yearElement = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

document.addEventListener("DOMContentLoaded", function() {
    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    } else {
        console.log("Element with ID 'last-modified' not found.");
    }

});


