// Brett’s company : environmental and process systems,inc
// ( possible www.eps-midwest.com )

// Competitors:
// https://jciind.com/
// https://fluidequip.com/
// http://ftcequipment.com/
// https://enviro-line.com/

//Suppliers:
//https://www.sulzer.com/en

//https://www.makeuseof.com/responsive-navigation-bar-using-html-and-css/

const menuBars = document.getElementById("menu-bars");

const navCompanyName = document.getElementById("nav-company-name");

const slides = document.getElementsByClassName("slides");

const product1 = document.getElementById("product1");
const product2 = document.getElementById("product2");
const product3 = document.getElementById("product3");
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const slide3 = document.getElementById("slide3");

function togglenav() {
  menuBars.classList.toggle("menu-active");
  menuBars.classList.toggle("change");
}

menuBars.addEventListener("click", togglenav);

const miniImgs = document.getElementById("mini-imgs").children;
for (let miniImg of miniImgs) {
  miniImg.addEventListener("click", () => {
    for (let slide of slides) {
      slide.style.display = "none";
    }
  });
}

product1.addEventListener("click", () => {
  slide1.style.display = "block";
});
product2.addEventListener("click", () => {
  slide2.style.display = "block";
});

product3.addEventListener("click", () => {
  slide3.style.display = "block";
});
// miniImg.addEventListener("click", () => {
//   console.log('mini clicked')

//   slides.forEach(slide => {
//     slide.style.display = "none";
//   }
// )}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
