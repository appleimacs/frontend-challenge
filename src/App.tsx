import { Routes, Route } from 'react-router-dom'

import { HelloWorld } from './components'
import './App.css'

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/*" element={<HelloWorld />} />
      </Routes>
    </div>
  )
}

export default App
