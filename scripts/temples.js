document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close");

    hamburgerButton.addEventListener("click", () => {
        menu.classList.add("visible");
    });

    closeButton.addEventListener("click", () => {
        menu.classList.remove("visible");
    })

    console.log("Hamburger and Close Button Listeners Attached");


    const yearElement = document.getElementById("year");
    const currentYear = new Date().getFullYear();
    if (yearElement) {
        yearElement.textContent = currentYear;
    } else {
        console.log("Element with ID 'year' not found.");
    }

    const lastModifiedElement = document.getElementById("last-modified");
    if (lastModifiedElement) {
        const lastModifiedDate = document.lastModified;
        lastModifiedElement.textContent = lastModifiedDate;
    } else {
        console.log("Element with ID 'last-modified' not found.");
    }
});


