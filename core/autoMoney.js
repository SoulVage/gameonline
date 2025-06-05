import { creditHandler } from "../core/creditHandler.js";
import { playerData } from "../data/player.js";

setInterval(() => {
    creditHandler(playerData.level)
}, 15000);