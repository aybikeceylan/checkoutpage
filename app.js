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
        item.parentElement.nextElementSibling.nextElementSibling.innerHTML = `Product Total :${proTotal}`
        //*Subtotal hesaplama
        total.forEach(item => {
            sum += +item.textContent

            document.querySelector(".subtotal").innerHTML = "$" + sum.toFixed(2)
        })
        //*Tax hesaplama
        tax = (sum * 0.18).toFixed(2)
        document.querySelector(".tax").innerHTML = "$" + tax
        //* ALLtotal hesaplama
        allTotal = sum + +tax + 19//shipping//
        document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(2)




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
            item.parentElement.nextElementSibling.nextElementSibling.innerHTML = `Product Total :${proTotal}`
            //*Subtotal hesaplama
            total.forEach(item => {
                sum -= +item.textContent

                document.querySelector(".subtotal").innerHTML = "$" + sum.toFixed(2)
            })
            //*Tax hesaplama
            tax = (sum * 0.18).toFixed(2)
            document.querySelector(".tax").innerHTML = "$" + tax
            //* ALLtotal hesaplama
            allTotal = sum + +tax + 19//shipping//
            document.querySelector(".alltotal").innerHTML = "$" + allTotal.toFixed(2)

        }


    })

})

remove.forEach(item => {
    item.addEventListener("click", () => {
        item.parentElement.parentElement.parentElement.remove()
    })
})



