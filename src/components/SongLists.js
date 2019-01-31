import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectSong } from '../actions'

class SongLists extends Component {
  renderLists() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.duration}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="contetnt">{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return <div className="ui divided list">{this.renderLists()}</div>
  }
}

const maspStateToProps = ({ songs }) => {
  return { songs }
}

export default connect(
  maspStateToProps,
  { selectSong }
)(SongLists)
