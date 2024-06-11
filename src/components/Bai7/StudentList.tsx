import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StudentItem from './StudentItem';
interface Student{
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}

export default function StudentList() {
    const [students, setStudents] = useState<Student[]>([]);

    useEffect(() => {
      axios.get<Student[]>('http://localhost:8080/students1')
        .then(response => setStudents(response.data))
        .catch(error => console.error(error));
    }, []);
  return (
    <div>
         <div className="container mx-auto my-5">
      <h1 className="text-2xl font-bold mb-5">Quản lý sinh viên</h1>
      <button className="bg-green-500 text-white py-2 px-4 rounded">Thêm mới sinh viên</button>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border">Tên sinh viên</th>
            <th className="py-2 px-4 border">Email</th>
            <th className="py-2 px-4 border">Địa chỉ</th>
            <th className="py-2 px-4 border">Số điện thoại</th>
            <th className="py-2 px-4 border">Lựa chọn</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <StudentItem key={student.id} student={student} />
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}
