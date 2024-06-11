import axios from 'axios'
import React, { useEffect } from 'react'

export default function Create() {
    useEffect(()=>{
        let newUser = {
            name:"trang",
            address:"trang@gmail.com"
        }
        axios.post("http://localhost:8080/users",newUser);
    },[])
  return (
    <div>
        {/*
            tiến hành thêm dữ liệu 
            khi thêm dữ liệu thì dùng post 
         */}
         
    </div>
  )
}
