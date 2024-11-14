const signupForm = document.querySelector('#signupForm')
signupForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    const name = document.querySelector('#name').value
    const surnames = document.querySelector('#surnames').value
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value
    const genred = document.querySelector('#genred').value

    const Users = JSON.parse(localStorage.getItem('users')) || []
    const isUserRegistered = Users.find(user => user.email === email)
    if(isUserRegistered){
        return alert('El usuario ya esta registado!')
    }

    Users.push({name: name, surnames: surnames, email: email, password: password, genred: genred})
    localStorage.setItem('users', JSON.stringify(Users))
    alert('Registro Exitoso!')
    window.location.href = 'inicioDeSesion.html'

})