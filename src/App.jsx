import { useState } from 'react'
import './App.css'
import AdminLogin from './components/AdminLogin'
import AdminMain from './components/AdminMain'
import BusinessDetails from './components/BusinessDetails'
import UserServices from './components/UserServices'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>    
      {/* <AdminLogin></AdminLogin> */}
      <AdminMain></AdminMain>
      <UserServices></UserServices>
    </>
  )
}

export default App
