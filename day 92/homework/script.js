const inps = document.getElementsByClassName("inp")
const error = document.getElementById("error")
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    if (inps[0].value === ''){
        error.textContent = 'Forgot Email?'
        inps[0].style.border = "1px solid red"
    }
    if(inps[1].value === ''){
        error.textContent = 'Forgot Password?'
        inps[1].style.border = "1px solid red"
    }
})