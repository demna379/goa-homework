const inps = document.getElementsByClassName("inp")
const error = document.getElementById("error")
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    if (inps[0].value === ''){  
        error.textContent = 'Forgot Email?'
    }
    else if(inps[1].value === ''){
        error.textContent = 'Forgot Password?'
    }
})