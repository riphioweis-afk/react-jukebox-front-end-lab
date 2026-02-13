import { useState, useEffect } from 'react'

const TrackForm = ({ selectedTrack, onCreate, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: '',
    artist: '',
    genre: ''
  })

  useEffect(() => {
    if (selectedTrack) {
      setFormData(selectedTrack)
    }
  }, [selectedTrack])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (selectedTrack) {
      onUpdate(selectedTrack._id, formData)
    } else {
      onCreate(formData)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{selectedTrack ? 'Edit Track' : 'Add Track'}</h2>

      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
      />

      <input
        name="artist"
        value={formData.artist}
        onChange={handleChange}
        placeholder="Artist"
      />

      <input
        name="genre"
        value={formData.genre}
        onChange={handleChange}
        placeholder="Genre"
      />

      <button type="submit">
        {selectedTrack ? 'Update' : 'Create'}
      </button>
    </form>
  )
}

export default TrackForm
