import { VictoryCard, Button } from "./styles";

const Victory = ({ victory, playAgain }) => {
  return (
    <VictoryCard>
      <p>{victory}</p>
      <Button onClick={playAgain}>Play Again</Button>
    </VictoryCard>
  );
};

export default Victory;
