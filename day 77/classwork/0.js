// 1)შექმენით random image picker, გვქონდეს 5 ცალი სურათი ფოლდერში და 1 ცალი ღლაკი დაა 1 ცალი img თეგი საიტზე, შემდეგ ამ ღილაკის დაჭერაზე ეს სურათი რენდომულად უნდა გახდეს ამ 5 სურათიდან ერთ ერთი

// მინიშნება:  სურათების src ეები შეინახეთ სიაში [] და შემდეგ მაგ სიიდან რენდომულად აიღეთ ერთი src

let images = [
    'first.png',
    'second.png',
    'third.png',
    'forth.png',
    'fifth.png'
]
let img = document.getElementById('picture')
document.getElementById('btn').onclick = function(){
    let rando = Math.floor(Math.random() * 5)
    img.src = images[rando]
    console.log(rando)
}