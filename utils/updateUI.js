import { creditHandler } from "../core/creditHandler.js";
import { coinHandler } from "../core/coinHandler.js";

export function updateUI() {
    creditHandler()
    coinHandler()
}