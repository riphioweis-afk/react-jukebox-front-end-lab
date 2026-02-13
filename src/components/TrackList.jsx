const TrackList = ({ tracks, onDelete, onEdit, onPlay }) => {
  if (!tracks.length) {
    return <p>No tracks yet. Add one to get the party started 🎶</p>
  }

  return (
    <div>
      <h2>All Tracks</h2>

      {tracks.map((track) => (
        <div key={track._id} className="track-card">
          <h3>{track.title}</h3>
          <p><strong>Artist:</strong> {track.artist}</p>
          <p><strong>Genre:</strong> {track.genre}</p>

          <div>
            <button onClick={() => onPlay(track)}>▶ Play</button>
            <button onClick={() => onEdit(track)}>✏ Edit</button>
            <button onClick={() => onDelete(track._id)}>🗑 Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default TrackList
