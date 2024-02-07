document.addEventListener("DOMContentLoaded",function (){


    const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
    const cards = document.querySelector('#cards');



    async function getProphetData() {
        const results = await fetch(url);
        const data = await results.json();
        console.table(data.prophets);
        displayProphets(data.prophets);
    }
    const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
            let card = document.createElement('section');
            let fullName = document.createElement('h2'); 
            let img = document.createElement('img');
            let birthDate = document.createElement('p');
            let birthPlace = document.createElement('p');

            // Build the h2 content out to show the prophet's full name
            fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
            // Build the image portrait by setting all the relevant attributes
            img.setAttribute('src', prophet.imageurl);
            img.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '340');
            img.setAttribute('height', '440');

            birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

            // Append the section(card) with the created elements
            card.appendChild(fullName); 
            card.appendChild(birthDate);
            card.appendChild(birthPlace);
            card.appendChild(img);

            cards.appendChild(card);

        })
    }

    getProphetData();
});