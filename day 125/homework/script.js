// გადააკეთეთ წინა დავალება async & await ით

async function details() {
    let api = await fetch('https://api.escuelajs.co/api/v1/products/')
    let response = await api.json()

    response.map(item => {
        console.log(item.id)
    })

    let submit = document.getElementById('submit')
    let result = document.getElementById('random')

    submit.addEventListener('click', () => {
        let input = document.getElementById('input').value.toLowerCase()
        response.map(item => {
            if (item.title.toLowerCase().slice(0, input.length) == input || item.id == input) {
                result.textContent = item.description
                console.log('bruh')
            }
        })
    })
}

details()