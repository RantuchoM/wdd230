document.getElementById("currentYear").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;

document.getElementById("timestamp").value = new Date().toISOString();
