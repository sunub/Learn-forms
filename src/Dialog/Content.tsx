import { useEffect } from "react"
import { setDialogStatus } from "./setDialogStatus"
import { setErrorMessage } from "./setErrorMessage"
import React from "react"

type DialogStatus = {
    status: string
}
const Dialog = ({ status }: DialogStatus) => {
    useEffect(() => {
        setDialogStatus(status)
    }, [status])

    return <>
        <dialog className="dialog-box" >
            <h1>Insert To-Do List</h1>
            <form className="ToDo-form">
                <label htmlFor="text">
                    Enter To do
                </label>
                <input
                    type="text"
                    required
                    id="todo-input"
                    name="todolist-value"
                    minLength={3}
                    aria-describedby="name-validation"
                    onBlur={(event) => {
                        setErrorMessage(event)
                    }} />
                <span id="name-validation"
                    aria-live="assertive"
                    className="validation-message" />
                <div id="form-button-container">
                    <button id="close-button"
                        onClick={() => {
                            setDialogStatus("close-dialog")
                        }}>
                        close</button>
                    <button id="add-button">Add</button>
                </div>
            </form>
        </dialog>
    </>
}

export { Dialog }