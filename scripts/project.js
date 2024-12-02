const images = [
  {
    url: "https://img.freepik.com/foto-gratis/collage-cinco-sentidos-flores_23-2150009305.jpg?t=st=1732554205~exp=1732557805~hmac=012e250123d9aed77833c2b7d99bf31878cf31d348c446acd2ce43276aceb521&w=740",
    name: "image1",
    date: "2024-11-25",
    price: 15.5,
  },
  {
    url: "https://img.freepik.com/foto-gratis/collage-cinco-sentidos-flores_23-2150009305.jpg?t=st=1732554205~exp=1732557805~hmac=012e250123d9aed77833c2b7d99bf31878cf31d348c446acd2ce43276aceb521&w=740",
    name: "image2",
    date: "2024-11-24",
    price: 14.5,
  },
  {
    url: "https://img.freepik.com/foto-gratis/collage-cinco-sentidos-flores_23-2150009305.jpg?t=st=1732554205~exp=1732557805~hmac=012e250123d9aed77833c2b7d99bf31878cf31d348c446acd2ce43276aceb521&w=740",
    name: "image3",
    date: "2024-11-23",
    price: 13.5,
  },
  {
    url: "https://img.freepik.com/foto-gratis/collage-cinco-sentidos-flores_23-2150009305.jpg?t=st=1732554205~exp=1732557805~hmac=012e250123d9aed77833c2b7d99bf31878cf31d348c446acd2ce43276aceb521&w=740",
    name: "image4",
    date: "2024-11-26",
    price: 11.5,
  },
];

let icon = document.getElementById("icon-image");
let options = document.getElementById("nav-options");
icon.addEventListener("click", () => {
  //   options.classList.add("opened");
  if (options.classList.contains("opened")) {
    options.classList.remove("opened");
  } else {
    options.classList.add("opened");
  }
});

const showImages = () => {
  const imagesDisplayed = document.getElementById("images-container");
  const sortedImages = images.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );
  console.log(sortedImages);
  if (imagesDisplayed) {
    imagesDisplayed.innerHTML = "";
    const width = window.innerWidth;
    const imageCount = width > 600 ? 3 : 2;

    sortedImages.slice(0, imageCount).forEach((image) => {
      const imgLink = document.createElement("a");
      imgLink.href = `product.html?name=${encodeURIComponent(
        image.name
      )}&price=${encodeURIComponent(image.price)}&url=${encodeURIComponent(
        image.url
      )}`;
      const imgContainer = document.createElement("div");
      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.alt = image.name;
      imgElement.height = 350;
      const imgName = document.createElement("p");
      imgName.innerHTML = image.name;

      imgLink.appendChild(imgContainer);
      imgContainer.appendChild(imgElement);
      imgContainer.appendChild(imgName);
      imagesDisplayed.appendChild(imgLink);
    });
  }
};

const productsContainer = document.getElementById("products-container");
if (productsContainer) {
  images.forEach((image) => {
    const imageContainer = document.createElement("div");
    const imageElement = document.createElement("img");
    imageElement.src = image.url;
    imageElement.alt = image.name;
    const imgName = document.createElement("p");
    imgName.innerHTML = image.name;
    const imgprice = document.createElement("p");
    imgprice.innerHTML = `$${image.price.toFixed(2)}`;

    const viewDetailsButton = document.createElement("button");
    viewDetailsButton.innerHTML = "View Details";
    viewDetailsButton.style.cursor = "pointer";

    viewDetailsButton.addEventListener("click", () => {
      const productUrl = `product.html?name=${encodeURIComponent(
        image.name
      )}&price=${encodeURIComponent(image.price)}&url=${encodeURIComponent(
        image.url
      )}`;
      window.location.href = productUrl;
    });

    imageContainer.appendChild(imageElement);
    imageContainer.appendChild(imgName);
    imageContainer.appendChild(imgprice);
    imageContainer.appendChild(viewDetailsButton);

    productsContainer.appendChild(imageContainer);
  });
}

window.addEventListener("load", showImages);
window.addEventListener("resize", showImages);
