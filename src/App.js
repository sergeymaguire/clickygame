import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import cards from "./cards.json";

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    //setting score to zero if user clicks the same image, highscore stays unless you get a higher one
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          //adding score to to high score and increasing it by 5
          cards[i].count = cards[i].count + 5;
          this.setState({score : this.state.score + 5}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          //if user clicks the same image they will lose the game 
          this.gameOver();
        }
      }
    });
  }
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}></Header>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
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
