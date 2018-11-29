import React, { Component } from 'react';
import './App.css';


//Excercise 12 Components
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';


class App extends Component {

  // excercice 30
  constructor(props){
    super(props);
    //excercice 31
    this.state = {searchResults:[
        [ {
          name:'Juan Lopez',
          artist:'Musico',
          album:'La rueda magica',
          id: 12345
        },
        {
          name:'Lucas Castro',
          artist:'Musico',
          album:'Escalera de M.C. Escher',
          id: 345677
        }

        ]
      ]}


  }
  render() {
    //Excercise 11-32
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div class="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist />
          </div>
      </div>
    </div>
  );
  }
}//End of App

export default App;
