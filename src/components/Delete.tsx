import axios from 'axios'
import React, { useEffect } from 'react'

export default function Delete() {
    // dùng thư viện axios để xóa user
    useEffect(() =>{
        // khi xóa cần truyền id
        axios.delete("http://localhost:8080/users/2")
    },[])
  return (
    <div>Delete</div>
  )
}
