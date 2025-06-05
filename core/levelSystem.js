import { playerData } from "../data/player.js";
import { loadRank } from "../utils/rankDisplay.js";
import { getRankName } from "../utils/getRankName.js";
import { saveSystem } from "../core/saveSystem.js";
const xpWrapper2 = document.querySelector(".xp-need")
const xpWrapper = document.querySelector(".tooltip")
const openedCaseWrapper = document.querySelector(".show-openedcase")
const levelWrapper = document.querySelector(".level-show-ui")
let level = playerData.level; 
let currentXp = playerData.xp;


export function updateLevel(amount) {
    currentXp += Number(amount) || 0
    let needXp = level * 1000;
    while (currentXp >= needXp) {
        currentXp -= level * 1000; 
        level++;
        needXp = level * 1000;
    }
    
    levelWrapper.textContent = `Level ${level}`
    xpWrapper.textContent = `${currentXp} / ${needXp} XP`
    xpWrapper2.textContent = `${currentXp} / ${needXp} XP`
    playerData.level = level
    playerData.xp = currentXp
    loadRank();
    getRankName(level);
    saveSystem();
    openedCaseWrapper.textContent = playerData.openedCase
}
export function addLevel(amount) {
    level = 0
    for (let i = 1; i <= amount; i++) { 
        level++
     }
     updateLevel()
}
updateLevel()

