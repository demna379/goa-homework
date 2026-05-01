// https://api.escuelajs.co/api/v1/products/

// საიტზე დაამატეეთ ორი input და ერთი submit ღილაკი, შემდეგ მაგ ორ ომფითშო მომხარებელმა უნდა ჩაწეროს რაიმე id ები,
//  და submitზე დაჭერაზე უნდა გამოიტანოთ ეგ კონკრეტული პროდუქტების ინფორმაცია რომელიც მაგ ორ id ს შორის range შია

// მაგ:
// id1: 2
// id2: 8

// products:product3, product4, product5, product6, product7

async function names() {
    let api = await fetch('https://api.escuelajs.co/api/v1/products/')
    let data = await api.json()

    data.map(items => {
        console.log(items.id)
    })

    let submit = document.getElementById('submit')
    let main = document.querySelector('main')

    submit.addEventListener('click', () => {
        let input = document.getElementById('input').value
        let input2 = document.getElementById('input2').value

        for (let i = Number(input); i<input2;i++){
            let tit = document.createElement('h1').textContent = data[i].title
            let descript = document.createElement('p').textContent = data[i].description
            let price = document.createElement('p').textContent = data[i].price
            let div = document.createElement('div')
            div.append(tit,descript,price)
            main.append(div)
        }
    })
}

names()
