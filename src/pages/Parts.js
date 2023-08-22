import React from "react"
import "antd/dist/reset.css"
import "../App.css"
import { seriesParts } from "../config/data.js"


function Parts() {

  console.log("seriesParts in Parts.js: ", seriesParts)
  console.log(location.pathname)

  return (
    <div>
      <p>PARTS</p>


    </div>
  )
}

export default Parts
