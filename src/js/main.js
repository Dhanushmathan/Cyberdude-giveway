let mainEl = document.querySelector("main");
let sucessfullUi = document.getElementById("formSubmited");
let formEl = document.querySelector("form")

let submitForm = (event) => {
    event.preventDefault()
    console.log("Form has been Submited");

    const formData = new FormData(formEl);

    console.log([...formData.entries()]);
    console.log([...formData.values()]);

    // updateUI()
}

formEl.addEventListener('submit', submitForm)

let updateUI = () => {
    mainEl.classList.add("hidden")
    sucessfullUi.classList.remove("hidden")
}

