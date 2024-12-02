const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".line1");
const bar2 = document.querySelector(".line2");
const bar3 = document.querySelector(".line3");
const mobileNav = document.querySelector(".mobileNav");

hamburger.addEventListener("click", () => {
    bar1.classList.toggle("bar1");
    bar2.classList.toggle("bar2");
    bar3.classList.toggle("bar3");
    mobileNav.classList.toggle("openDrawer");
  });

