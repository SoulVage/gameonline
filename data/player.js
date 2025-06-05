export let playerData = {
    credit: JSON.parse(localStorage.getItem("credit")) || 200,
    coin: JSON.parse(localStorage.getItem("coin")) || 0,
    level: JSON.parse(localStorage.getItem("level")) || 1,
    xp: JSON.parse(localStorage.getItem("xp")) || 0,
    openedCase: JSON.parse(localStorage.getItem("openedCase")) || 0
}