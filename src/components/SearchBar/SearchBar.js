import React from 'react';
import "./SearchBar.css";

//Excercise 15 
class SearchBar extends React.Component{

  render(){
    return(
      <div className="SearchBar">
        <input placeholder="Enter A Song, Album, or Artist" />
        <a>SEARCH</a>
      </div>
    );
  }//End of Render

}//end of SearchBar

export default SearchBar;
