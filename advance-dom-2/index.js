"use strict";

/* ELEMENTS */
const frame = document.querySelector(".frame");
const prevBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector("header");
const slider = document.querySelector(".slider");

/* SMOOTH SCROLLING */
navLinks.addEventListener("click", (e) => {
  e.preventDefault();

  if (e.target.classList.contains("nav-item")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({
      behavior: "smooth",
    });
  }
});

/* SLIDERS */
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

/* STICKY NAVBAR */
const navHeight = header.getBoundingClientRect().height;

function stickyNab(entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    header.classList.add("myNavFixed");
    slider.classList.add(`mt-[${navHeight}px]`);
  } else {
    header.classList.remove("myNavFixed");
    slider.classList.remove(`mt-[${navHeight}px]`);
  }
}

const sliderObserver = new IntersectionObserver(stickyNab, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

sliderObserver.observe(slider);
