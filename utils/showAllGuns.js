import { weapons } from "../data/weapons.js";

const cardWrapper = document.querySelector(".patch-note-container")
let htmlDiv = ''

function generateCards() {
    if (!htmlDiv == '') htmlDiv = '';
    weapons.forEach(item => {
        htmlDiv += 
        `
                <div class="card-item d-flex align-center ${item.rarity}">
                    <div class="card-item-price">$${item.price}</div>
                    <img src="${item.img}" alt="">
                    <div class="card-info d-flex align-center">
                        <h3 class="card-title">${item.name}</h3>
                        <p>${item.case}</p>
                    </div>
                    <div class="line-top-inner"></div>
                </div>
        `
    })
    cardWrapper.innerHTML = htmlDiv;
}
generateCards()