document.addEventListener("DOMContentLoaded", async function () {
    document.getElementById("currentYear").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

    const timestampElement = document.getElementById("timestamp");
    if (timestampElement) {
        timestampElement.value = new Date().toISOString();
    }
})
