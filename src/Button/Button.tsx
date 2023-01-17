import React, { useState, useEffect } from "react"
import { Dialog } from "../Dialog/Content"

export const Button = () => {
  const [status, setStatus] = useState<string>("close")

  useEffect(() => {
    return (() => {
      setStatus((prevStatus) => {
        prevStatus = "close"
        return prevStatus
      })
    })
  })

  return <>
    <div className="button-container">
      <button className="custom-button" onClick={() => {
        setStatus((prevStatus) => {
          prevStatus = "showModal"
          return prevStatus
        })
      }}>CLICK ME!</button>
    </div>
    <Dialog status={status} />
  </>
}