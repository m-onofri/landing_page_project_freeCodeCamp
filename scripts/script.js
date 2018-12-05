const icon = document.querySelector(".menu_icon");
const navBar = document.querySelector("#nav-bar");
const header = document.querySelector("#header");
const slider =document.querySelector("#quotes");
const slide_nav = document.querySelector(".slide_nav");
const circles = slide_nav.children;

icon.addEventListener("click", function() {
  icon.classList.toggle("change");
  navBar.classList.toggle("hide");
  header.classList.toggle("extend");
});

slide_nav.addEventListener("click", function(e) {
  if (e.target.classList.contains("ccl1")) {
    addFullClass("ccl1");
  } else if (e.target.classList.contains("ccl2")) {
    addFullClass("ccl2");
  } else if (e.target.classList.contains("ccl3")) {
    addFullClass("ccl3");
  }
});

function addFullClass(ccl) {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].classList.contains(ccl)) {
      circles[i].classList.add("full");
    } else {
      circles[i].classList.remove("full");
    }
  }
}

