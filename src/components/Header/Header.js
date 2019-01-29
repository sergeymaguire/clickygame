import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
     <div className="instructions">
    Click an image to start a game! Do not click on the same one, if you do you will lose!
    </div>
    <div className="title">{props.children}</div>
    <div className="scores">
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
 
);


export default Header;