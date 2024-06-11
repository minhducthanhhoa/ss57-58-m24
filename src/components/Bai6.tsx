import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai6() {
    useEffect(() => {
        axios.put("http://localhost:8080/students/2", {
            student_name:"trang",
            email:"trang@gmail.com",
            address:"vĩnh phúc",
            phone:"0244573385",
            status:"không hoạt động",
            created_at:"5/4/2024"
        })  
        .then(res => console.log("kết quả sau khi cập nhật", res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>Bai6</div>
  )
}
