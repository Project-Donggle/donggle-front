import { useState } from 'react'
import logo from './logo.svg'
import PageMap from '@UI/pages/pageMap'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <PageMap/>
    </div>
  )
}

export default App
