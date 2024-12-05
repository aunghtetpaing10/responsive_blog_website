const addEventOnElements = function (elements, eventType, callback) {
  let len = elements.length;
  for (let i = 0; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

addEventOnElements(navTogglers, "click", toggleNav);

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(
  getComputedStyle(slider).getPropertyValue("--slider-items")
);
let totalSlidableItems =
  sliderContainer.childElementCount - totalSliderVisibleItems;
let currentSlideIndex = 0;

const moveSliderItem = () => {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlideIndex].offsetLeft}px)`;
};

const slideNext = () => {
  const slideEnd = currentSlideIndex >= totalSlidableItems;

  if (slideEnd) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }

  moveSliderItem();
};

sliderNextBtn.addEventListener("click", slideNext);

const slidePrev = () => {
  const slideStart = currentSlideIndex <= 0;

  if (slideStart) {
    currentSlideIndex = totalSlidableItems;
  } else {
    currentSlideIndex--;
  }

  moveSliderItem();
};

sliderPrevBtn.addEventListener("click", slidePrev);

window.addEventListener("resize", () => {
  totalSliderVisibleItems = Number(
    getComputedStyle(slider).getPropertyValue("--slider-items")
  );
  totalSlidableItems =
    sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});
