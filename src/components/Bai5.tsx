import axios from 'axios'
import React, { useEffect } from 'react'

export default function Bai5() {
    useEffect(()=>{
        let newStudemt = {
            student_name:"nhung",
            email:"nhung@gmail.com",
            address:"hải phòng",
            phone:"0364657284",
            status:"đang hoạt động",
            created_at:"10/5/1024"
        }
        axios.post("http://localhost:8080/students",newStudemt)
        .then(res => console.log("danh sách sinh viên sau khi thêm", res.data))
        .catch(err => console.log(err))
    },[])
  return (
    <div>Bai5</div>
  )
}
