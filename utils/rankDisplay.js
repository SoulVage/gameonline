import { playerData } from "../data/player.js";

const rankImg2 = document.querySelector(".rank-wrapper-2")
const rankImg = document.querySelector(".rank-logo");

export function loadRank() {
    if (playerData.level >= 150) {
        rankImg2.src = "assets/img/diamond.png";
        rankImg.src = "assets/img/diamond.png";
    } else if (playerData.level >= 100) {
        rankImg2.src = "assets/img/emerald.png";
        rankImg.src = "assets/img/emerald.png";
    } else if (playerData.level >= 60) {
        rankImg2.src = "assets/img/platinium.png";
        rankImg.src = "assets/img/platinium.png";
    } else if (playerData.level >= 30) {
        rankImg2.src = "assets/img/gold.png";
        rankImg.src = "assets/img/gold.png";
    } else if (playerData.level >= 10) {
        rankImg2.src = "assets/img/silver.png";
        rankImg.src = "assets/img/silver.png";
    } else {
        rankImg2.src = "assets/img/bronze.png";
        rankImg.src = "assets/img/bronze.png"; // اصلاح شد
    }
}

loadRank();
