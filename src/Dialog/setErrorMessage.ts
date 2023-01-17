import React from "react"

export const setErrorMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event)
    const isValid = event.target.validity.valid
    const message = event.target.validationMessage
    const connectedValidationId = event.target.getAttribute("aria-describedby")
    const connectedValidation = connectedValidationId
        ? document.getElementById(connectedValidationId)
        : false

    if (connectedValidation && message && !isValid) {
        connectedValidation.innerText = "Please make at least one To-do list."
    } else {
        if (connectedValidation) {
            connectedValidation.innerText = ""
        }
    }
}
