import axios from 'axios'
import React, { useEffect } from 'react'

export default function Find() {
    /*
        tìm kiếm những user có chứ cái
     */
    useEffect(()=>{
        let value:string = "o";
        axios.get(`http://localhost:8080/users?name_like=${value}`)
        .then(res => console.log("giá trị trả về", res))
    },[])
  return (
    <div>Find</div>
  )
}
