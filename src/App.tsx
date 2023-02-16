import { Routes, Route } from 'react-router-dom'

import './App.css'
import Wrapper from './components/wrapper/Wrapper'

function App() {
  return (
    <div className="container" data-testid="test-container">
      <Routes>
        <Route path="/*" element={<Wrapper />} />
      </Routes>
    </div>
  )
}

export default App
