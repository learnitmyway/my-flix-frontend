import React from 'react'
import './App.css'

function Video({ src }) {
  return (
    <video width="750" controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

function App() {
  return (
    <main className="App">
      <Video src="assets/rock-balance.mp4" />
      <Video src="assets/mare.mp4" />
      <Video src="assets/waterfall.mp4" />
    </main>
  )
}

export default App
