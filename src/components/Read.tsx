import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
interface User{
    id:number,
    name:string,
    address:string,
}
export default function Read() {
    const [user,setUser] = useState<User[]>([]);
    useEffect(() =>{
        axios.get("http://localhost:8080/users")
        .then(response => {
            console.log("giá trị trả về", response.data)
            setUser(response.data)
        })
        .catch(err => console.log(err))
    },[])
  return (
    <div>
        {/*
            dùng thư viện axios để lấy tất cả thông tin của user 
            khi lấy dữ liệu về thì dùng phương thức get
         */}
         <p>danh sách users</p>
         <ul>
            {user.map((item) => {
                return <li key={item.id}>{item.name}</li>
            })}
         </ul>
    </div>
  )
}
