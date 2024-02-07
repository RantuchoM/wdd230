document.addEventListener("DOMContentLoaded", function () {

    const lat = 49.75;
    const lon = 6.65;


    // select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('figcaption');


    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=2ea3a0767f8a23c8364f4bcfd8d318f9`;



    async function apiFetch() {
        try {
            const response = await fetch(url);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // testing only
                displayResults(data); // uncomment when ready
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }


    function displayResults(data) {
        const curr = data.current;
        currentTemp.innerHTML = `${curr.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/w/${curr.weather[0].icon}.png`;
        let desc = curr.weather[0].description;
        weatherIcon.setAttribute('src', iconsrc);
        weatherIcon.setAttribute('alt', `Icon of ${curr.weather[0].main}`);
        captionDesc.textContent = `${desc}`;
    }

    apiFetch();
});