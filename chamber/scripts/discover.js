document.addEventListener("DOMContentLoaded",function (){


    const url = 'https://rantuchom.github.io/wdd230/chamber/data/members.json';
    const cards = document.querySelector('#cards');



    async function getCompanyData() {
        const results = await fetch(url);
        const data = await results.json();
        console.table(data.companies);
        displayCompanies(data.companies);
    }
    const displayCompanies = (companies) => {
        companies.forEach((company) => {
            let card = document.createElement('section');
            let name = document.createElement('h2'); 
            let img = document.createElement('img');
            let address = document.createElement('p');
            let phone = document.createElement('p');

            // Build the h2 content out to show the company's full name
            name.textContent = company.name; 
            // Build the image portrait by setting all the relevant attributes
            img.setAttribute('src', company.image);
            img.setAttribute('alt', `Logo of ${company.name}`);
            img.setAttribute('loading', 'lazy');
            img.setAttribute('width', '340');
            img.setAttribute('height', '440');

            address.textContent = `Address: ${company.address}`;
            phone.textContent = `Phone: ${company.birthplace}`;

            // Append the section(card) with the created elements
            card.appendChild(name); 
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(img);

            cards.appendChild(card);

        })
    }

    getCompanyData();
});