// https://api.escuelajs.co/api/v1/products/

// საიტზეე დაამატეეთ ერთი input და ერთი submit ღილაკი, შემდეგ მაგ ინფუთში მომხარებელმა
//  უნდა ჩაწეროს რაიმე პროდუქტის title, და დაsubmit ებაზეე უნდა გამოიტანოთ ეგ კონკრეტული ინფორმაცია მაგ პროდუქტზე

let api = fetch('https://api.escuelajs.co/api/v1/products/')
let response = api.then(result => result.json())

let submit = document.getElementById('submit')
let result = document.getElementById('random')

submit.addEventListener('click', () => {
    let input = document.getElementById('input').value
    response.then(data => {
        data.map(item => {
            if (item.title == input){
                result.textContent = item.description
                return 0
            }
        })
    })
})

// description