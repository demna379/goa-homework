// 3)შექმენით სია, შემდეგ მომხარებელს შემოატანინეთ რიცხვი და მაგ ინდექსზე მდგომი ელემენტი ამოშალეთ
let list = [1,2,3,4]
const random = Number(window.prompt('enter a number'))
list.splice(random,1)
console.log(list)