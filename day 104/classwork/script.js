// შექმენით რაიმეინფუთი, და ასევე submit ღილაკი, ამ submit  ღილაკის  დაჭერაზე უნდა გამოჩნდეს  კუთხეში მესიჯი იმ   ტექსტით რაც   ინფუთში ეწერა,
// ზუსტად 3  წამით  უნდა გამოჩნდეს ეს დივი და შემდეგ გაქრეს
let box = document.getElementById('box2')
document.getElementById('submit').addEventListener('click',() => {
    let text = document.getElementById('inp').value
    document.getElementById('text').textContent = text
    box.style.transform = 'translate(0px)'
    setTimeout(() => {
        box.style.transform = 'translate(170px)'
    },3000)
})