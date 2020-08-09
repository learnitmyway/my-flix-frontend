function getVideos() {
  return fetch('/api/videos')
    .then((res) => res.json())
    .then((result) => result.videos)
}

export { getVideos }
