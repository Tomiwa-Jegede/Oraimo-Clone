import { productImage } from "../infoforproductatnotificationbar.js";
export let productHTML = "";
productImage.forEach((imageDD, i) => {
  productHTML += `   <div>
                    <h1>${imageDD.title}</h1>
                    <img  src=${imageDD.image} alt="">
                    <li>${imageDD.list.nos1} <span class=${imageDD.class}>${imageDD.sale}</span></li>
                    <li>${imageDD.list.nos2}</li>
                    <li>${imageDD.list.nos3}</li>
                    <li>${imageDD.list.nos4}</li>
                    <li>${imageDD.list.nos5}</li>
                    <li>${imageDD.list.nos6}</li>
                  </div>`;
});
