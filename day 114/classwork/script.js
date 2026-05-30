// 1)
// მომხმარებელს შემოატანინე ნებისმიერი რიცხვი.
// გამოიტანე:

// მისი მოდული (უარყოფითი თუ არის, გახდეს დადებითი)
// მისი დამრგვალებული მნიშვნელობა (უახლოეს მთელ რიცხვამდე)
const username = Number(window.prompt('Enter a number'))
alert(Math.abs(username))

// 2)
// გაქვს რიცხვების სია.
// იპოვე:

// ყველაზე დიდი რიცხვი
// ყველაზე პატარა რიცხვი
let nums = [1,2,3,4,5,-1,-5-192,124]
console.log(Math.max(...nums)) // dashlis lists
console.log(Math.min(...nums))

// და ორივე დაბეჭდე.

// 3)
// მომხმარებელს შემოატანინე რიცხვი.
// გამოიტანე:

// ამ რიცხვის კვადრატი (ანუ საკუთარ თავზე გამრავლებული)
// ამ რიცხვის ფესვი
const usernam2 = Number(window.prompt('Enter a number: '))
alert(usernam2 ** 2)
alert(Math.sqrt(usernam2))

// 4)
// მომხმარებელს შემოატანინე ათწილადი რიცხვი (მაგ: 7.8).
// გამოიტანე ეს რიცხვი ისე, რომ ათწილადი ნაწილი მოიშალოს და დარჩეს ქვედა მთელი რიცხვი.
const username3 = Number(window.prompt('Enter a number: '))
alert(Math.floor(username3))

// 5)
// დააგენერირე შემთხვევითი რიცხვი 1-დან 100-მდე.
// ყოველ გაშვებაზე უნდა იყოს განსხვავებული.
let random = Math.floor(Math.random() * 99 + 1)
console.log(random)

// 6)
// კომპიუტერმა შემთხვევითად აირჩიოს რიცხვი 1-დან 10-მდე.
// მომხმარებელმა უნდა შეიყვანოს თავისი ვარაუდი.
// თუ სწორად გამოიცნო — დაწერე "სწორია".
// თუ ვერ გამოიცნო — დაწერე "არასწორია".

let comp = Math.floor(Math.random() * 9 + 1)
let username4 = Number(window.prompt('Enter a number: '))

while (true) {
    if (username4 != comp){
        alert('incorrect, try again')
        username4 = Number(window.prompt('Enter a number: '))
    }

    else{
        alert('correct!')
        break
    }
}