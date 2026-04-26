// <!-- https://api.escuelajs.co/api/v1/products/

// საიტზე დაამატეეთ ერთი input და ერთი submit ღილაკი, შემდეგ მაგ ინფუთში მომხარებელმა უნდა ჩაწეროს რაიმე პროდუქტის title, და დაsubmit ებაზეე უნდა გამოიტანოთ ეგ კონკრეტული ინფორმაცია მაგ პროდუქტზე

// ამ დავალებას დაუმატეთ რომ ძებნიდეს გინდც ნახევარი title ჩაწეეროს მომხარებელმა და ასევეე რომც ჩაწეროს id -->


let api = fetch('https://api.escuelajs.co/api/v1/products/')
let response = api.then(result => result.json())
response.then(result => {
    result.map(item => {
        console.log(item.title + '     ' + item.id)
    })
})

let submit = document.getElementById('submit')
let result = document.getElementById('random')

submit.addEventListener('click', () => {
    let input = document.getElementById('input').value.toLowerCase()
    response.then(item => {
        item.map(item => {
            if (item.title.toLowerCase().split(0,input.length) == input || item.id == input){
                result.textContent = item.description
                console.log('bruh')
            }
        })
    })
})