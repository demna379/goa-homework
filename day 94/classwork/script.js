// 1)მომხარებელს შემოატანინეთ სახელი, შემდეგ  შეამოწმეთ თუ უდრის "davit" ს, დააკონსოლოგეთ "controller", სხვა შემთხვევაში  თუ უდრის "aleksandre" ს,
//  დააკონსოლოგეთ "mentor",
//  სხვა  შემთხვევაში თუ არცერთს არ უდრის დააკონსოლოგეთ "i dont know ternary operator ის გამოყენებით

let username = prompt('enter yout name')

username === 'davit' ? console.log('controller') : username === 'aleksandre' ? console.log('mentor') : console.log('i dont know 🗣️🔥🔥')


switch(username){
    case 'aleksandre':
        console.log('mentor')
        break
    case 'davit':
        console.log('controller')
        break
    default:
        console.log('idk')
}