const minus = document.querySelectorAll(".minusBtn")
const plus = document.querySelectorAll(".plusBtn")
const remove = document.querySelectorAll(".btnrmv")
const total = document.querySelectorAll(".pro")
sum = 100.98;

plus.forEach(item => {
    item.addEventListener("click", () => {
        //* artı ile miktarı arttırma
        ++item.previousElementSibling.textContent

        //*Product Total hesaplama
        let price = item.parentElement.previousElementSibling.children[1].children[0].textContent

        proTotal = item.previousElementSibling.textContent * price

        console.log(price);
        document.querySelector(".total").innerHTML = `Product Total :${proTotal}`
        //*Subtotal hesaplama
        total.forEach(item => {
            sum += item.textContent
            console.log(sum)
            document.querySelector(".subtotal").innerHTML = sum
        })

    })
})

minus.forEach(item => {

    item.addEventListener("click", () => {
        if (item.nextElementSibling.textContent > 1) {
            --item.nextElementSibling.textContent;
            console.log(item.nextElementSibling)


            let price = item.parentElement.previousElementSibling.children[1].children[0].textContent

            proTotal = item.nextElementSibling.textContent * price

            console.log(price);
            document.querySelector(".total").innerHTML = `Product Total :${proTotal}`

        }


    })


})

remove.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.parentElement.remove()
    })
})



