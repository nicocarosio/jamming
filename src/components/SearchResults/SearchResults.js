import React from 'react';
import './SearchResults';
import TrackList from '../TrackList/TrackList';

//Excercise 18
class SearchResults extends React.Component{


  render(){
    //Excercise 33
    return(
            <div className="SearchResults">
              <h2>Results</h2>
              <TrackList tracks={this.props.searchResults}/>
            </div>
          );
    }//End of Render


}//End of SearchResults


export default SearchResults;
