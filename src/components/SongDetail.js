import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a Song !</div>
  }
  return (
    <div>
      <h2>Detail for :</h2>
      <h4>Title: {song.title}</h4>
      <h5>Duration: {song.duration}</h5>
    </div>
  )
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)
