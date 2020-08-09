import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <video width="750" controls>
        <source src="assets/rock-balance.mp4" type="video/mp4" />
      </video>
      <video width="750" controls>
        <source src="assets/mare.mp4" type="video/mp4" />
      </video>
      <video width="750" controls>
        <source src="assets/waterfall.mp4" type="video/mp4" />
      </video>
    </div>
  )
}

export default App
