import { useState } from 'react'
import logo from './logo.svg'
import PageMap from '@UI/pages/pageMap'
import PageMap2 from '@UI/pages/PageMap2'
import './App.css'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
       <PageMap2/>
    </div>
  )
}

export default App
