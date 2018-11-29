import React from 'react';
import "./Track.css";

class Track extends React.Component{


  renderAction(){
    //EJERCICIO 27 INCOMPLETO!!!!
  }


  render(){
    return(
      <div className="Track">
        <div className="Track-information">
          <h3>track name will go here </h3>
          <p>rack artist will go here | track album will go here</p>
        </div>
      <a className="Track-action">mas  or menos will go here</a>
      </div>
    );
  }//End of Render

}//end of Track

export default Track;
