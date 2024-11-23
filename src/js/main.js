let mainEl = document.querySelector("main");
let sucessfullUi = document.getElementById("formSubmited");
let formEl = document.querySelector("form")

let submitForm = (event) => {
    event.preventDefault()

    const formData = new FormData(formEl);

    const recordObj = Object.fromEntries(formData)
    createRecord(recordObj)

    updateUI()
}

formEl.addEventListener('submit', submitForm)

let updateUI = () => {
    mainEl.classList.add("hidden")
    sucessfullUi.classList.remove("hidden")
}

