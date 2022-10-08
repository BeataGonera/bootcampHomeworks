const inputName = document.querySelector("#name")
const inputSurname = document.querySelector("#surname")
const inputAddress = document.querySelector("#address")
const buttonAdd = document.querySelector(".button-add")
const listOfUsers = document.querySelector("#list-of-users")


buttonAdd.addEventListener("click", () => {

    if(inputName.value === '' || inputSurname.value === '' || inputAddress.value === ''){
        window.alert("Wypełnij zaznaczone pola")
    }else{
        let newRow = listOfUsers.insertRow(1)
        let nameCell = newRow.insertCell(0)
        let surnameCell = newRow.insertCell(1)
        let addressCell = newRow.insertCell(2)
        
        nameCell.innerText = inputName.value
        surnameCell.innerText = inputSurname.value
        addressCell.innerText = inputAddress.value
    }
})
