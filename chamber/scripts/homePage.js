document.addEventListener("DOMContentLoaded", async function () {
    const url = 'https://rantuchom.github.io/wdd230/chamber/data/members.json';
    const spotlight = document.querySelector('#spotlights');

    async function getSpotlightData() {
        try {
            const results = await fetch(url);
            const data = await results.json();
            const silverGoldMembers = data.companies.filter(company => company.membership_level === 'Silver' || company.membership_level === 'Gold');
            const randomMembers = getRandomMembers(silverGoldMembers, 3);
            displaySpotlight(randomMembers);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    function getRandomMembers(members, count) {
        const shuffled = members.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    function displaySpotlight(members) {
        ;
        members.forEach(member => {
            let spotlightItem = document.createElement('div');
            let name = document.createElement('h3');
            let address = document.createElement('p');
            let phone = document.createElement('p');
            let website = document.createElement('p');
            let separater = document.createElement('p');

            name.textContent = member.name;
            address.textContent = `Address: ${member.address}`;
            phone.textContent = `Phone: ${member.phone}`;
            website.innerHTML = `<a href="${member.website}">Website</a>`;

            spotlightItem.appendChild(name);
            spotlightItem.appendChild(address);
            spotlightItem.appendChild(phone);
            spotlightItem.appendChild(website);

            spotlight.appendChild(spotlightItem);
        });
    }

    getSpotlightData();

    const currentEventsSection = document.querySelector("#currentEvents");


    const today = new Date();
    const dayOfWeek = today.getDay();
    const showBanner = dayOfWeek >= 1 && dayOfWeek <= 3

    if (showBanner) {
        const banner = document.createElement("div");
        banner.innerHTML = `
            <div class="banner">
            
                <p>Join us for our next Meeting <br>this Wednesday at 7:00 p.m.!</p>
                <br><br>
                <button id="closeBanner">❌</button>
            </div>
        `;
        currentEventsSection.appendChild(banner);

        const closeBannerButton = document.querySelector("#closeBanner");
        closeBannerButton.addEventListener("click", function () {
            banner.remove();
        });
    }






    const lat = -38.72;
    const lon = -62.27;


    // select HTML elements in the document
    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#weather-desc');


    const urlW = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=2ea3a0767f8a23c8364f4bcfd8d318f9`;



    async function apiFetch() {
        try {
            const response = await fetch(urlW);
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


    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=2ea3a0767f8a23c8364f4bcfd8d318f9`

    async function forecastFetch() {
        try {
            const response = await fetch(urlForecast);
            if (response.ok) {
                const data = await response.json();
                console.log(data); // testing only
                displayForecast(data);
            } else {
                throw Error(await response.text());
            }
        } catch (error) {
            console.log(error);
        }
    }

    function displayForecast(data) {
        const array = data.list;
        let forecast = document.getElementById('forecast');
        console.log(forecast);
        const hours = [8, 16, 24];
        for (let i = 0; i < hours.length; i++) {
            let day = array[hours[i]];
            let section = document.createElement('section');
            const iconsrc = `https://openweathermap.org/img/w/${day.weather[0].icon}.png`;
            let weatherIcon = document.createElement('img');
            let date = document.createElement('h4');
            let main = document.createElement('p');
            weatherIcon.setAttribute('src', iconsrc);
            weatherIcon.setAttribute('alt', `Icon of ${day.weather[0].main}`);
            main.textContent = day.weather[0].main;
            console.log(day.dt_txt);
            date.textContent = formatDate(day.dt_txt);
            console.log(`${day.weather[0].main}`)
            console.log(date);
            section.appendChild(date);
            section.appendChild(weatherIcon);
            section.appendChild(main); 
            forecast.appendChild(section);
        }
    }

    function formatDate(inputDate) {
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
        const dateObj = new Date(inputDate);
        const dayOfWeek = days[dateObj.getDay()];
        const dayOfMonth = dateObj.getDate();
        const month = months[dateObj.getMonth()];
    
        return `${dayOfWeek} ${dayOfMonth} ${month}`;
    }
    
   


    forecastFetch();

});
