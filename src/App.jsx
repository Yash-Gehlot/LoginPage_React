import { useState } from 'react'
import { LoginSiginup } from './Components/LoginSiginup/LoginSiginup'
import './Components/LoginSiginup/LoginSiginup.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LoginSiginup/>
    </>
  )
}

export default App
