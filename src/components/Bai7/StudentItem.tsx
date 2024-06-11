import React from 'react'
import { FaEdit, FaTrash } from 'react-icons/fa';
interface Student{
    id: number;
    name: string;
    email: string;
    address: string;
    phone: string;
}
interface Prop{
    student: Student;
}

export default function StudentItem(student:Prop) {
  return (
    <div>
        <tr>
      <td className="py-2 px-4 border">{student.name}</td>
      <td className="py-2 px-4 border">{student.email}</td>
      <td className="py-2 px-4 border">{student.address}</td>
      <td className="py-2 px-4 border">{student.phone}</td>
      <td className="py-2 px-4 border">
        <button className="text-yellow-500 mr-2"><FaEdit /></button>
        <button className="text-red-500"><FaTrash /></button>
      </td>
    </tr>
    </div>
  )
}
