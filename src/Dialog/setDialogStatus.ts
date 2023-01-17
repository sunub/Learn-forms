export function setDialogStatus(status: string) {
    const dialogDOM = document.querySelector(".dialog-box") as HTMLDialogElement

    if (status === "showModal") {
        dialogDOM.showModal()
    }

    if (status === "close-dialog") {
        dialogDOM.close()
    }
}
