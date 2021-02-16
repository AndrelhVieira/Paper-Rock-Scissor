import { ScoreBoard, ScoreBoardTitle, ScoreBoardDiv } from "./styles";

const Scoreboard = ({ playerCount, machineCount }) => {
  return (
    <ScoreBoard>
      <ScoreBoardTitle>Scoreboard</ScoreBoardTitle>
      <ScoreBoardDiv>
        <p>Player</p>
        <p>vs</p>
        <p>Machine</p>
      </ScoreBoardDiv>
      <ScoreBoardDiv>
        <h1>{playerCount}</h1>
        <h1>{machineCount}</h1>
      </ScoreBoardDiv>
    </ScoreBoard>
  );
};

export default Scoreboard;
