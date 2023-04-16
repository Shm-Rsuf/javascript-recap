const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

let currentSlide = 0;
const lastSlide = 2;

function transformFrame(slide) {
  frame.style.transform = `translateX(-${100 * slide}vw)`;
}

prevBtn.addEventListener("click", () => {
  if (currentSlide === 0) {
    currentSlide = lastSlide;
    transformFrame(lastSlide);
  } else {
    currentSlide--;
    transformFrame(currentSlide);
  }
});
nextBtn.addEventListener("click", () => {
  if (currentSlide === lastSlide) {
    currentSlide = 0;
    transformFrame(currentSlide);
  } else {
    currentSlide++;
    transformFrame(currentSlide);
  }
});
