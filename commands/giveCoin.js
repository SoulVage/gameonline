import { addMessage } from "../utils/chatLogHandler.js";
import { coinHandler } from "../core/coinHandler.js";

export function givecoin(input) {
    const amount = input.split(" ")[1];
    if (amount > 300) {
        addMessage("You can't give more than 300 coin!", 2)
    }else {
        coinHandler(amount)
        addMessage(`You received $${amount} Coin!`, 2);
    }
  }