import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

console.log('here 0')
function App() {
    console.log('here 1')
  const [count, setCount] = useState(0)
    console.log('here 2')

    const onClick = () => {
        console.log('here 3')
        setCount((count) => {
            console.log('here 4')
            count + 1
        })
    }


  return (
    <div className="App">
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={onClick}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
