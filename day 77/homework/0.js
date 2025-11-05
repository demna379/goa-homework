// 2)გააკეტეთ თამაში "გამოიცანი რიცხვი", რენდომულ რიცხვი შინახეთ ცვლადში, შემდეგ მომხარებელს შემოატანინეთ რიცხვი,
//  და შეამოწმეთ გამოიცანა თუ არა, მიეცით 3 ცდა და შემდეგ გამოიტანეთ you lose, while loop დაგჭირდებათ
const submit = document.getElementById('submit') // submit
const h1 = document.getElementById('winner_loser') // show result lol
let count = 3
let random_num = Math.floor(Math.random() * 10 + 1)

submit.onclick = function(){
    const inp1 = document.getElementById('inp').value // check if user inp is correct
    if(inp1 == random_num){
        h1.textContent = 'you won, submit again to start a new game'
        count = 3
        random_num = Math.floor(Math.random() * 10 + 1)
    }
    else if(inp1 != random_num){
        count --
        h1.textContent = `you have ${count} tries left`
    }
    if(count == 0){
        h1.textContent = `you have lost. the number was ${random_num}. submit a new number to try again`
        random_num = Math.floor(Math.random() * 10 + 1)
        count = 3
    }
}