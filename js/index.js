const mainNavigation = document.querySelector(".main-navigation");
const MainNavigation = document.querySelector(".main-navigation");
const logoHeading = document.querySelector(".logo-heading");
const nav = document.querySelector("nav");
const textContent = document.querySelector(".text-content");
const contentDescription = document.querySelector(".content-description");
const contentPick = document.querySelector("content-pick");
const destination = document.querySelector(".destination");
const btn = document.querySelector(".btn");
const intro = document.querySelector(".intro");
const body = document.querySelector("body");
const title = document.querySelector("h1");
const headingOne = document.querySelector("h2");

window.addEventListener("scroll", () => {
  body.style.backgroundColor = "pink";
});

mainNavigation.addEventListener("click", (e) => {
  mainNavigation.style.backgroundColor = "purple";
  console.log("clicked title");
});

document.addEventListener("keydown", (e) => {
  console.log("keydown: ", e);
  if (e.key === "d") {
    console.log("You pressed d!");
  } else {
    console.log(`Actually you pressed ${e.key}`);
  }
});

window.addEventListener("resize", () => {
  intro.src = "img/fun-bus.jpg";
});

headingOne.style.cursor = "pointer";
const headings = document.querySelectorAll("h2");
