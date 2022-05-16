import_js('https://cdn.jsdelivr.net/npm/cube-gallery-js/src/index.min.js')

// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

new CubeGallery('gallery',{
  minHeight:150
})

new CubeGallery('gallery', {
  margin: 5
})
