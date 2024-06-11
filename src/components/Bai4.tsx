import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai4() {
    useEffect(()=>{
        axios.delete("http://localhost:8080/students/3")
        .then(response => console.log("danh sách sinh viên sau khi xóa", response.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>Bai4</div>
  )
}
