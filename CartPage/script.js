const DropDown = document.querySelector(".DropDown");
const Cart = document.querySelector(".CartBox");
let AllProducts = [
  { id: 1, Image: "AKG500.png", Brand: "AKG", Model: "Pro Audio K712" },
  { id: 2, Image: "AT500.png", Brand: "Audio-Technica", Model: "ATH-M50X" },
  { id: 3, Image: "Bayer500.png", Brand: "Sennheiser", Model: "HD 560S" },
  { id: 4, Image: "Beats500.png", Brand: "Beyerdynamic", Model: "DT 770 PRO" },
  { id: 5, Image: "Marshall500.png", Brand: "Marshall", Model: "Major IV" },
  { id: 6, Image: "SENNHEISER500.png", Brand: "Beats", Model: "Studio3" },
];

const Cards = document.querySelector(".Cards");

function ProductMaker(id, image, Brand, Model) {
  return `<div productID="${id}" class="card">
    <img class="Headphone" src="./images/${image}" alt="" />
    <div class="Bottom">
      <div class="Text">
        <h4 class="Brand">${Brand}</h4>
        <p class="Model">${Model}</p>
      </div>
      <button class="CartBTN">Add to cart</button>
    </div>
  </div>`;
}

AllProducts.forEach((card) => {
  Cards.innerHTML += ProductMaker(card.id, card.Image, card.Brand, card.Model);
});

Cart.addEventListener("click", (e) => {
  console.log(e);
  if (DropDown.style.display == "flex") {
    DropDown.style.display = "none";
  } else {
    DropDown.style.display = "flex";
  }
});

DropDown.addEventListener("click", () => {});
