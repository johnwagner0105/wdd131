const menuButton = document.getElementById("menu");
const menu = document.getElementById("navigation");
const imagesContainer = document.getElementById("images-container");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("open");
  menu.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Arequipa Perú",
    location: "Arequipa, Perú",
    dedicated: "2019, December, 15",
    area: 26969,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/arequipa-peru-temple/arequipa-peru-temple-7276.jpg",
  },
  {
    templeName: "Trujillo Perú",
    location: "Trujillo Perú",
    dedicated: "2015, June, 21",
    area: 28200,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/trujillo-peru-temple/trujillo-peru-temple-3713.jpg",
  },
  {
    templeName: "Lima Perú Los Olivos",
    location: "Lima Perú",
    dedicated: "2024, January, 14",
    area: 47413,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lima-peru-los-olivos-temple/lima-peru-los-olivos-temple-42502.jpg",
  },
];

const createTemples = (temples) => {
  imagesContainer.innerHTML = "";
  temples.forEach((temple) => {
    let figure = document.createElement("figure");
    let image = document.createElement("img");
    let title = document.createElement("h2");
    let location = document.createElement("p");
    let dedicated = document.createElement("p");
    let size = document.createElement("p");
    image.setAttribute("src", temple.imageUrl);
    image.setAttribute("alt", temple.templeName);
    image.setAttribute("loading", "lazy");
    title.innerHTML = `${temple.templeName}`;
    location.innerHTML = `${temple.location}`;
    dedicated.innerHTML = `${temple.dedicated}`;
    size.innerHTML = `${temple.area} sq ft`;
    figure.appendChild(title);
    figure.appendChild(location);
    figure.appendChild(dedicated);
    figure.appendChild(size);
    figure.appendChild(image);
    imagesContainer.appendChild(figure);
  });
};

createTemples(temples);

const all = document.getElementById("Home");
all.addEventListener("click", () => {
  createTemples(temples);
});

const old = document.getElementById("Old");
old.addEventListener("click", () => {
  const templesFiltered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() < 1900
  );
  createTemples(templesFiltered);
});

const newTemples = document.getElementById("New");
newTemples.addEventListener("click", () => {
  const templesFiltered = temples.filter(
    (temple) => new Date(temple.dedicated).getFullYear() > 2000
  );
  createTemples(templesFiltered);
});

const large = document.getElementById("Large");
large.addEventListener("click", () => {
  const templesFiltered = temples.filter((temple) => temple.area > 90000);
  createTemples(templesFiltered);
});

const small = document.getElementById("Small");
small.addEventListener("click", () => {
  const templesFiltered = temples.filter((temple) => temple.area < 10000);
  createTemples(templesFiltered);
});
