document.addEventListener("DOMContentLoaded", function() {
    const hamburgerButton = document.getElementById("hamburger");
    const menu = document.getElementById("menu");
    const closeButton = document.getElementById("close");



    if (hamburgerButton && menu && closeButton) {
        hamburgerButton.addEventListener("click", () => {
            if (menu.classList.contains("hidden")) {
                menu.classList.remove("hidden");
                menu.classList.add("visible");
                hamburgerButton.style.display = "none";
                closeButton.style.display = "block";

            } else {
                menu.classList.remove("visible");
                menu.classList.add("hidden");
                hamburgerButton.style.display = "block";
                closeButton.style.display = "none";
            }
        });

        closeButton.addEventListener("click", () => {
            menu.classList.remove("visible");
            menu.classList.add("hidden");
            hamburgerButton.style.display = "block";
            closeButton.style.display = "none";
        });

    } else {
        console.error("Elements not found: hamburgerButton, menu, or closeButton");
    }

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


