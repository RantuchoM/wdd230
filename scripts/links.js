document.addEventListener("DOMContentLoaded", function () {
  const baseURL = "https://rantuchom.github.io/wdd230";
  const linksUrl = `${baseURL}/data/links.json`
  const section = document.getElementById('weekMenu');

  async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
    displayLinks(data.weeks);
  }

  function displayLinks(weeks) {
    weeks.forEach(week => {
      let li = document.createElement('li');
      let aList = [];

      // Create the week text
      let weekText = document.createTextNode(`${week.week}: `);
      li.appendChild(weekText);

      // Create <a> elements for each link
      week.links.forEach(link => {
        let a = document.createElement('a');
        a.href = link.url;
        a.textContent = link.title;
        aList.push(a);
      });

      // Append <a> elements to the <li> joined by " | "
      aList.forEach((a, index) => {
        li.appendChild(a);
        if (index < aList.length - 1) {
          let separator = document.createTextNode(" | ");
          li.appendChild(separator);
        }
      });

      // Append the <li> to the section
      section.appendChild(li);
    });
  }


  getLinks();
});