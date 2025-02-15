document.addEventListener("DOMContentLoaded", () => {
    loadTheme();
    displayDestinations();
});


document.addEventListener("DOMContentLoaded", () => {
    displayDestinations();
});

// Function to display destinations
function displayDestinations() {
    const container = document.getElementById("destinations-container");
    if (!container) return; // Stop execution if container doesn't exist.

    // Get destinations from localStorage or set defaults if none exist
    let destinations = JSON.parse(localStorage.getItem('destinations'));

    if (!destinations) {
        destinations = [
            { name: 'Bali', country: 'Indonesia', description: 'Beautiful beaches and culture' },
            { name: 'Paris', country: 'France', description: 'City of lights, romantic atmosphere' },
            { name: 'Kyoto', country: 'Japan', description: 'Traditional temples and gardens' },
            { name: 'Dubai', country: 'UAE', description: 'Modern architecture and luxury' },
            { name: 'Maldives', country: 'Maldives', description: 'Tropical paradise with clear waters' },
            { name: 'Tokyo', country: 'Japan', description: 'Vibrant city blending tradition with modern' },
            { name: 'Phuket', country: 'Thailand', description: 'Tropical beaches and vibrant nightlife' },
            { name: 'Cabo San Lucas', country: 'Mexico', description: 'Beaches, water sports, and luxury resorts' },
            { name: 'Lisbon', country: 'Portugal', description: 'Historical city with stunning views' },
            { name: 'Hanoi', country: 'Vietnam', description: 'Bustling streets and historic sites' }
        ];

        // Set all destinations as not visited initially
        destinations = destinations.map(dest => ({ ...dest, visited: false }));

        // Save to localStorage
        localStorage.setItem('destinations', JSON.stringify(destinations));
    }

    container.innerHTML = ""; // Clear the container before adding new items

    // Loop through and create the HTML elements for each destination
    destinations.forEach(dest => {
        const card = document.createElement("div");
        card.classList.add("destination-card");

        // Add the HTML content for each destination
        card.innerHTML = `
            <h3>${dest.name}, ${dest.country}</h3>
            <p>${dest.description}</p>
            <button onclick="markVisited('${dest.name}')" ${dest.visited ? 'disabled' : ''}>
                ${dest.visited ? 'Visited' : 'Mark as Visited'}
            </button>
        `;

        container.appendChild(card);
    });
}

// Function to mark a destination as visited
function markVisited(name) {
    let destinations = JSON.parse(localStorage.getItem('destinations'));

    // Find the destination and mark it as visited
    destinations = destinations.map(dest => {
        if (dest.name === name) {
            dest.visited = true; // Mark as visited
        }
        return dest;
    });

    // Save the updated destinations list to localStorage
    localStorage.setItem('destinations', JSON.stringify(destinations));

    // Re-render the destinations to reflect the change
    displayDestinations();
}

    // Update the UI for the visited destination
    const destinationCards = document.querySelectorAll('.destination-card');
    destinationCards.forEach(card => {
        const title = card.querySelector('h3');
        if (title && title.textContent.includes(name)) {
            card.classList.add('visited'); // Add the 'visited' class to the card
            card.querySelector('button').disabled = true; // Disable the button
            card.querySelector('button').textContent = "Visited"; // Change button text
        }
    });

//Form section

document.getElementById("trip-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    console.log("Form submitted!");

    // Get the values from the form
    const departureDate = document.getElementById("departure").value;
    const returnDate = document.getElementById("return").value;
    const destination = document.getElementById("destination").value;
    const tripType = document.getElementById("trip-type").value;
    const travelers = document.getElementById("travelers").value;

    // Check if all required fields are filled
    if (!departureDate || !returnDate || !destination || !tripType || !travelers) {
        document.getElementById("trip-result").innerHTML = "<p style='color: red;'>Please fill in all the fields.</p>";
        return; // Stop further processing if there's any empty field
    }

    const resultHtml = `
        <h3>Your Trip Details:</h3>
        <p><strong>Departure Date:</strong> ${departureDate}</p>
        <p><strong>Return Date:</strong> ${returnDate}</p>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Trip Type:</strong> ${tripType}</p>
        <p><strong>Number of Travelers:</strong> ${travelers}</p>
    `;

    // Display the result
    document.getElementById("trip-result").innerHTML = resultHtml;
});

    //Footer info
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