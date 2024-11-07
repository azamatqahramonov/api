const PRODUCT_URL = "https://fakestoreapi.com/products?limit=10";


const cardTitle = document.querySelector(".card__title");
const cardDesc = document.querySelector(".card__desc");
const cardImg = document.querySelector(".card__img");
const cardWrapper = document.querySelector(".wrapper");

async function getProducts() {
  try {
    const res = await fetch(PRODUCT_URL);
    const data = await res.json();

    console.log("data = ", data);

    data.forEach((item) => {
      const newEl = createCard(item.title, item.description, item.image);
      cardWrapper.appendChild(newEl);
    });
  } catch (err) {
    console.log(err);
    alert("Backend ishlamayapti");
  }
}

getProducts();

function createCard(title, desc, image) {
  const el = document.createElement("div");
  el.classList.add("card");
  el.innerHTML = `
    <span class="star" onclick="toggleStar(this)">&#10084;</span>
    <img class="card__img" src="${image}" alt="" />
    <h2 class="card__title">${title}</h2>
    <p class="card__desc">${desc}</p>
    <p class="card__price">50,000 so'm/oyiga</p>
  `;
  return el;
}

function toggleStar(star) {
  star.classList.toggle("active");
}
