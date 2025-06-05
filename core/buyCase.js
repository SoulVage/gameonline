import { cases } from "../data/cases.js"
import { playerData } from "../data/player.js"
import { openCase } from "../core/coreSystem.js"
import { updateUI } from "../utils/updateUI.js"
import { updateLevel } from "../core/levelSystem.js"

const allCases = document.querySelectorAll(".case-wrapper")

allCases.forEach(singleCase => {
    singleCase.addEventListener("click", ()=> {
        const caseName = singleCase.querySelector("h4").textContent.toLowerCase();
        const selectedCase = cases.find(caseItem => caseItem.name == caseName)
        const casePrice = selectedCase.price
        const earnedXp = selectedCase.xp
        const requiredLevel = selectedCase.level

        if (playerData.credit < casePrice || playerData.level < requiredLevel)  return;
        playerData.credit -= casePrice
        openCase(caseName);
        updateLevel(earnedXp)
        localStorage.setItem("credit", JSON.stringify(playerData.credit));
        updateUI();
    })
})
