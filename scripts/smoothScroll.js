const scrollUpButton = document.querySelector(".portfolio__scroll-button");

scrollUpButton.addEventListener("click", (e) => {
  e.preventDefault();

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
