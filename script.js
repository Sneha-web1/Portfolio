document.addEventListener("DOMContentLoaded", function () {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const togglerIcon = navbarToggler.querySelector(".navbar-toggler-icon");
  const cutIcon = navbarToggler.querySelector(".cut-icon");

  navbarToggler.addEventListener("click", function () {
    if (navbarToggler.getAttribute("aria-expanded") === "true") {
      togglerIcon.classList.add("d-none");
      cutIcon.classList.remove("d-none");
    } else {
      togglerIcon.classList.remove("d-none");
      cutIcon.classList.add("d-none");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".headerfixed");
  const threshold = 40;

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("fixed");
    } else {
      navBar.classList.remove("fixed");
    }
  });
});

// Header fixed in top;

const dynamicText = document.getElementById("dynamic-text");
const texts = ["Front-End Developer.", "Web Developer."];
let index = 0;

setInterval(() => {
  dynamicText.innerHTML = texts[index]
    .split("")
    .map(
      (letter, i) =>
        `<span style="display:inline-block; animation: rotateIn 1s ease forwards ${
          i * 100
        }ms">${letter}</span>`
    )
    .join("");
  index = (index + 1) % texts.length;
}, 2000); // Change text every 2 seconds

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".abc");
  const threshold = 150; 

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("abc1");
    } else {
      navBar.classList.remove("abc1");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".abc3");
  const threshold = 150; 

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("abc4");
    } else {
      navBar.classList.remove("abc4");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".abc");
  const threshold = 150; 

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("abc1");
    } else {
      navBar.classList.remove("abc1");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".abc3");
  const threshold = 150; 

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("abc4");
    } else {
      navBar.classList.remove("abc4");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const navBar = document.querySelector(".abc5");
  const threshold = 150; 

  window.addEventListener("scroll", function () {
    if (window.scrollY > threshold) {
      navBar.classList.add("abc6");
    } else {
      navBar.classList.remove("abc6");
    }
  });
});
