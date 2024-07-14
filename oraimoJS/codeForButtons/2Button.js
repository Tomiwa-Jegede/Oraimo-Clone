export function secondCarouselDisplayButton() {
  /*--------DOM---------*/
  const next2 = document.querySelector("#nextBtn2");
  const prev2 = document.querySelector("#prevBtn2");
  const productDisplay = document.querySelector(".p-display-slider");
  const indicator2 = document.querySelectorAll(".dots-container2 li");
  const size2 = productDisplay.clientWidth / 4;
  let direction2;
  let counter2 = 0;

  /*-------Code for the next button------*/
  next2.addEventListener("click", () => {
    /*-------Condition for the direction------*/
    if (direction2 === 1) {
      direction2 = -1;
      productDisplay.prepend(productDisplay.lastElementChild);
    }
    direction2 = -1;
    /*-------Condition for the counter------*/
    if (counter2 >= 6) {
      counter2 = -1;
    }
    counter2++;
    /*-------Carousel slider response------*/
    productDisplay.style["transform"] = `translateX(${-size2}px)`;
    /*-------Dots response------*/
    indicator2.forEach((dots, i) => {
      dots.classList.remove("active");
      if (counter2 === i) {
        dots.classList.add("active");
      }
    });
  });
  /*-------Code for the preview Button------*/
  prev2.addEventListener("click", () => {
    /*-------Condition for the direction------*/
    if (direction2 === -1) {
      direction2 = 1;
      productDisplay.appendChild(productDisplay.firstElementChild);
    }
    direction2 = 1;
    /*-------Condition for the counter------*/
    if (counter2 <= 0) {
      counter2 = 6;
    }
    counter2--;
    productDisplay.style["transform"] = `translateX(${size2}px)`;
    /*-------Dots response------*/
    indicator2.forEach((dots, i) => {
      dots.classList.remove("active");
      if (counter2 === i) {
        dots.classList.add("active");
      }
    });
  });
  /*-------Code after transition ends------*/
productDisplay.addEventListener('transitionend',()=>{
direction2===-1
?productDisplay.appendChild(productDisplay.firstElementChild)
:productDisplay.prepend(productDisplay.lastElementChild);
productDisplay.style["transform"] = `translateX(0px)`;
    productDisplay.style["transition"] = `none`;
    setTimeout(()=>{
 productDisplay.style["transition"] = `all 0.2s linear`
    })
})
  
  /*-------Code for the auto slide------*/
  setInterval(() => {
    if (direction2 === 1) {
      direction2 = -1;
      productDisplay.prepend(productDisplay.lastElementChild);
    }
    if (counter2 >= 6) {
      counter2 = -1;
    }
    direction2 = -1;
    counter2++;
    productDisplay.style["transform"] = `translateX(${-size2}px)`;
    productDisplay.style["justify-content"] = "flex-start";
    indicator2.forEach((dots, i) => {
      dots.classList.remove("active");
      if (counter2 === i) {
        dots.classList.add("active");
      }
    });
  }, 4000);
}
