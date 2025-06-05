import { addMessage } from "../utils/chatLogHandler.js";
import { creditHandler } from "../core/creditHandler.js";

export function givemoney(input) {
    const amount = input.split(" ")[1];
    if (amount > 3000000) {
        addMessage("You can't give more than $3000000 credit!", 2)
    }else {
        creditHandler(amount)
        addMessage(`You received $${amount} Credit!`, 2);
    }
  }