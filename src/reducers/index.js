import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Yolanda', duration: '3:25' },
    { title: 'Cinta Ini Membunuhku', duration: '4:10' },
    { title: 'Penyesalanku', duration: '3:48' },
    { title: 'Yakin', duration: '2:59' }
  ]
}

const slelctedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: slelctedSongReducer
})
