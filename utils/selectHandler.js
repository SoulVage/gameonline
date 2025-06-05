const checkbox = document.querySelectorAll(".checkbox-custom")
const productCard = document.querySelectorAll(".card-item")

productCard.forEach( product => {
    product.addEventListener("click", () => {
        const checkbox = product.querySelector(".checkbox-custom")
        checkbox.classList.toggle("checked");
    })
})
const checkAll = document.querySelector(".check-all-wrapper")
checkAll.addEventListener("click", ()=> {
    let allChecked = true;
        checkbox.forEach(check => {
            if (!check.classList.contains("checked")) {
                allChecked = false;
            }
        });
        if (allChecked) {
            checkbox.forEach(check => {
                check.classList.remove("checked");
            });
        }else {
            checkbox.forEach(check => {
                check.classList.add("checked");
            });
        }
})