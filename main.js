import './style.scss'
import Typed from 'typed.js';
import ScrollReveal from 'scrollreveal';
import './node_modules/waypoints/lib/noframework.waypoints';

let options = {
  strings: ['Food...', 'Drink...'],
  typeSpeed: 10,
  backDelay:3000,
  backSpeed:20,
  loop:true,
};

let typed = new Typed('.element', options);

let toDown = {
  distance: '100px',
  origin: 'top',
  duration: 800,
  interval: 500,
  delay:100,
};

ScrollReveal().reveal('.to-down', toDown);

let toLeft = {
  distance: '100px',
  origin: 'right',
  duration: 800,
  interval: 500,
  delay:100,
};

ScrollReveal().reveal('.to-left', toLeft);

let toRight = {
  distance: '100px',
  origin: 'left',
  duration: 800,
  interval: 500,
  delay:100,
};

ScrollReveal().reveal('.to-right', toRight);

new Waypoint({
  element: document.getElementById('home-content'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    if(oldNavLink !=null){
      oldNavLink.classList.remove("active");
    }
    let currentNavLink = document.querySelector(`[href="#home"]`);
    currentNavLink.classList.add("active");
  },
  offset: "10%" 
})

new Waypoint({
  element: document.getElementById('about'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector(`[href="#about"]`);
    currentNavLink.classList.add("active");
  },
  offset: "0%" 
})

new Waypoint({
  element: document.getElementById('services'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector(`[href="#services"]`);
    currentNavLink.classList.add("active");
  },
  offset: "5%" 
})

new Waypoint({
  element: document.getElementById('menus'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector(`[href="#menus"]`);
    currentNavLink.classList.add("active");
  },
  offset: "5%" 
})

new Waypoint({
  element: document.getElementById('contact'),
  handler: function(direction) {
    let oldNavLink = document.querySelector(".nav-link.active");
    oldNavLink.classList.remove("active");
    let currentNavLink = document.querySelector(`[href="#contact"]`);
    currentNavLink.classList.add("active");
  },
  offset: "75%" 
})

let menuLists = [
  {
    id : 1,
    img : "public/img/plate1.png",
    title : "Berbecue Sald",
    description : "Special Delicious Dish",
    price : 22.2 ,
    currency : "$",
  },
  {
    id : 2,
    img : "public/img/plate2.png",
    title : "Salad with fish",
    description : "Special Delicious Dish",
    price : 30.5,
    currency : "$",
  },
  {
    id : 3,
    img : "public/img/plate3.png",
    title : "Berbecue Sald",
    description : "Spinach Salad",
    price : 50,
    currency : "$",
  },
]

let menusRow = document.getElementById("menus-row");

menuLists.forEach(function(menuList){
  let div = document.createElement("div");
  div.classList.add("col-8","col-md-4","col-lg-2");
  div.innerHTML= `
  <div class="card mb-4 plate-card">
  <img src="${menuList.img}" class="w-75 mx-auto d-block my-4" alt="">
  <div class="card-body">
    <p class="fw-bold">
      ${menuList.title}
    </p>
    <p class="text-black-50 small">
      ${menuList.description}
    </p>
    <div class="d-flex justify-content-between align-items-center">
      <p class="mb-0">${menuList.currency} ${menuList.price}</p>
      <button class="btn btn-primary">
        <i class="bi bi-cart-plus"></i>
      </button>
    </div>
  </div>
</div>
  `;

  menusRow.append(div)
})