import React from "react";
import GameState from "./GameState";
import HandHelper from "./Hand";
import { useStateWithLabel } from "./Helpers";

export const GameContext = React.createContext();

export const GameContextProvider = ({ children }) => {
  const [score, setScore] = useStateWithLabel(0, "score");
  const [selectedHand, setSelectedHand] = useStateWithLabel(
    null,
    "selectedHand"
  );
  const [cpuHand, setCpuHand] = useStateWithLabel(null, "cpuHand");
  const [gameState, setGameState] = useStateWithLabel(
    GameState.USER_SELECTING_HAND,
    "gameState"
  );

  const playerChooseHand = (hand) => {
    setCpuHand(null);
    setSelectedHand(hand);
    setGameState(GameState.AI_SELECTING_HAND);
    setTimeout(() => {
      const tempCpuHand = HandHelper.getRandomHand();
      setCpuHand(tempCpuHand);
      const tempGameState = HandHelper.getGameStatus(hand, tempCpuHand);
      setGameState(tempGameState);

      setScore((prev) => HandHelper.getScoreModForState(tempGameState) + prev);
    }, 500);
  };

  const handlePlayAgainClick = () => {
    
    setSelectedHand(null);
    setGameState(GameState.USER_SELECTING_HAND);
  };

  return (
    <GameContext.Provider
      value={{
        score,
        selectedHand,
        cpuHand,
        gameState,
        playerChooseHand,
        handlePlayAgainClick,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
