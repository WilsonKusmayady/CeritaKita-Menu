// Toogle class active
const navbarNav = document.querySelector(".navbar-nav");

// Toogle class active Shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// Coffe menu di klik
document.querySelector("#coffe-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik diluar sidebar
const coffe = document.querySelector("#coffe-menu");

document.addEventListener("click", function (e) {
  if (!coffe.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


