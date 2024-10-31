const today = new Date();
const year = document.getElementById("currentyear");
year.innerHTML = today.getFullYear();

const lastmodified = document.getElementById("lastModified");
lastmodified.innerHTML = `Last Modification: ${document.lastModified}`;
