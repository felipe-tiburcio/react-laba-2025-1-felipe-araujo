const portfolioButton = document.querySelector("#portfolio__button");
const skillsButton = document.querySelector("#skills__button");

portfolioButton.addEventListener("click", () => {
  portfolioButton.classList.add("tab--active");
  skillsButton.classList.remove("tab--active");
});

skillsButton.addEventListener("click", () => {
  skillsButton.classList.add("tab--active");
  portfolioButton.classList.remove("tab--active");
});
