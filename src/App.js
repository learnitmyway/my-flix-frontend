import React, { useState, useEffect } from 'react'
import './App.css'
import { getVideos } from './video.service'

function Video({ id }) {
  return (
    <video width="750" controls>
      <source src={`assets/videos/${id}.mp4`} type="video/mp4" />
    </video>
  )
}

const statuses = {
  LOADING: 'loading',
  LOADED: 'loaded',
  ERROR: 'err',
}

function App() {
  const [videos, setVideos] = useState([])
  const [status, setStatus] = useState(statuses.LOADING)

  async function fetchVideos() {
    try {
      const videos = await getVideos()
      setVideos(videos)
      setStatus(statuses.LOADED)
    } catch (err) {
      setStatus(statuses.ERROR)
      console.error(err)
    }
  }

  useEffect(() => {
    fetchVideos()
  }, [])

  return (
    <main className="App">
      {(() => {
        if (status === statuses.LOADING) {
          return <p>Loading...</p>
        } else if (status === statuses.ERROR) {
          return <p>Error</p>
        } else {
          return (
            <ul>
              {videos.map(({ videoId }) => (
                <li>
                  <Video key={videoId} id={videoId} />
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
