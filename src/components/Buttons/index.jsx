import { ButtonsOptions, ButtonsSection } from "./styles";

const Buttons = ({ newPlayerMove }) => {
  return (
    <ButtonsSection>
      <h1 style={{ textAlign: "center", margin: "15px" }}>Make your choice</h1>
      <ButtonsOptions onClick={() => newPlayerMove("Rock")}>
        <i style={{ fontSize: "45px" }} class="fas fa-hand-rock"></i>
      </ButtonsOptions>
      <ButtonsOptions onClick={() => newPlayerMove("Paper")}>
        <i style={{ fontSize: "45px" }} class="fas fa-hand-paper"></i>
      </ButtonsOptions>
      <ButtonsOptions onClick={() => newPlayerMove("Scissors")}>
        <i style={{ fontSize: "45px" }} class="fas fa-hand-scissors"></i>
      </ButtonsOptions>
    </ButtonsSection>
  );
};

export default Buttons;
