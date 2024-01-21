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
});
