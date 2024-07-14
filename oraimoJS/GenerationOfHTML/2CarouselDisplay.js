import { productImage2 } from "../2CarouselDisplayImage.js";
export let imageHTML2 = "";
productImage2.forEach((img) => {
  imageHTML2 += `   <div class="carousel-slider-product">
        <div class="carouselImage">
          <img src=${img.image.productImage} alt="">
        </div>
        <li class="rating">${img.rating.stars}<img src="/icons/icon-star.svg" alt=""><span>(${img.rating.count})</span></li>
        <h3>${img.name}</h3>
        <li><img class="product-icons" src="/icons for product/led-screen-display.svg" alt=""><span>${img.extra1}</span></li>
        <li><img class="product-icons" src="/icons for product/anifas-t-™-fast-charge.svg" alt=""><span>${img.extra2}</span>
        <li class="newprice"> ₦${img.newPrice}<span class="oldprice"><s>₦${img.oldprice}</s></span></li>
        </li>
      </div>`;
});
