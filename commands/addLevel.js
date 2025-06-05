import { addMessage } from "../utils/chatLogHandler.js";
import { addLevel } from "../core/levelSystem.js";

export function addlevel(input) {
    const amount = input.split(" ")[1];
    if (amount > 2000) {
        addMessage("You can't give more than 2000 level!", 2)
    }else {
        addLevel(amount)
        addMessage(`You received ${amount} level!`, 2);
    }
  }