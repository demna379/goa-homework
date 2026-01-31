// 1)შექმენით სია რიცხვებით. გადამაოეთ და ყველა რიცხვი გაანახევრეთ ( გაყავით ორზე )

let numbers = [1,2,3,4,5]
let new_number = numbers.map(num => num/2)

// 2)შექმენით  სია სახელებით, გადამაპეთ და მათი სიგრძეები დააბრუნეთ
let names = ['name number1','name number2','name number3','demetre tavdadebuli']
let lenghts = names.map(len => len.length)

// 3)შექმენით სია,  სახელებით, და მათი სიგრძე გამრაავლებული მათ ინდექსზე დააბრუნეთ

let another_names = ['tornike','demetre','irakli','aleqsandre','demetre tavdadebuli']
let another_lenght = another_names.map((len,index) => len.length*index)
console.log(another_lenght)