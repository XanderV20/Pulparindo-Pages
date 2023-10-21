import './App.css';
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gameboard from './components/Gameboard';

function App() {
  const [game, setGame] = useState("TicTacToe");

  const changeGame = (newGame) => {
    setGame(newGame)
  }

  return (
    <div className="App">
      <Header
        gameHandler={changeGame}
      />
      <div className='body'>
      <Gameboard
        game={game}
      />
      </div>
      <Footer/>
    </div>
  );
}

export default App;
