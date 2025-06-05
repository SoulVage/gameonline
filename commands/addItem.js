import { addMessage } from "../utils/chatLogHandler.js";


export function additem(amount) {
    addMessage(`You received "${amount}" Item!`, 2);
}