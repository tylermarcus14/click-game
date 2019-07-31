import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="container">

    <div className="jumbotron">
        <h1 className="display-12">{props.title}</h1>
        <p className="lead">Your Score: {props.score} | High Score: {props.highScore} </p>
        <p>{props.message}</p>
        
      </div>
    </div>

  );
}

export default Title;
