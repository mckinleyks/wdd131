const products = [
    { name: "Product 1" },
    { name: "Product 2" },
    { name: "Product 3" },
    { name: "Product 4" },
    { name: "Product 5" },
];

const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

document.addEventListener("DOMContentLoaded", () => {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = document.lastModified;
});