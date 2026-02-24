
const ham = document.getElementById("ham");
const navLinks = document.getElementById("navLinks");
ham.onclick = function () {
  navLinks.classList.toggle("open");
};
const links = document.querySelectorAll(".nav-links a");
links.forEach(function (link) {
  link.onclick = function () {
    navLinks.classList.remove("open");
  };
});
const skillsGrid = document.getElementById("skillsGrid");
const skillCards = document.querySelectorAll(".skill-card");
let animated = false;

window.onscroll = function () {
  if (animated) return;

  const gridPosition = skillsGrid.offsetTop;
  const scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > gridPosition) {
    animated = true;

    skillCards.forEach(function (card) {
      const percent = card.getAttribute("data-pct");
      const bar = card.querySelector(".bar-fill");
      bar.style.width = percent + "%";
    });
  }
};