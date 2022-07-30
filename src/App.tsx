import { useState } from 'react'
import reactLogo from './assets/react.svg'
import logo from './assets/forkedplate.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://github.com/SaraOlsson/forked-plate" target="_blank">
          <img src={logo} className="logo" alt="ForkedPlate logo" />
        </a>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          recipe count {count}
        </button>
      </div>
      <p className="read-the-docs">
        Soon to be your goto recipe platform
      </p>
    </div>
  )
}

export default App
