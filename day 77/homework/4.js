// 6)შექმენით random position div, გვქონდეს რაიმე ერთი დივი, გასტილეთ, შემდეგ იყოს h1 "do you love me?" ღილაკი ამ დივის შიგნით, no,
//  ამ ღილაკის დაჭერაზე ეს დივი გადაადგილდეს random პოსიზიაცე ეკრანის ფარგლებში, ასევე იყოს ღილაკი yes, რომლის დაჭერაზეც ეს დივი გაქრება
//  და გამოჩნდება სხვა დივი(ისიც შექმენით) რომელშიც ეწერება i thought so, შეყვარუებლუებს ჩაუგდეთ მერე გაუხარდებათ😂

// random heart appear

const img = document.getElementById('img')
setInterval(() => {
    let eh = Number(document.body.clientWidth) 
    let randoms = Math.floor(Math.random() * eh)
    img.style.left = `${randoms}px`
    console.log(img.clientWidth)
}, 2000);

// random heart appear part 

// random position div

const no = document.getElementById('no') // no btn
const div = document.getElementById('random') // div random
const div2 = document.getElementById('random2')
const yes = document.getElementById("yes")
// div.style.transition = '0.3s'

no.onclick = () => {
    let body_width = Number(document.body.clientWidth - div.clientWidth)
    let body_height = Number(document.body.clientHeight - div.clientHeight)
    let random = Math.floor(Math.random() * body_width - body_width / 2)
    let random22 = Math.floor(Math.random() * body_height - body_height / 2)
    div.style.left = `${random}px`
    div.style.top = `${random22}px`
    console.log('demna')
}
yes.onclick = () => {
    div.style.display = 'none'
    div2.style.display = 'flex'
}