function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChillFactor = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 
            0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChillFactor.toFixed(2);
    } else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = document.lastModified;

    const temperature = 10;
    const windSpeed = 5;
    const windChill = calculateWindChill(temperature, windSpeed);
    document.getElementById("windChill").textContent = windChill;
});
