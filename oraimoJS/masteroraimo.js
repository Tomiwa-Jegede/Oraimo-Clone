/*-------Importation Happend Here-------*/
import { productHTML } from "./GenerationOfHTML/notificationdropdownproduct.js";
import { imageHTML } from "./GenerationOfHTML/1CarouselDisplay.js";
import { imageHTML2 } from "./GenerationOfHTML/2CarouselDisplay.js";
import { firstCarouselDisplayButton } from "./codeForButtons/1Buttons.js";
import { secondCarouselDisplayButton } from "./codeForButtons/2Button.js";
/*-------code for the fisrt display carousel------*/
firstCarouselDisplayButton();
/*-------code for the second display carousel------*/
document.querySelector('.p-display-slider').innerHTML=imageHTML2
/*----------Generate CarouselSlider Images Here--------*/
document.querySelector(".carousel-slide").innerHTML = imageHTML;
/*----------generate products (Dropdown)imaage here--------*/
document.querySelector(".dropDP-container").innerHTML = productHTML;

/*-------code for the second display carousel------*/
secondCarouselDisplayButton();
