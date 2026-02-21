const main = document.querySelector('#main') // get all products
const uhh = document.getElementById('uhh') // header div
const adds = document.querySelectorAll('.add')  // buttons
const cart_btn = document.getElementById('btn') // cart button
const cart_box = document.getElementById('cart_box') // cart box
const product = document.querySelectorAll('.product') // products
const amount = document.getElementById("amount") // amount paragraph
const images = document.querySelectorAll('img')
let bool = true
let sum = 0
for (let i = 0; i < adds.length; i++){ // add product to cart box
    adds[i].addEventListener('click',() => {
        cart_box.appendChild(product[i].cloneNode(true))
        sum++
        amount.textContent = sum
        
    })
}
cart_btn.addEventListener('click',() => {
    if (bool == true){
        cart_box.style.transform = 'translate(0px)'
        uhh.style.width = '50%'
        main.style.transform = 'translate(-200px)'
        bool = false
    }
    else if (bool == false){
        cart_box.style.transform = 'translate(300px)'
        main.style.transform = 'translate(0px)'
        uhh.style.width = '100%'
        bool = true
    }
})
for (let i of images){
    i.src = 'image.png'
    console.log(i)
}