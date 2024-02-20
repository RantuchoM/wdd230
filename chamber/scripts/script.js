document.addEventListener('DOMContentLoaded', function () {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });
    const root = document.documentElement;
    const modeButton = document.querySelector("#mode");



    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("☾")) {
            root.style.setProperty('--primary-background', '#000');
            root.style.setProperty('--primary-text', '#fff');
            root.style.setProperty('--secondary-background', 'rgb(27, 27, 27)');
            root.style.setProperty('--secondary-text', '#fff');
            modeButton.textContent = "🔆";

        } else {
            root.style.setProperty('--primary-background', '#bbb');
            root.style.setProperty('--primary-text', '#333');
            root.style.setProperty('--secondary-background', '#fff');
            root.style.setProperty('--secondary-text', '#1a237e');
            modeButton.textContent = "☾";


        }
    });

    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.getElementById('lastVisit');
    const currentDate = Date.now();
    // milliseconds to days constant = 1000 ms/s * 60 s/m * 60 m/h * 24 h/day
    const msToDays = 84600000;
    // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
    let lastVisit = Number(window.localStorage.getItem("numVisits-ls"));
    let difference = (currentDate - lastVisit) / msToDays;
    if (visitsDisplay) {
        if (!lastVisit) {
            displayBanner("Welcome! Let us know if you have any questions.");
        } else if (difference < 1) {
            displayBanner("Back so soon! Awesome!");
        } else {
            displayBanner(`You last visited ${Math.ceil(difference)} days ago.`);
        }

        // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
        localStorage.setItem("numVisits-ls", currentDate);

        function displayBanner(message) {
            visitsDisplay.textContent = message;
            visitsDisplay.style.display = "block";
            setTimeout(function () {
                visitsDisplay.style.display = "none";
            }, 5000); // 5 seconds
        }
    }


});


