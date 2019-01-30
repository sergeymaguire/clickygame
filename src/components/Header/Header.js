import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
  <div className="instructions">
      Welcome to the lizard memory game.  Click on any image, but be sure to not click on the same one or you will lose! If you get 50 points you win!
    </div>
    <div className="title">{props.children}</div>
    <div className="scores">
    {/* where the score for the game will show up */}
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;