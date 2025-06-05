export function runSearch() {
    const inputSearch = document.querySelector(".input-search")
    const allProducts = document.querySelectorAll(".card-item")

    inputSearch.addEventListener("keyup", ()=> {
        let inputValue = inputSearch.value.toLowerCase()
        allProducts.forEach(product => {
            let text = product.querySelector(".card-title").textContent.toLowerCase();
             if (inputValue == "") {
                product.style.opacity = 1;
            }else if (!text.includes(inputValue)) {
                product.style.opacity = 0.2;
            }else {
                product.style.opacity = 1;
            }
        })
    })
}