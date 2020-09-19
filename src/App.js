import React from "react";
import "./App.scss";
import { GameContextProvider } from "./GameContext";
import Header from "./containers/Header";
import Board from "./containers/Board";

function App() {
  return (
    <div className="app">
      <GameContextProvider>
        <Header></Header>
        <Board></Board>
      </GameContextProvider>
    </div>
  );
}

export default App;
