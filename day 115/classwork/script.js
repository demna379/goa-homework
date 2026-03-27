let div = document.getElementById('notfit')
let bool = true

document.getElementById('image').addEventListener('click',()=>{
    if (bool == true){
        div.style.transform = 'translate(0,90px)'
        div.style.transition = '0.5s'
        console.log('demna')
        bool = false
    }
    else if (bool == false){
        div.style.transform = 'translate(250px,10px)'
        console.log('demna2')
        bool = true
    }
})