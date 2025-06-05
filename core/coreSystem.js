import { weapons } from "../data/weapons.js";
import { chance } from "../data/chance.js";
import { cases } from "../data/cases.js";
import { inventory } from "../data/inventory.js";
import { playerData } from "../data/player.js";
import { creditHandler } from "../core/creditHandler.js";
import { updateLevel } from "../core/levelSystem.js";

export function openCase(caseName) {
    let selectedCase = cases.find(pack => pack.name == caseName)
    let caseWeapons = selectedCase.weapons
    let weaponData = caseWeapons.map(invItem => {
        return weapons.find(weapon => weapon.id == invItem)
    })
    let htmlDiv = ''
    const cardWrapper = document.querySelector(".card-wrapper-outer")
let randomNumber = Math.floor(Math.random() * 100) + 1;
let selectedRarity = ""
if (randomNumber <= chance.legendary) {
    selectedRarity = "legendary"
} else if (randomNumber <= chance.legendary + chance.ancient) {
    selectedRarity = "ancient"
} else if (randomNumber <= chance.legendary + chance.ancient + chance.mythical) {
    selectedRarity = "mythical"
} else if (randomNumber <= chance.legendary + chance.ancient + chance.mythical + chance.rare) {
    selectedRarity = "rare"
} else if (randomNumber <= chance.legendary + chance.ancient + chance.mythical + chance.rare + chance.uncommon) {
    selectedRarity = "uncommon"
} else {
    selectedRarity = "common"
}   
let filteredCard = weaponData.filter(weapon => weapon.rarity == selectedRarity )
let card = filteredCard[Math.floor(Math.random() * filteredCard.length)] 
let allCards = []
for (let i = 0; i <= 21; i++) {
    let luckyCard = weaponData[Math.floor(Math.random() * weaponData.length)]
    if (i == 19 ) {
        allCards.push(card)
        console.log(card)
    }else {
        allCards.push(luckyCard)
    }
}
function generateCards() {
    if (!htmlDiv == '') htmlDiv = '';
    allCards.forEach(cardItem => {
        htmlDiv += 
        `
                <div class="card-item d-flex align-center ${cardItem.rarity}">
                    <div class="card-item-price">$${cardItem.price}</div>
                    <img src="${cardItem.img}" alt="">
                    <div class="card-info d-flex align-center">
                        <h3 class="card-title">${cardItem.name}</h3>
                        <p>${cardItem.case}</p>
                    </div>
                    <div class="line-top-inner"></div>
                </div>
        `
    })
    cardWrapper.innerHTML = htmlDiv;
}
generateCards()
document.querySelector(".card-wrapper-outer").classList.add("spin-animation")
inventory.push({
    id: card.id
})
localStorage.setItem("inventory", JSON.stringify(inventory))
function addShowCase() {
    const wrapper = document.querySelector(".card-pop-over")
    wrapper.classList.add(card.rarity)
    let html = `
                <div class="text-section">
                <div class="rarity">${card.rarity}</div>
                <div class="text-bottom-section">
                    <h3>${card.name}</h3>
                    <p>${card.case}</p>
                </div>
            </div>
            <div class="img-show">
                <div class="price-bottom">
                    $${card.price}
                </div>
                <div class="top-border"></div>
                <div class="shadow-inner"></div>
                <img src="${card.img}" alt="">
            </div>
    `
    wrapper.innerHTML = html
    setTimeout(()=> {
        wrapper.classList.remove(card.rarity)
    }, 8500)
    }
    addShowCase()
    runAnimation()
    updateLevel()
    playerData.openedCase++
    localStorage.setItem("openedCase", JSON.stringify(playerData.openedCase))
}

function runAnimation() {
    const overlay = document.querySelector(".overlay")
    const popUp = document.querySelector(".card-pop-over")
    const cardContainer = document.querySelector(".main-container-of-spin")
    const cardWrapper = document.querySelector(".card-wrapper-outer");
    cardWrapper.classList.add("spin-animation");
    cardContainer.classList.add("active")
    overlay.classList.add("active")
    setTimeout(() => {
        popUp.classList.add("active")
        confetti({
            particleCount: 150,
            spread: 120,
            origin: { y: 0.6 },
          });
    }, 4000)
    setTimeout(() => {
        cardContainer.classList.remove("active")
        popUp.classList.remove("active")
    }, 8000);
    setTimeout(()=> {
        cardWrapper.classList.remove("spin-animation");
        overlay.classList.remove("active")
    },8300)
    
}
