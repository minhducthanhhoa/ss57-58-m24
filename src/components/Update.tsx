import axios from 'axios'
import React, { useEffect } from 'react'

export default function Update() {
    // khi update thì có 2 phương thức put và patch
    // PUT: update tất cả
    // PATCH: update từng trường
    // khi update phải biết được id của user 
    useEffect(()=>{
        axios.patch("http://localhost:8080/users/4", {name:"huyền trang"})
    },[])
  return (
    <div>

    </div>
  )
}
