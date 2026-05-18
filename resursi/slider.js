let slideIndex = 0;
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");
const totalSlides = images.length;

function showSlide(index) {
  slides.style.transform = `translateX(${-index * 100}%)`;
}

document.querySelector(".next").addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
});

document.querySelector(".prev").addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  showSlide(slideIndex);
});

// autoplay loop (na 3 sekunde)
setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  showSlide(slideIndex);
}, 3000);