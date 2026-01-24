// 1)დაწერეთ რისთვის გამოიყენება ფორ ლუპში of, და რისთვის in
// of gamoiyeneba lits, string da in obieqtistvis

// 2)შეექმენით ფუნქცია რომელიც მიიღებს 2 არგუმენტს, სახელს და ასაკს, ეს ფუნქცია უდნა აreturnებდეს "მე ვარ {age} წლის და მქვია {name}",
//  ესეთ წინადადებას არგუმენტების მიხვედით, შექმენით სამი ცალი ასეთი ფუნქცია 3 ივე გზით |
// default  function creating
// function expression
// arrow function

function indroduction(name,age){
    return `i am ${name} and im ${age} old`
}

let indroduction2 = function(name,age){
    return `i am ${name} and im ${age} old`
}

let indroduction3 = (name,age) => `i am ${name} and im ${age} years old`