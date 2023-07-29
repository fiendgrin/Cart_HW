const DropDown = document.querySelector(".DropDown");
const CartBox = document.querySelector(".CartBox");
let CounterOnCart = document.querySelector(".Counter");

let AllProducts = [
  {
    id: 1,
    Image: "AKG500.png",
    Brand: "AKG",
    Model: "Pro Audio K712",
    Money: 280,
  },
  {
    id: 2,
    Image: "AT500.png",
    Brand: "Audio-Technica",
    Model: "ATH-M50X",
    Money: 169,
  },
  {
    id: 3,
    Image: "SENNHEISER500.png",
    Brand: "Sennheiser",
    Model: "HD 560S",
    Money: 179.95,
  },
  {
    id: 4,
    Image: "Bayer500.png",
    Brand: "Beyerdynamic",
    Model: "DT 770 PRO",
    Money: 169,
  },
  {
    id: 5,
    Image: "Marshall500.png",
    Brand: "Marshall",
    Model: "Major IV",
    Money: 149.99,
  },
  {
    id: 6,
    Image: "Beats500.png",
    Brand: "Beats",
    Model: "Studio3",
    Money: 269.99,
  },
];

const Cards = document.querySelector(".Cards");

function ProductMaker(id, image, Brand, Model, Money) {
  return `<div id="${id}" productID="${id}" class="card">
  <img class="Headphone" src="./images/${image}" alt="" />
  <div class="Bottom">
    <div class="Text">
      <h4 class="Brand">${Brand}</h4>
      <p class="Model">${Model}</p>
    </div>
    <div class="BTNCost">
      <p class="CostMain">${Money}$</p>
      <button id="${id}" class="CartBTN">Add to cart</button>
    </div>
  </div>
</div>`;
}

AllProducts.forEach((card) => {
  Cards.innerHTML += ProductMaker(
    card.id,
    card.Image,
    card.Brand,
    card.Model,
    card.Money
  );
});

function MiniProductMaker(id, image, Brand, Model, Money, Amount) {
  return `<div id="${id}" class="MiniCard">
  <div class="left">
    <img class="MiniHP" src="./images/${image}" alt="" />
    <div class="MiniText">
      <h4 class="Brand">${Brand}</h4>
      <p class="Model">${Model}</p>
    </div>
  </div>
  <div class="BuySec">
    <div class="AddRemove">
      <button id=${id} class="Plus">+</button>
      <p id=${id} class="Amount">${Amount}</p>
      <button id=${id} class="Minus">-</button>
    </div>
    <p id=${id} class="Cost">${Money}$</p>
    <button id="Buy">Buy</button>
  </div>
</div>`;
}

let AllDrops = DropDown.children;
let amount;
let check;
let money;
let PlusAll = document.querySelectorAll(".Plus");
let MinusAll = document.querySelectorAll(".Minus");
const AddToCartAll = document.querySelectorAll(".CartBTN");

// AddToCartAll.forEach((toCartBtn) => {
//   toCartBtn.addEventListener("click", (e) => {
//     check = false;
//     for (let drop of AllDrops) {
//       if (drop.id == toCartBtn.id) {
//         check = true;
//         amount = document.querySelectorAll(".Amount");
//         money = document.querySelectorAll(".Cost");
//         AllProducts.forEach((prod) => {
//           money.forEach((co) => {
//             if (prod.id == co.id && co.id == drop.id) {
//               co.textContent = `${parseInt(co.textContent) + prod.Money}$`;
//             }
//           });
//         });
//         amount.forEach((am) => {
//           if (am.id == drop.id) {
//             am.textContent = `${parseInt(am.textContent) + 1}`;
//             CounterOnCart = document.querySelector(".Counter");
//             CounterOnCart.textContent = `${
//               parseInt(CounterOnCart.textContent) + 1
//             }`;
//           }
//         });
//         break;
//       }
//     }

//     AllProducts.forEach((product) => {
//       if (product.id == toCartBtn.id && check == false) {
//         DropDown.innerHTML += MiniProductMaker(
//           product.id,
//           product.Image,
//           product.Brand,
//           product.Model,
//           product.Money,
//           1
//         );
//         AllDrops = DropDown.children;
//         PlusAll = document.querySelectorAll(".Plus");
//         MinusAll = document.querySelectorAll(".Minus");
//         CounterOnCart = document.querySelector(".Counter");
//         CounterOnCart.textContent = `${
//           parseInt(CounterOnCart.textContent) + 1
//         }`;
//       }
//     });
//   });
// });

// PlusAll.forEach((plus) => {
//   plus.addEventListener("click", (e) => {
//     for (let drop of AllDrops) {
//       if (drop.id == plus.id) {
//         amount = document.querySelectorAll(".Amount");
//         money = document.querySelectorAll(".Cost");
//         AllProducts.forEach((prod) => {
//           money.forEach((co) => {
//             if (prod.id == co.id && co.id == drop.id) {
//               co.textContent = `${parseInt(co.textContent) + prod.Money}$`;
//             }
//           });
//         });
//         amount.forEach((am) => {
//           if (am.id == drop.id) {
//             am.textContent = `${parseInt(am.textContent) + 1}`;
//             CounterOnCart = document.querySelector(".Counter");
//             CounterOnCart.textContent = `${
//               parseInt(CounterOnCart.textContent) + 1
//             }`;
//           }
//         });
//         break;
//       }
//     }
//   });
// });

MinusAll.forEach((minus) => {
  plus.addEventListener("click", (e) => {
    for (let drop of AllDrops) {
      if (drop.id == minus.id) {
        amount = document.querySelectorAll(".Amount");
        money = document.querySelectorAll(".Cost");
        AllProducts.forEach((prod) => {
          money.forEach((co) => {
            if (prod.id == co.id && co.id == drop.id) {
              co.textContent = `${parseInt(co.textContent) - prod.Money}$`;
            }
          });
        });
        amount.forEach((am) => {
          if (am.id == drop.id) {
            am.textContent = `${parseInt(am.textContent) + 1}`;
            CounterOnCart = document.querySelector(".Counter");
            CounterOnCart.textContent = `${
              parseInt(CounterOnCart.textContent) - 1
            }`;
          }
        });
        break;
      }
    }
  });
});

function AddToCartFunc(toCartBtn) {
  return new Promise((resolve, reject) => {
    check = false;
    for (let drop of AllDrops) {
      if (drop.id == toCartBtn.id) {
        check = true;
        amount = document.querySelectorAll(".Amount");
        money = document.querySelectorAll(".Cost");
        AllProducts.forEach((prod) => {
          money.forEach((co) => {
            if (prod.id == co.id && co.id == drop.id) {
              co.textContent = `${parseInt(co.textContent) + prod.Money}$`;
            }
          });
        });
        amount.forEach((am) => {
          if (am.id == drop.id) {
            am.textContent = `${parseInt(am.textContent) + 1}`;
            CounterOnCart = document.querySelector(".Counter");
            CounterOnCart.textContent = `${
              parseInt(CounterOnCart.textContent) + 1
            }`;
          }
        });
        break;
      }
    }

    AllProducts.forEach((product) => {
      if (product.id == toCartBtn.id && check == false) {
        DropDown.innerHTML += MiniProductMaker(
          product.id,
          product.Image,
          product.Brand,
          product.Model,
          product.Money,
          1
        );
        AllDrops = DropDown.children;
        PlusAll = document.querySelectorAll(".Plus");
        MinusAll = document.querySelectorAll(".Minus");
        CounterOnCart = document.querySelector(".Counter");
        CounterOnCart.textContent = `${
          parseInt(CounterOnCart.textContent) + 1
        }`;
      }
    });

    resolve();
  });
}

function PlusFunc(PlusAll) {
  return new Promise((resolve, reject) => {
    PlusAll.forEach((plus) => {
      plus.addEventListener("click", (e) => {
        for (let drop of AllDrops) {
          if (drop.id == plus.id) {
            amount = document.querySelectorAll(".Amount");
            money = document.querySelectorAll(".Cost");
            AllProducts.forEach((prod) => {
              money.forEach((cost) => {
                if (prod.id == cost.id && cost.id == drop.id) {
                  cost.textContent = `${parseInt(cost.textContent) + prod.Money}$`;
                }
              });
            });
            amount.forEach((am) => {
              if (am.id == drop.id) {
                am.textContent = `${parseInt(am.textContent) + 1}`;
                CounterOnCart = document.querySelector(".Counter");
                CounterOnCart.textContent = `${
                  parseInt(CounterOnCart.textContent) + 1
                }`;
              }
            });
            break;
          }
        }
      });
    });
    resolve();
  });
}

function MinusFunc(MinusAll) {
  return new Promise((resolve, reject) => {
    MinusAll.forEach((minus) => {
      minus.addEventListener("click", (e) => {
        for (let drop of AllDrops) {
          if (drop.id == minus.id) {
            amount = document.querySelectorAll(".Amount");
            money = document.querySelectorAll(".Cost");
            AllProducts.forEach((prod) => {
              money.forEach((cost) => {
                if (prod.id == cost.id && cost.id == drop.id) {
                  cost.textContent = `${parseInt(cost.textContent) - prod.Money}$`;
                }
              });
            });
            amount.forEach((am) => {
              if (am.id == drop.id) {
                am.textContent = `${parseInt(am.textContent) - 1}`;
                CounterOnCart = document.querySelector(".Counter");
                CounterOnCart.textContent = `${
                  parseInt(CounterOnCart.textContent) - 1
                }`;
              }
            });
            break;
          }
        }
      });
    });
    resolve();
  });
}

AddToCartAll.forEach((toCartBtn) => {
  toCartBtn.addEventListener("click", (e) => {
    AddToCartFunc(toCartBtn)
      .then(() => {
        PlusFunc(PlusAll);
      })
      .then(() => {
        MinusFunc(MinusAll);
      });
  });
});

CartBox.addEventListener("click", () => {
  if (DropDown.style.display == "flex") {
    DropDown.style.display = "none";
  } else {
    DropDown.style.display = "flex";
  }
});

DropDown.addEventListener("click", (e) => {
  e.stopPropagation();
});

CartBox.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  DropDown.style.display = "none";
}); 
