import "./App.css";
import Scoreboard from "./components/Scoreboard";
import Results from "./components/Results";
import { useState, useEffect } from "react";

import Victory from "./components/Victory";
import Buttons from "./components/Buttons";

function App() {
  const [playerMove, setPlayerMove] = useState("");
  const [machineMove, setMachineMove] = useState("");
  const [victory, setVictory] = useState("");
  const [playerCount, setPlayerCount] = useState(0);
  const [machineCount, setMachineCount] = useState(0);

  const newMachineMove = () => {
    let random = Math.floor(Math.random() * 3);
    random === 0
      ? setMachineMove("Rock")
      : random === 1
      ? setMachineMove("Paper")
      : setMachineMove("Scissors");
  };

  const playAgain = () => {
    setPlayerMove("");
    setMachineMove("");
    setVictory("");
  };

  const newPlayerMove = (choose) => {
    setPlayerMove(choose);
    newMachineMove();
  };

  const verification = () => {
    let output = "";
    if (
      (playerMove === "Rock" && machineMove === "Scissors") ||
      (playerMove === "Paper" && machineMove === "Rock") ||
      (playerMove === "Scissors" && machineMove === "Paper")
    ) {
      setPlayerCount(playerCount + 1);
      output = "Congrats!! You won the CPU, congratulations at least!!";
    } else if (
      (machineMove === "Rock" && playerMove === "Scissors") ||
      (machineMove === "Paper" && playerMove === "Rock") ||
      (machineMove === "Scissors" && playerMove === "Paper")
    ) {
      setMachineCount(machineCount + 1);
      output = "The Machine won and the Matrix is real!!";
    } else if (
      (machineMove === "Rock" && playerMove === "Rock") ||
      (machineMove === "Paper" && playerMove === "Paper") ||
      (machineMove === "Scissors" && playerMove === "Scissors")
    ) {
      output = "Nobody won!! How did you achieve this feat?";
    }
    return output;
  };

  useEffect(() => {
    if (playerMove) {
      let v = verification();
      setVictory(v);
    }
  }, [playerMove]);

  return (
    <header className="App-header">
      <Scoreboard playerCount={playerCount} machineCount={machineCount} />
      {victory !== "" ? (
        <>
          <Results moveMachine={machineMove} movePlayer={playerMove} />
          <Victory victory={victory} playAgain={playAgain} />
        </>
      ) : null}
      {!victory && <Buttons newPlayerMove={newPlayerMove} />}
    </header>
  );
}

export default App;
