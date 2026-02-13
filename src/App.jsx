import { useState, useEffect } from 'react'
import * as trackService from './services/trackService'
import TrackList from './components/TrackList'
import TrackForm from './components/TrackForm'
import NowPlaying from './components/NowPlaying'

const App = () => {
  const [tracks, setTracks] = useState([])
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [selectedTrack, setSelectedTrack] = useState(null)
  const [nowPlaying, setNowPlaying] = useState(null)

  useEffect(() => {
    const fetchTracks = async () => {
      const data = await trackService.index()
      setTracks(data)
    }
    fetchTracks()
  }, [])

  const handleAddClick = () => {
    setSelectedTrack(null)
    setIsFormVisible(true)
  }

  const handleCreate = async (formData) => {
    const newTrack = await trackService.create(formData)
    setTracks([...tracks, newTrack])
    setIsFormVisible(false)
  }

  const handleUpdate = async (trackId, formData) => {
    const updatedTrack = await trackService.update(trackId, formData)
    setTracks(tracks.map(t => t._id === trackId ? updatedTrack : t))
    setIsFormVisible(false)
  }

  const handleDelete = async (trackId) => {
    await trackService.deleteTrack(trackId)
    setTracks(tracks.filter(t => t._id !== trackId))
  }

  const handleEdit = (track) => {
    setSelectedTrack(track)
    setIsFormVisible(true)
  }

  const handlePlay = (track) => {
    setNowPlaying(track)
  }

  return (
    <>
      <h1>🎵 Reactville Jukebox</h1>
      <button onClick={handleAddClick}>Add New Track</button>

      <TrackList
        tracks={tracks}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onPlay={handlePlay}
      />

      {isFormVisible && (
        <TrackForm
          selectedTrack={selectedTrack}
          onCreate={handleCreate}
          onUpdate={handleUpdate}
        />
      )}

      {nowPlaying && <NowPlaying track={nowPlaying} />}
    </>
  )
}

export default App
