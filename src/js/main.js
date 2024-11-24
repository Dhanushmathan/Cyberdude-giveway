let mainEl = document.querySelector("main");
let sucessfullUi = document.getElementById("formSubmited");
let formEl = document.querySelector("form")

let validateForm = () => {
    let formInputsEl = formEl.querySelectorAll('input,select,textarea')
    let isFormDirty = true

    formInputsEl.forEach(field => {
        if (!field.hasAttribute('required')) {
            field.required = true
            isFormDirty = false
        }
    })
    return isFormDirty
}

let submitForm = (event) => {
    event.preventDefault()

    // do validation here
    if (validateForm()) {
        
        const formData = new FormData(formEl);

        const recordObj = Object.fromEntries(formData)
        createRecord(recordObj)

        updateUI()
    }

}


let updateUI = () => {
    mainEl.classList.add("hidden")
    sucessfullUi.classList.remove("hidden")
}

formEl.addEventListener('submit', submitForm)
