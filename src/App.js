import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";
//import "./App.css";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };
//if user loses by clicking same image twice this code runs and resets the score.  This will not reset the highscore unless its beaten
  gamelose = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    this.setState({score: 0});
    return true;
  }

  cardclickcount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          //sets the score and adds five each time user gets answer correct
          this.setState({score : this.state.score + 5}, function(){
            console.log(this.state.score);
          });
          //randomly shuffles the cards once the user clicks on one
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gamelose();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.cardclickcount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
