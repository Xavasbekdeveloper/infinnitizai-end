// navbar-shrink

window.addEventListener("scroll", function () {
  shrink();
});

let navbar = document.getElementById("navbar");

function shrink() {
  if (scrollY > 0) {
    navbar.classList.add("navbar-shrink");
  } else {
		navbar.classList.remove("navbar-shrink");
	}
}

// backtop

window.addEventListener("scroll", function () {
  backtop();
});

let backTop = document.getElementById("backtop");

function backtop() {
    if (scrollY > 200) {
        backTop.classList.add("show-backtop");
    } else {
        backTop.classList.remove("show-backtop");
    }
}

// nav-list-shrink 

let navList = document.getElementById("nav-list");
let barBtn = document.getElementById("hamburger__btn");

barBtn.addEventListener("click", function () {
    navList.classList.toggle("show-nav-list")
})


let modeBtn = document.getElementById("mode-btn");

modeBtn.addEventListener("click", function () {
  if (document.body.className != "light") {
    this.firstElementChild.src = "../images/dark.svg";
  } else {
    this.firstElementChild.src = "../images/light.png";
  }
  document.body.classList.toggle("light");
});