const checkboxes = document.querySelectorAll(".checkbox");
const calculate = document.querySelector(".calculate");
const product = document.querySelectorAll(".product");
const quantities = document.querySelectorAll(".quantity input");
const shippings = document.querySelectorAll(".shipping input");
const textarea = document.querySelector(".calculate textarea");
const options = document.querySelectorAll('.product option')

console.log(options);
const item_quantity = [];
const item_cost = [];
const shipping_cost = [];
let total = 0;

calculate.addEventListener("click", () => {
  // destruct the item_cost array
  const [ipad3_cost, ipad5_cost, galaxy_cost] = item_cost;

  // destruct the item_quantity array
  const [ipad3_quantity, ipad5_quantity, galaxy_quantity] = item_quantity;

  // destruct the shipping_cost array
  const [ipad3_shipping_cost, ipad5_shipping_cost, galaxy_shipping_cost] =
    shipping_cost;

  if (ipad3_cost && ipad5_cost && galaxy_cost) {
    total =
      ipad3_cost * ipad3_quantity +
      ipad3_shipping_cost +
      (ipad5_cost * ipad5_quantity + ipad5_shipping_cost) +
      (galaxy_cost * galaxy_quantity + galaxy_shipping_cost);
  } else if (ipad3_cost && ipad5_cost) {
    total =
      ipad3_cost * ipad3_quantity +
      ipad3_shipping_cost +
      (ipad5_cost * ipad5_quantity + ipad5_shipping_cost);
  } else {
    total = ipad3_cost * ipad3_quantity + ipad3_shipping_cost;
  }
  console.log(total);
  if (total) {
    textarea.textContent = `TL ${total}`;
  }
});

// push the cost of the productsin an array
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    if (checkbox.checked) {
      item_cost.push(parseInt(checkbox.value));
    }
  });
});

// push the quantities of the productsin an array
quantities.forEach((quantity) => {
  quantity.addEventListener("change", () => {
    item_quantity.push(parseInt(quantity.value));
  });
});

// push the shipping cost of the products in an array
shippings.forEach((shipping) => {
  shipping.addEventListener("click", () => {
    if (shipping.checked) {
      shipping_cost.push(parseInt(shipping.value));
    }
  });
});


