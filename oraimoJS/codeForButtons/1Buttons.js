export function firstCarouselDisplayButton() {
  /*--------DOM---------*/
  const carouselSlider = document.querySelector(".carousel-slide");

  const prev = document.querySelector("#prevBtn");
  const next = document.querySelector("#nextBtn");
  const size = carouselSlider.clientWidth;
  const dots = document.querySelectorAll(".dots-container li");
  /*--------Button------*/
  let direction;
  let counter = 0;
  /*-------Code for the next button------*/
  next.addEventListener("click", () => {
    /*-------Condition for the direction------*/
    if (direction === 1) {
      direction = -1;
      carouselSlider.prepend(carouselSlider.lastElementChild);
    }
    direction = -1;
    /*-------Condition for the counter------*/
    if (counter >= 6) {
      counter = -1;
    }
    counter++;
    /*-------Carousel slider response------*/
    carouselSlider.style["transform"] = `translateX(${-size}px)`;
    carouselSlider.style["justify-content"] = "flex-start";
    /*-------Dots response------*/
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === counter) {
        dot.classList.add("active");
      }
    });
  });
  /*-------Code for the preview Button------*/
  prev.addEventListener("click", () => {
    /*-------Condition for the direction------*/
    if (direction === -1) {
      direction = 1;
      carouselSlider.appendChild(carouselSlider.firstElementChild);
    }
    direction = 1;
    /*-------Condition for the counter------*/
    if (counter <= 0) {
      counter = 7;
    }
    counter--;
    /*-------Carousel slider response------*/
    carouselSlider.style["transform"] = `translateX(${size}px)`;
    carouselSlider.style["justify-content"] = "flex-end";
    /*-------Dots response------*/
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === counter) {
        dot.classList.add("active");
      }
    });
  });
  /*-------Code for the auto slide------*/
  setInterval(() => {
    if (direction === 1) {
      direction = -1;
      carouselSlider.prepend(carouselSlider.lastElementChild);
    }
    direction = -1;
    if (counter >= 6) {
      counter = -1;
    }
    counter++;
    carouselSlider.style["transform"] = `translateX(${-size}px)`;
    carouselSlider.style["justify-content"] = "flex-start";
    dots.forEach((dot, i) => {
      dot.classList.remove("active");
      if (i === counter) {
        dot.classList.add("active");
      }
    });
  }, 4000);
  /*------Code for transitionend-------*/
  carouselSlider.addEventListener("transitionend", () => {
    direction === -1
      ? carouselSlider.appendChild(carouselSlider.firstElementChild)
      : carouselSlider.prepend(carouselSlider.lastElementChild);
    carouselSlider.style["transform"] = `translateX(0px)`;
    carouselSlider.style["transition"] = "none";
    setTimeout(() => {
      carouselSlider.style["transition"] = "all 0.3s ease-in-out";
    });
  });
}
