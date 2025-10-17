let string = "aleksandre"

// String length
console.log(string.length) // 10
// String charAt()
console.log(string.charAt(2)) // "e"
// String concat()
console.log(string.concat("hello world")) // "aleksandrehello world"
// String at()
console.log(string.at(2)) // "e"
// String slice()
console.log(string.slice(2, 7)) // "eksan"
// String toUpperCase()
console.log(string.toUpperCase()) // "ALEKSANDRE"
// String toLowerCase()
console.log(string.toLowerCase()) // "aleksandre"
// String trim()
string = "           aleksandre dzukaevi              "
console.log(string.trim()) // "aleksandre dzukaevi"
string =  "aleksandre"
// String replace()
console.log(string.replace("a", "d")) // "dleksandre"
// String split()
string = "aleksandre dzukaevi"
console.log(string.split(" ")) // [ 'aleksandre', 'dzukaevi' ]


// გადახედეთ თითო მეთოდს, გაიაზრეთ რას აკეთებს შემდეგ ტითოზე მაგალითი გააკეთეთ
// length itvlis elementebis raodenobas 
// "11" == 2

// charAt igebs ricxvs argumentad da printavs im elements rac mag indexszea
// '11'.chatAt(0) === 1

// concat ubralod concatinacias aketebs, igebs ert arguments da aertebs im strings romelsac eg gavuweret
// console.log(string.concat("hello world")) // "aleksandrehello world"

// at igivea rogorc charAt
// console.log(string.at(2)) // "e"

// slice abrunebs texts erti indexidan meore indexamde
// console.log(string.slice(2, 7)) // "eksan"

// toUpperCase asoebs dids xdis
// console.log(string.toUpperCase()) // "ALEKSANDRE"

// toLowerCase apataravebs
// console.log(string.toLowerCase()) // "aleksandre"

// trim marto texts tovebs spacebis garda
// string = "           aleksandre dzukaevi              "
// console.log(string.trim()) // "aleksandre dzukaevi"
// string =  "aleksandre"

// replace cvlis pirvel asos meore asod
// console.log(string.replace("a", "d")) // "dleksandre"

// split igebs arguments da mag elementis shoris xlichavs strings
// string = "aleksandre dzukaevi"
// console.log(string.split(" ")) // [ 'aleksandre', 'dzukaevi' ]