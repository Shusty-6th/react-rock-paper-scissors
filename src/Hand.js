import GameState from "./GameState";
import {
  faHandRock,
  faHandPaper,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";

export const Hands = {
  ROCK: { id: 0, name: "rock", ico: faHandRock, value: 0 },
  PAPER: { id: 1, name: "paper", ico: faHandPaper, value: 1 },
  SCISSORS: { id: 2, name: "scissors", ico: faHandScissors, value: 2 },
};

export default class HandHelper {
  static getRandomHand() {
    const randomVal = Math.floor(Math.random() * 3);
    for (const key in Hands) {
      if (Hands[key].value === randomVal) {
        return Hands[key];
      }
    }

    throw new Error("Cant return hand.");
  }

  static getGameStatus(playerHand, cpuHand) {
    debugger;
    if ((playerHand.value + 1) % 3  === cpuHand.value) {
      return GameState.LOSE;
    } else if ((cpuHand.value + 1) % 3 === playerHand.value) {
      return GameState.WON;
    } else return GameState.DRAW;
  }

  static getScoreModForState(gameState) {
    switch (gameState) {
      case GameState.WON:
        return 1;
      case GameState.LOSE:
        return -1;
      default:
        return 0;
    }
  }
}
