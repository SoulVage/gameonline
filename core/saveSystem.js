import { playerData } from "../data/player.js";

export function saveSystem() {
    localStorage.setItem("credit", JSON.stringify(playerData.credit))
    localStorage.setItem("level", JSON.stringify(playerData.level))
    localStorage.setItem("xp", JSON.stringify(playerData.xp))
    localStorage.setItem("coin", JSON.stringify(playerData.coin))
}
