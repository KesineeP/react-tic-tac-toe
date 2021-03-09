import React, { useState } from 'react';
import './App.css';
import Box from './components/Box'

function App() {
  const [currentPlayer, setCurrenPlayer] = useState('X')

  //when user click
  // currentPlayer = "X";

  return (

    <div className="App">
      <h1>Tic Tac Toe</h1>
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
      <Box player={currentPlayer} />
    </div>
  );
}

export default App;
