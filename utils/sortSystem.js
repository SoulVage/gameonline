const SortBtn = document.querySelector(".btn-sort-price")
const span = SortBtn.querySelector("span")
const productContainer = document.querySelector(".item-card-grid")
SortBtn.addEventListener("click", ()=> {
    sortItem()
})

function sortItem() {
    const allProducts = Array.from(productContainer.querySelectorAll(".card-item"));

    let sortedProducts = allProducts.sort((a, b) => {
        const priceA = parseInt(a.querySelector(".card-item-price").textContent.replace("$", ""))
        const priceB = parseInt(b.querySelector(".card-item-price").textContent.replace("$", ""))
        if (span.textContent == "High to Low") {
            return priceA - priceB
        }else {
            return priceB - priceA
        }
    })
    productContainer.innerHTML = ""
    sortedProducts.forEach(product => productContainer.appendChild(product));
    if (span.textContent == "High to Low") {
        span.textContent = "Low To High"
    }else {
        span.textContent = "High to Low"
    }
}