import React, { useContext } from "react";
import "./styles/Board.scss";
import { GameContext } from "../GameContext";
import GameState from "../GameState";
import { Hands } from "../Hand";
import HandButton from "./HandButton";
import classNames from "classnames";

export default function Board() {
  const { gameState, handlePlayAgainClick, cpuHand, selectedHand } = useContext(
    GameContext
  );

  const getHandsButtonsToChoose = () => {
    const handsEl = [];
    for (const key in Hands) {
      const isThisHandSelected = Hands[key] === selectedHand;
      const notHide =
        gameState === GameState.USER_SELECTING_HAND ||
        (isThisHandSelected && gameState !== GameState.USER_SELECTING_HAND);
      const isDisabled = gameState !== GameState.USER_SELECTING_HAND;
      handsEl.push(
        <HandButton
          key={Hands[key].id}
          hand={Hands[key]}
          isDisabled={isDisabled}
          hide={!notHide}
        />
      );
    }

    return handsEl.map((h) => h);
  };

  const isDrawLoseWonState =
    gameState === GameState.DRAW ||
    gameState === GameState.WON ||
    gameState === GameState.LOSE;

  let gameText;
  switch (gameState) {
    case GameState.DRAW:
      gameText = "Draw";
      break;
    case GameState.WON:
      gameText = "You won!";
      break;
    case GameState.LOSE:
      gameText = "You lose!";
      break;
    case GameState.AI_SELECTING_HAND:
    case GameState.USER_SELECTING_HAND:
      gameText = "Choose you're hand!";
      break;
    default:
      gameText = "Ups!";
      break;
  }

  return (
    <main className="board">
      <h1 className="gameResult active">{gameText}</h1>
      <div className="containerSquare">
        <button
          className={classNames("simpleBtn", "tryAgain", {
            active: isDrawLoseWonState,
          })}
          onClick={handlePlayAgainClick}
        >
          Play again
        </button>
        {getHandsButtonsToChoose()}
        {
          // CPU hand
          <HandButton
            hand={cpuHand}
            isDisabled={true}
            isCpuHand={true}
            hide={gameState === GameState.USER_SELECTING_HAND}
          />
        }
      </div>
    </main>
  );
}
