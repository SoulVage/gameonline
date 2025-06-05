let htmlCode = ``;
const messageWrapper = document.querySelector(".container-show-command-info");

export function addMessage(message, user) {
    if (message != "") {
        if (user == 2) {
            htmlCode += `<div class="message-command-ui bot">${message}</div>`
            messageWrapper.innerHTML = htmlCode
            messageWrapper.scrollTop = messageWrapper.scrollHeight;
        }else if (user == 1) {
            htmlCode += `<div class="message-command-ui">${message}</div>`
            messageWrapper.innerHTML = htmlCode
            messageWrapper.scrollTop = messageWrapper.scrollHeight;
        }
    }
}
