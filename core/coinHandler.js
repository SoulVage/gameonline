import { playerData } from "../data/player.js";
import { saveSystem } from "./saveSystem.js";

const coinWrapper = document.querySelector(".coin-show-ui")

export function coinHandler(amount) {
    playerData.coin += Number(amount) || 0;
    coinWrapper.innerHTML = playerData.coin
    console.log(playerData)
    saveSystem()
}
coinHandler()