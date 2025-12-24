let cart = document.getElementById("cover")
let shopping = document.getElementById("shopping")
let cancel = document.getElementById("cancel")
let card = document.getElementsByClassName("card")
let add = document.getElementById("add")
let main = document.getElementsByTagName("main")[0]

cart.addEventListener("click", function(){
    shopping.style.transform = "translate(0px)"
    main.style.marginRight = "150px"
}) 

cancel.addEventListener("click", function(){
    shopping.style.transform = "translate(270px)"
    main.style.marginRight = "0px"
})

let Amount = document.getElementById("Amount")
let amount = 0

let Total = document.getElementById("Total")
let total = 0

for (let element of card) {
    let btn = element.querySelector(".btn")
    btn.addEventListener("click", function(){
    
      let Price = element.querySelector("span").textContent.replace("$", "")
      let pcimage = element.querySelector("img").cloneNode(true)
      let div = document.createElement("div")
      let btn = document.createElement("button")
      let p = document.createElement("p")
      let pcname = element.querySelector("b").cloneNode(true)
      
      btn.textContent = "Delete"
      btn.class = "btna"
      p.class = "pcprice"
      div.class = "divunia"
      pcimage.class = "pcimage"
      p.textContent = Price

      div.appendChild(pcimage)
      div.appendChild(p)
      div.appendChild(pcname)
      div.appendChild(btn)
      add.appendChild(div)

      div.style.display = "flex"
      div.style.justifyContent = "center"
      div.style.alignItems = "center"
      div.style.flexDirection = "column"
      btn.style.backgroundColor = "black"
      btn.style.color = "white"
      btn.style.padding = "10px"
      btn.style.border = "none"
      btn.style.borderRadius = "8px"
      btn.style.cursor = "pointer"
      div.style.gap = "10px"

      amount++
      Amount.textContent = amount
      total += Number(Price)
      Total.textContent = total

      btn.addEventListener("click", function() {
        div.remove()
        total -= Number(Price)
        Total.textContent = total
        amount--
        Amount.textContent = amount
      })
    })
}