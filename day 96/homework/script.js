// 1)შექმენით  სია ელემენტებით  [3, 4, 5], შემდეგ შექმენით კიდევ ერთი სია სადაც ამ წინა სიას დაშლით spread ოპერატორით, მაგრამ დასაწყისში უნდა იყოს დამატებული  1, 2,  ანუ მეორე სიაში უნდა იყოს [1, 2, 3, 4, 5]
let lstn1 = [3,4,5]
let lstn2 = [1,2, ...lstn1]

// 2)შექმენით ობიეეტი, 4 property ით, name, surname,  age, height, შემდეგ  შექმენით კიდევ  ერთი ობიექტი, სადაც იქნება დაშლილი ეს წინა ობიექტი  spread ოპერატორით, და დამატებული დასაწყისში იქნება eyeColor property
let obj = {
    color: 'red'
}

let random = {
    name: "demetre",
    surname: "tavdadebuli",
    age: "64 bit integer",
    height: "negative"
}

let another_random = {
    eyeColor: 'brown',
    ...random
}

// 3)შექმენით სია, 20 ელემენტით, შემდეგ დესტრუქვიით პირველი 10 ელემენტი შეინახეთ სიაში, დანარჩენი 10 კი სიაში rest ოპერატორით,
//  შემდეგ, შექმენით ახალი სია სადაც პირველ 10 ელემენტს გამოიყენებთ იმ ცვლადებს რომელბიც წინ ასიიდან წამოიღეთ, და შემდეგ იმ rest ოპერატორის სიის დეესტრუქცია  გააკეთეთ
let lstn = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
let [one,two,three,four,five,six,seven,eight,nine,ten,...rest] = lstn
let lstn3 = [one,two,three,four,five,six,seven,eight,nine,ten,rest]

// 4)შექმენით ობიექტი, შიგგნით 3 propety, ერთ  ერთში უნდა ინახებოდეს სია, როგორმე მოიფიქრეთ რომ მაგ სიის დესტრუქცია გავაკეთოთ ობიექტთან ერთად
let obj2 = {
    car: 'random',
    sanity: ['none','demna'],
    IQ_level: 'negative'
}
let {sanity} = obj2
let [ones,zero] = sanity
console.log(zero)

// 5)bro code ის ვიდეოს უყურეთ spread & rest ოპერატორზე