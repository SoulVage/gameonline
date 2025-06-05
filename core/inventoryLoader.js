import { weapons } from "../data/weapons.js"
import { runSearch } from "../core/SearchHandler.js"
import { inventory } from "../data/inventory.js"
import { playerData } from "../data/player.js"

const countWrapper = document.querySelector(".count")
const valueWrapper = document.querySelector(".total-value-show")
let inventoryData = inventory.map(invItem => {
    return weapons.find(weapon => weapon.id === invItem.id)
})

let totalValue = 0
inventoryData.forEach(invItem => {
    totalValue += invItem.price
})
valueWrapper.textContent = "$" + totalValue.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits : 2} )
countWrapper.textContent = inventoryData.length
const cardWrapper = document.querySelector(".item-card-grid")
let htmlDiv = ''
function generateCards() {
    if (!htmlDiv == '') htmlDiv = '';
    inventoryData.forEach(item => {
        htmlDiv += 
        `
                <div class="card-item d-flex align-center ${item.rarity}">
                    <div class="checkbox-custom">
                        <i class="fa-solid fa-check"></i>
                    </div>
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

function selectFunc() {
    const checkbox = document.querySelectorAll(".checkbox-custom")
const productCard = document.querySelectorAll(".card-item")

productCard.forEach( product => {
    product.addEventListener("click", () => {
        const checkbox = product.querySelector(".checkbox-custom")
        checkbox.classList.toggle("checked");
    })
})
const checkAll = document.querySelector(".check-all-wrapper")
checkAll.addEventListener("click", ()=> {
    let allChecked = true;
        checkbox.forEach(check => {
            if (!check.classList.contains("checked")) {
                allChecked = false;
            }
        });
        if (allChecked) {
            checkbox.forEach(check => {
                check.classList.remove("checked");
            });
        }else {
            checkbox.forEach(check => {
                check.classList.add("checked");
            });
        }
})
}
selectFunc()
runSearch()

document.querySelector(".btn-sell-all").addEventListener("click", () => {
    let soldItems = []
    let earnedMoney = 0
    const allCards = document.querySelectorAll(".card-item")

    allCards.forEach((card, index) => {
        const checkbox = card.querySelector(".checkbox-custom");
        if (checkbox.classList.contains("checked")) {
            const item = inventoryData[index]
            soldItems.push(item.id);
            earnedMoney += item.price;
        }
    })
    if (soldItems.length === 0) {
        return;
    }
    for (let id of soldItems) {
        const index = inventory.findIndex(item => item.id === id);
        if (index !== -1) {
            inventory.splice(index , 1)
        }
    }
    playerData.credit += earnedMoney;

    localStorage.setItem("inventory", JSON.stringify(inventory));
    localStorage.setItem("credit", JSON.stringify(playerData.credit));
    location.reload()
})