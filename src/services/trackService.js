const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`

const index = async () => {
  const res = await fetch(BASE_URL)
  return res.json()
}

const create = async (formData) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  return res.json()
}

const update = async (trackId, formData) => {
  const res = await fetch(`${BASE_URL}/${trackId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  })
  return res.json()
}

const deleteTrack = async (trackId) => {
  await fetch(`${BASE_URL}/${trackId}`, {
    method: 'DELETE',
  })
}

export {
  index,
  create,
  update,
  deleteTrack
}
