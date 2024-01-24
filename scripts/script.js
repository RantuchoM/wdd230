document.addEventListener('DOMContentLoaded', function () {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    const cards = document.querySelectorAll(".card");
    const header = document.querySelector("header");


    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("☾")) {
            header.style.background = "rgb(27, 27, 27)";
            header.style.color = "#fff";
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "🔆";
            cards.forEach(card => {
                card.style.background = "rgb(27, 27, 27)";
            });
        } else {
            header.style.background = "rgb(196, 195, 195)";
            header.style.color = "#000";
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "☾";
            cards.forEach(card => {
                card.style.background = "rgb(196, 195, 195)";
            });

        }
    });

    // 1️⃣ Initialize display element variable
    const visitsDisplay = document.querySelector(".visits");

    // 2️⃣ Get the stored VALUE for the numVisits-ls KEY in localStorage if it exists. If the numVisits KEY is missing, then assign 0 to the numVisits variable.
    let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

    // 3️⃣ Determine if this is the first visit or display the number of visits. We wrote this example backwards in order for you to think deeply about the logic.
    if (numVisits !== 0) {
        visitsDisplay.textContent = numVisits;
    } else {
        visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    }

    // 4️⃣ increment the number of visits by one.
    numVisits++;

    // 5️⃣ store the new visit total into localStorage, key=numVisits-ls
    localStorage.setItem("numVisits-ls", numVisits);

    // 💡A client can view the localStorage data using the Applications panel in the browsers's DevTools - check it out on any major site.

});
