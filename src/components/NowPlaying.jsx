const NowPlaying = ({ track }) => {
  return (
    <>
    <div className="now-playing">
      <h2>🎶 Now Playing</h2>
      <h3>{track.title}</h3>
      <p>{track.artist}</p>
      <p>{track.genre}</p>
    </div>
    </>
  )
}

export default NowPlaying
