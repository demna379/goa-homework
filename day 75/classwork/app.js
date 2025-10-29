let left = document.getElementById("left")
let img = document.getElementById("img")
let right = document.getElementById("right")

let imgs = [
    "car1.webp",
    "car2.jpg",
    "car3.jpg",
    "car4.jpg",
    "car5.webp"
]

let count = 0
right.onclick = function(){
    img.src = imgs[count]
    if (count > 5){
        count = 0
    }else {
        count++
    }

}

left.onclick = function(){
    img.src = imgs[count]
    if (count < 0){
        count = 0
    }else {
        count--
    }
}