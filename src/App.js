import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";


function shufflePups(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    friends,
    currentScore: 0,
    highScore: 0,
    message: "",
    clicked: [],
  };

  handleShuffle = () => {
    let shuffledFriends = shufflePups(friends);
    this.setState({ friends: shuffledFriends });
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({
      currentScore: newScore,
      message: "Correct!"
    });
    if (newScore >= this.state.highScore) {
      this.setState({ highScore: newScore });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      currentScore: 0,
      highScore: this.state.highScore,
      message: "Wrong! Click to play again.",
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <Wrapper>
        <Title
          title="Puppy Memory Game"
          score={this.state.currentScore}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        {this.state.friends.map(friend => (
          <FriendCard
            key={friend.id}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
            id={friend.id}
            image={friend.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;