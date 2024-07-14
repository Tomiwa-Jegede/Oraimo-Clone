import { images } from "../1CarouselDisplayImage.js";
export let imageHTML = "";
images.forEach((img) => {
  imageHTML += ` <img src=${img.image} alt="">`;
});
