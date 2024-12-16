const menuBtn = document.getElementById("nav-toggle-button");

const header = document.querySelector(".header");
const menu = document.getElementById("menu");
const body = document.querySelector("body");
const html = document.querySelector("html");
const links = document.querySelectorAll("a");
const logo = document.querySelector(".header__logo-text");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("show-menu");
  body.classList.toggle("no-scroll");
  menuBtn.classList.toggle("show-x");
  html.classList.toggle("no-scroll");
});

links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("show-menu");
    body.classList.remove("no-scroll");
    html.classList.remove("no-scroll");
    menuBtn.classList.remove("show-x");
  });
});

const scrollBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    scrollBtn.style.opacity = "1";
  } else {
    scrollBtn.style.opacity = "0";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

scrollBtn.addEventListener("click", scrollToTop);
logo.addEventListener("click", scrollToTop);

let prevScrollPos = window.pageYOffset;

function handleScroll() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    header.classList.remove("hidden");
  } else {
    header.classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
}

window.addEventListener("scroll", handleScroll);
