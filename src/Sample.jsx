import React, { useEffect } from 'react'
import { BASEURL } from './utils/constants'
import { carts } from './utils/apiEndPoints'
function Sample() {
    const fetchdata=fetch(`${BASEURL}/${carts}`).then(res=>res.json()).then(json=>console.log(json))
    useEffect(()=>{fetchdata},[fetchdata])
  return (
    <div>{}</div>
  )
}

export default Sample