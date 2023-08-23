import React from "react"
import { useParams } from "react-router-dom"
import "antd/dist/reset.css"
import "../App.css"
import { seriesParts } from "../config/data.js"


function Parts() {

  console.log("seriesParts in Parts.js: ", seriesParts)
  console.log(location.pathname)


  const { slug } = useParams()
  const part = seriesParts[slug]


  const { title, rumble } = part

  return (
    <div>
      <p>Parts Component</p>
      <h3>{title}</h3>


    </div>
  )
}

export default Parts
