document.addEventListener("DOMContentLoaded", function () {


    const url = 'https://rantuchom.github.io/wdd230/chamber/data/members.json';
    const directory = document.querySelector('#directory');



    async function getDirectoryData(style) {
        const results = await fetch(url);
        const data = await results.json();
        directory.innerHTML = '';
        //console.table(data.companies);
        displayCompanies(data.companies, style);
    }
    const displayCompanies = (companies, style) => {
        if (style === 'card') {
            companies.forEach((company) => {

                let card = document.createElement('section');
                let name = document.createElement('h2');
                let img = document.createElement('img');
                let address = document.createElement('p');
                let phone = document.createElement('p');
                let website = document.createElement('p');
                let membership = document.createElement('p');
                let otherInfo = document.createElement('p');
                


                name.textContent = company.name;

                img.setAttribute('src', company.image);
                img.setAttribute('alt', `Logo of ${company.name}`);
                img.setAttribute('loading', 'lazy');
                img.setAttribute('width', '340');
                img.setAttribute('height', '440');

                address.innerHTML = `<b>Address:</b> ${company.address}`;
                phone.innerHTML = `<b>Phone:</b> ${company.phone}`;
                website.innerHTML = `<a href="${company.website}">Website</a>`;
                membership.innerHTML = `<b>Membership:</b> ${company.membership_level}`;
                otherInfo.innerHTML = `<i>${company.other_info}</i>`;

                // Append the section(card) with the created elements
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(address);
                card.appendChild(phone);
                card.appendChild(website);
                card.appendChild(membership);
                card.appendChild(otherInfo);


                directory.appendChild(card);
            });
        }
        else {

            let table = document.createElement('table');
            table.classList.add('directoryTable');

            // Create header row
            let headerRow = table.insertRow();
            let headerNames = ['Name', 'Address', 'Phone', 'Website', 'Membership Level', 'Other Info'];


            headerNames.forEach(headerName => {
                let headerCell = document.createElement('th');
                headerCell.textContent = headerName;
                headerRow.appendChild(headerCell);
            });


            companies.forEach((company) => {
                let row = table.insertRow();


                let nameCell = row.insertCell(0);
                let addressCell = row.insertCell(1);
                let phoneCell = row.insertCell(2);
                let websiteCell = row.insertCell(3);
                let membershipCell = row.insertCell(4);
                let otherInfoCell = row.insertCell(5);

                nameCell.textContent = company.name;
                addressCell.textContent = company.address;
                phoneCell.textContent = company.phone;
                websiteCell.innerHTML = `<a href="${company.website}">Website</a>`;
                membershipCell.textContent = company.membership_level;
                otherInfoCell.textContent = company.other_info;
            });

            directory.appendChild(table);
        }





    }

    getDirectoryData("grid");

    const toggleButton = document.querySelector("#toggleView");
const display = document.querySelector("#directory");

toggleButton.addEventListener("click", toggleView);

function toggleView() {
    if (display.classList.contains("directoryGrid")) {
        display.classList.remove("directoryGrid");
        display.classList.add("directoryList");
        toggleButton.textContent = "⏹️ Grid";
        getDirectoryData("list");
    } else {
        display.classList.remove("directoryList");
        display.classList.add("directoryGrid");
        toggleButton.textContent = "📄 List";
        getDirectoryData("card");
    }
}

});