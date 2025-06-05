import { playerData } from "../data/player.js";
import { saveSystem } from "./saveSystem.js";

const creditWrapper = document.querySelector(".credit-show-ui")

export function creditHandler(amount) {
    playerData.credit += Number(amount) || 0;
    creditWrapper.innerHTML = "$" + playerData.credit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    console.log(playerData)
    saveSystem()
}
creditHandler()