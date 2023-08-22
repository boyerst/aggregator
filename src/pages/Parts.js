import React from "react"
import "antd/dist/reset.css"
import "../App.css"
import {data} from "../config/data.js"


function Parts() {

  console.log("data in Parts.js: ", data[0].name)
  console.log(location.pathname)

  return (
    <div>
      <p>PARTS</p>
      <p>{data[0].name}</p>

    </div>
  )
}

export default Parts
