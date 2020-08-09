import React, { useState, useEffect } from 'react'
import './App.css'

function temp() {
  return [
    {
      id: '1',
      src: 'assets/rock-balance.mp4',
    },
    {
      id: '2',
      src: 'assets/mare.mp4',
    },
    {
      id: '3',
      src: 'assets/waterfall.mp4',
    },
  ]
}

function Video({ src }) {
  return (
    <video width="750" controls>
      <source src={src} type="video/mp4" />
    </video>
  )
}

const statuses = {
  LOADING: 'loading',
  LOADED: 'loaded',
}

function App() {
  const [videos, setVideos] = useState([])
  const [status, setStatus] = useState(statuses.LOADING)

  async function getVideos() {
    const videos = await temp()
    setVideos(videos)
    setStatus(statuses.LOADED)
  }

  useEffect(() => {
    getVideos()
  }, [])

  return (
    <main className="App">
      {(() => {
        if (status === statuses.LOADING) {
          return <p>Loading...</p>
        } else {
          return (
            <ul>
              {videos.map(({ id, src }) => (
                <li>
                  <Video key={id} src={src} />
                </li>
              ))}
            </ul>
          )
        }
      })()}
    </main>
  )
}

export default App
