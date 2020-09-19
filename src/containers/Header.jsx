import React, { useContext } from "react";
import "./styles/Header.scss";
import { GameContext} from "../GameContext";

export default function Header() {
  const { score } = useContext(GameContext);

  return (
    <header className="header">
      <div className="title">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
      </div>
      <div className="score">
      <h2>Score</h2>
      <h1>{score}</h1></div>
    </header>
  );
}
