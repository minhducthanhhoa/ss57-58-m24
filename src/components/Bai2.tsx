import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai2() {
    useEffect(()=>{
        axios.get("http://localhost:8080/students")
        .then(response => console.log("danh sách sinh viên", response.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>Bai2</div>
  )
}
