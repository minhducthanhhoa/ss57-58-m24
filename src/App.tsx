import React from 'react'
import Read from './components/Read'
import Create from './components/Create'
import Delete from './components/Delete'
import Update from './components/Update'
import Find from './components/Find'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Bai4 from './components/Bai4'
import Bai5 from './components/Bai5'
import Bai6 from './components/Bai6'

export default function App() {
  return (
    <div>
      <Read></Read>
      {/* <Create></Create> */}
      <Delete></Delete>
      <Update></Update>
      <Find></Find>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Bai4></Bai4>
      <Bai5></Bai5>
      <Bai6></Bai6>
    </div>
  )
}
