const icon = document.querySelector(".menu_icon");
const navBar = document.querySelector("#nav-bar");
const header = document.querySelector("#header");
const slider =document.querySelector(".quotes");
const quote = slider.firstElementChild;
const user_image = quote.nextElementSibling;
const user_name = user_image.nextElementSibling;
const slide_nav = document.querySelector(".slide_nav");
const circles = slide_nav.children;
const slide_content = [{ 
                        quote: '"Thank you <i>BikesForYou</i>, my new bike is awesome!"',
                        imageClass: 'user1',
                        figCaption: 'Maggie, 24',
                        quoteClass: 'quote_1'
                      },
                      { quote: '"Wow! What a bike!"',
                        imageClass: 'user2',
                        figCaption: 'Lisa, 32',
                        quoteClass: 'quote_2'
                      },
                      { quote: '"Nothing is better than a unique handcrafted bike!"',
                        imageClass: 'user3',
                        figCaption: 'Bart, 30',
                        quoteClass: 'quote_3'
                      }];

function addFullClass(ccl) {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].classList.contains(ccl)) {
      circles[i].classList.add("full");
    } else {
      circles[i].classList.remove("full");
    }
  }
}

function addContent(index) {
  quote.innerHTML = slide_content[index].quote;
  user_name.innerHTML = slide_content[index].figCaption;
  slider.classList.replace(slider.classList[1], slide_content[index].quoteClass);
  user_image.classList.replace(user_image.classList[1], slide_content[index].imageClass);
}

icon.addEventListener("click", function() {
  icon.classList.toggle("change");
  navBar.classList.toggle("hide");
  header.classList.toggle("extend");
});

navBar.addEventListener("click", function(e) {
  if (e.target.tagName === "A") {
    icon.classList.remove("change");
    navBar.classList.add("hide");
    header.classList.remove("extend");
  }
});

slide_nav.addEventListener("click", function(e) {
  if (e.target.classList.contains("ccl1")) {
    addFullClass("ccl1");
    addContent(0);
  } else if (e.target.classList.contains("ccl2")) {
    addFullClass("ccl2");
    addContent(1);
  } else if (e.target.classList.contains("ccl3")) {
    addFullClass("ccl3");
    addContent(2);
  }
});



