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
const img = document.querySelector('img'); 

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

/// zoom on image /// 
function zoom(event) {
    event.preventDefault();
    scale += event.deltaY * -0.01;
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
    // Apply scale transform
    img.style.transform = `scale(${scale})`;
  }
  let scale = 1;
  img.onwheel = zoom;

   
  document.addEventListener('click', (event) => {
    alert('Try to use your wheel on this image!')
  });



headingOne.style.cursor = "pointer";
const headings = document.querySelectorAll("h2");

logoHeading.addEventListener('dblclick' , () => {
    logoHeading.style.backgroundColor = 'Blue';
}); 

/// Select Text /// Need help on this one // Not sure what I'm trying to do here regarding instructions from MDN https://developer.mozilla.org/en-US/docs/Web/API/Element/select_event // 

function logSelection(event) {
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  body.textContent = `You selected: ${selection}`;
}

body.addEventListener('select', logSelection);

/// Dragging content /// Need help on this one as well /// 

var dragged;

/* events fired on the draggable target */

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "destination") {
    event.target.style.background = "purple";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "destination") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "destination") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);

/// Adding a second button from the DOM /// 

let button = document.createElement('button'); 

button.textContent  = "Sign Me Up. PS I was created in JS"; 
button.addEventListener('click', (e) => {
  alert('I was created with DOM')
})
let destination1 = document.querySelector('.destination'); 
destination1.appendChild(button); 

//// 