"use strict"

const id = document.querySelector('#id')
const password = document.querySelector('#password')
const loginBtn = document.querySelector('#button')

loginBtn.addEventListener("click", Login)

function Login() {
    const req = {
        'id' : id.value,
        'password' : password.value
    };
    // console.log(req)

    // console.log(JSON.stringify(req))
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        
        body: JSON.stringify(req)
    })

    
}