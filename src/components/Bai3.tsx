import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai3() {
    useEffect(()=>{
        axios.get("http://localhost:8080/students/6")
        .then(response => console.log("kết quả tìm thấy", response.data))
        .catch(err => console.log("không tìm thấy bản ghi", err))
    },[])
  return (
    <div>Bai3</div>
  )
}
