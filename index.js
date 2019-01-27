// JXA

const { run } = require('@jxa/run')

const currentUserName = () =>
  run(() => {
    const sys = Application('System Events')
    return sys.currentUser().name()
  })

const getITunesCurrentTrackInfo = () =>
  run(() => {
    const buildStatusObj = () => ({
      title: track.name() || '',
      trackNumber: track.trackNumber(),
      albumArtist: track.albumArtist() || '',
      artist: track.artist() || '',
      album: track.album() || '',
      releaseDate: track.releaseDate(),
      year: track.year(),
      duration: track.duration()
    })

    const iTunes = Application('iTunes')
    const track = iTunes.currentTrack()
    return buildStatusObj(track)
  })

// server

const express = require('express')

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 3000

app.get('/username', async (req, res) => {
  try {
    const username = await currentUserName()
    res.json({ username })
  } catch (error) {
    console.error('get current username error', error)
    res.status(404).json({ error: error.message })
  }
})

app.get('/track', async (req, res) => {
  try {
    const track = await getITunesCurrentTrackInfo()
    res.json(track)
  } catch (error) {
    console.error('get current track info error', error)
    res.status(404).json({ error: error.message })
  }
})

app.listen(port, () => {
  console.log('Node.js is listening to PORT:' + port)
})
