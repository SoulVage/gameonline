import { givemoney } from "../commands/giveMoney.js";
import { additem } from "../commands/addItem.js";
import { givecoin } from "../commands/giveCoin.js";
import { addMessage } from "../utils/chatLogHandler.js";
import { addlevel } from "../commands/addLevel.js";
import { creditHandler } from "../core/creditHandler.js";
import { coinHandler } from "../core/coinHandler.js";
import { updateLevel } from "./levelSystem.js";
const inputElement = document.querySelector(".input-type-command")


const MainContainer = document.querySelector(".command-log-container")
    

document.addEventListener("keydown", function(event) {
    if (event.key === "~" || event.key === "`" || event.key === "÷") {
      document.querySelector(".command-log-container").classList.toggle("active")
    }
    if (event.key === "Enter" && MainContainer.classList.contains("active")) {
        let inputValue = inputElement.value
        addMessage(inputValue, 1)
        if (inputValue.startsWith("/givemoney")) {
            givemoney(inputValue);
        }else if(inputValue.startsWith("/additem")) {
            additem(inputValue);
        }else if(inputValue.startsWith("/givecoin")) {
            givecoin(inputValue);
        }else if(inputValue.startsWith("/addlevel")) {
            addlevel(inputValue);
        }else if(inputValue.startsWith("/commands")) {
            addMessage("There Is All Commands That I Have! <br> <br> /givemoney <br> /additem <br> /givecoin <br> /addlevel", 2)
        }else if(inputValue.startsWith("/seyed")) {
            addMessage("Seyed Koonie ;)", 2)
        }else {
            addMessage(`"${inputValue}" Is Not A Command`, 2);
        }
        inputElement.value = ""
    }
  });
