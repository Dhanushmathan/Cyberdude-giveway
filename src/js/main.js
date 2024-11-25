let mainEl = document.querySelector("main");
let sucessfullUi = document.getElementById("formSubmited");
let formEl = document.querySelector("form")
import conditionList from "./conditions.data.js";
let conditionContainerEl = document.getElementById("conditions")

    // console.log(conditionList)
    ; (function injectConditions() {
        let fragment = document.createDocumentFragment()

        // Looping all condtions list
        conditionList.forEach((condtion) => {
            let liEl = document.createElement('li')
            liEl.textContent = condtion
            fragment.appendChild(liEl)
        })
        conditionContainerEl.appendChild(fragment)
    })()

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
