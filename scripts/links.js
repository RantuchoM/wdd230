const baseURL = "https://rantuchom.github.io/wdd230/";
const linksUrl = `${baseURL}/data/links.json`

async function getLinks() {
    const response = await fetch(linksUrl);
    const data = await response.json();
    console.log(data);
  }
  
  getLinks();