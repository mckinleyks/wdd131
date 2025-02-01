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


    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Salt Lake City Utah",
          location: "Salt Lake City, UT",
          dedicated: "1893, April, 6-24",
          area: 382207,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-1092.jpg"
        },
        {
           templeName: "Logan Utah",
           location: "Logan, UT",
           dedicated: "1884, May, 17-19",
           area: 119619,
           imageUrl: 
           "https://churchofjesuschristtemples.org/assets/img/temples/logan-utah-temple/logan-utah-temple-40550.jpg"   
        },
        {
          templeName: "Oquirrh Mountain Utah",
          location: "Oquirrh Mountain, Utah",
          dedicated: "2009, August, 21-23",
          area: 60000,
          imageUrl:
          "https://churchofjesuschristtemples.org/assets/img/temples/oquirrh-mountain-utah-temple/oquirrh-mountain-utah-temple-55327-thumb.jpg"

        },
      ];

    
    createTempleCard(temples);
    
    document.querySelector('[title="Old"]').addEventListener("click", () => {
        createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) < 1900));
    });

    document.querySelector('[title="New"]').addEventListener("click", () => {
        createTempleCard(temples.filter(temple => parseInt(temple.dedicated.split(",")[0]) > 2000));
    });

    document.querySelector('[title="Large"]').addEventListener("click", () => {
        createTempleCard(temples.filter(temple => temple.area > 90000));
    });
    
    document.querySelector('[title="Small"]').addEventListener("click", () => {
        createTempleCard(temples.filter(temple => temple.area < 10000));
    });

    document.querySelector(".active").addEventListener("click", () => {
        createTempleCard(temples);
    });

    function createTempleCard(filteredTemples) {
        const grid = document.querySelector(".res-grid");
        grid.innerHTML = "";

        filteredTemples.forEach(temple=> {
            let card = document.createElement("section");
            let name = document.createElement("h3");
            let location = document.createElement("p");
            let dedication = document.createElement("p");
            let area = document.createElement("p");
            let img = document.createElement("img");

            name.textContent = temple.templeName;
            location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;
            dedication.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;
            area.innerHTML = `<span class="label">Size:</span> ${temple.area} sq ft`;
            img.setAttribute("src", temple.imageUrl);
            img.setAttribute("alt", `${temple.templeName} Temple`);
            img.setAttribute("loading", "lazy");

            card.appendChild(name);
            card.appendChild(location);
            card.appendChild(dedication);
            card.appendChild(area);
            card.appendChild(img);

            grid.appendChild(card);

        });
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
