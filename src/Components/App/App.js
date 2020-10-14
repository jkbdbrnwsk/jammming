import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: [
        {
          name: 'Song1',
          artist: 'Band1',
          album: 'Album1',
          id: 1,
        },
        {
          name: 'Song2',
          artist: 'Band2',
          album: 'Album2',
          id: 2,
        },
        {
          name: 'Song3',
          artist: 'Band3',
          album: 'Album3',
          id: 3,
        },
      ],
      playlistName: 'My Playlist',
      playlistTracks: [
        {
          name: 'playlistName1',
          artist: 'playlistBand1',
          album: 'playlistAlbum1',
          id: 4,
        },
        {
          name: 'playlistName2',
          artist: 'playlistBand2',
          album: 'playlistAlbum2',
          id: 5,
        },
        {
          name: 'playlistName3',
          artist: 'playlistBand3',
          album: 'playlistAlbum3',
          id: 6,
        },
      ],
    };
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className='highlight'>mmm</span>ing
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-playlist'>
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName}
                      playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
