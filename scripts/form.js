const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];

const params = new URLSearchParams(window.location.search);
console.log(params);
if (params.size != 0) {
  const productName = params.get("productSelection");
  const rating = params.get("rating");
  const installationDate = params.get("dateInput");
  const userReview = params.get("userReview") || "No review provided.";
  const userName = params.get("username") || "Anonymous";

  const features =
    ["feature1", "feature2", "feature3", "feature4"]
      .map((feature) => params.get(feature))
      .filter(Boolean)
      .join(", ") || "No features selected.";

  document.getElementById("productName").textContent = productName;
  document.getElementById("rating").textContent = rating;
  document.getElementById("installationDate").textContent = installationDate;
  document.getElementById("usefulFeatures").textContent = features;
  document.getElementById("writtenReview").textContent = userReview;
  document.getElementById("userName").textContent = userName;

  const reviewData = {
    productName,
    rating,
    installationDate,
    features,
    userReview,
    userName,
  };

  localStorage.setItem("reviewData", JSON.stringify(reviewData));

  if (localStorage.getItem("counter")) {
    let counter = parseInt(localStorage.getItem("counter"));
    counter += 1;
    localStorage.setItem("counter", counter);
  } else {
    localStorage.setItem("counter", 1);
  }
  const returnButton = document.getElementById("backToHome");
  returnButton.addEventListener("click", () => {
    window.location.href = "form.html";
  });
} else {
  let productsContainer = document.getElementById("productSelection");

  products.forEach((product) => {
    let productAdded = document.createElement("option");
    productAdded.textContent = product.name;
    productAdded.value = product.id;
    productsContainer.appendChild(productAdded);
  });
}
