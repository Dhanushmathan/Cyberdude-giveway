let loginFormEl = document.querySelector("form#loginForm")

const checkIfUserLoggedIn = () => {
    let userObj = JSON.parse(localStorage.getItem('Users'))

    if (userObj) {
        window.location.replace("/src/dashboard.html")
    }
}
checkIfUserLoggedIn()

const handleLoginForm = (event) => {
    event.preventDefault()

    let formData = new FormData(loginFormEl)
    let { email, password } = Object.fromEntries(formData)

    // firebase user loggin
    loginUser(email, password).then((user) => {
        // login state in localstorage
        localStorage.setItem("Users", JSON.stringify(user))

        window.location.replace('/src/dashboard.html')

    }).catch(({ errorCode }) => {
        if (errorCode === "auth/invalid-credential") {
            alert("Username/Password doesn't exist")
        }
        loginFormEl.reset()
    })
}

loginFormEl.addEventListener('submit', handleLoginForm)
