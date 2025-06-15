import { playerData } from "../data/player.js";

const rankImg2 = document.querySelector(".rank-wrapper-2")
const rankImg = document.querySelector(".rank-logo");

export function loadRank() {
    if (playerData.level >= 150) {
        rankImg.src = "assets/img/diamond.png";
    } else if (playerData.level >= 100) {
        rankImg.src = "assets/img/emerald.png";
    } else if (playerData.level >= 60) {
        rankImg.src = "assets/img/platinium.png";
    } else if (playerData.level >= 30) {
        rankImg.src = "assets/img/gold.png";
    } else if (playerData.level >= 10) {
        rankImg.src = "assets/img/silver.png";
    } else {
        rankImg.src = "assets/img/bronze.png"; // اصلاح شد
    }
}

loadRank();
