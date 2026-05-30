// 1.
// დაწერე კოდი სადაც const ცვლადს უცვლი მნიშვნელობას (როგორც შენ მაგალითში).
// დაიჭირე ერორი catch-ით და გამოიტანე e.message.
try{
    const yes = 'yes'
    yes = 'no'
} catch(looool){
    console.log(looool.messege)
}

// 2.
// შექმენი ცვლადი name = "Luka"
// შემდეგ სცადე name() (როგორც ფუნქცია).
// დაიჭირე ერორი და გამოიტანე ტექსტი: "ეს ფუნქცია არ არის"
try{
    let name = 'demetre tavdadevuli'
    name()
} catch{
    console.log('this is not a function :D')
}

// 3.
// მცდარი JSON:

let data = "{ name: Luka }"

// გამოიყენე JSON.parse(data) try-ში
// და catch-ში დაწერე "არასწორი JSON"
try{
    JSON.parse(data)
} catch{
    console.log('incorrect JSON')
}

// 4.
// შექმენი მასივი:

let arr = [1, 2, 3]

// სცადე arr.toUpperCase()
// (არასწორი მეთოდია)
// დაიჭირე ერორი და გამოიტანე "არასწორი მეთოდი"
try{
    arr.toUpperCase()
} catch{
    console.log('incorrect method')
}

// 5.
// შექმენი ფუნქცია divide(a, b)
function divide(a,b){
    return a/b
}
// თუ b === 0, throw ერორი "0-ზე გაყოფა არ შეიძლება"
// და გარედან try/catch-ით დაიჭირე და დაბეჭდე მესიჯი
// return 'Infinity' instead of an error :(