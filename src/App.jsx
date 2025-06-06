import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState("Akash")

  const handleClick = () => {
    alert("Hey I Am Clicked")

  }

  const handleChange = (e) => {
    setName(e.target.value)
  }

  return (
    <>
      <div className="button">
        <button onClick={handleClick}>Click Me</button>
      </div>
      <input type="text" value={name} onChange={handleChange}/>
    </>
  )
}

export default App
