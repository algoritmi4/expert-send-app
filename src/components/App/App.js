import { useState } from "react";
import ContentsPopup from "../ContentsPopup/ContentsPopup";
import InstructionPopup from "../InstructionPopup/InstructionPopup";
import Main from "../Main/Main";
import StartGamePopup from "../StartGamePopup/StartGamePopup";
import EndGameScreen from "../EndGameScreen/EndGameScreen";
import { useActions } from "../../store/Hooks/useActions";

function App() {
  const [contentsPopup, setContentsPopup] = useState({ isOpen: true });
  const [instructionPopup, setInstructionPopup] = useState({ isOpen: false });
  const [startGamePopup, setStartGamePopup] = useState({ isOpen: false });
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const { initialCountSetted, initialTimeSetted } = useActions();

  function handleEndGame() {
    setIsGameStarted(false);
    setIsGameEnded(true);
  }

  function handleInstructionPopupOpen() {
    setContentsPopup({ isOpen: false });
    setInstructionPopup({ isOpen: true });
  }

  function handleStartGamePopupOpen() {
    setInstructionPopup({ isOpen: false });
    setStartGamePopup({ isOpen: true });
  }

  function handleStartGame() {
    setStartGamePopup({ isOpen: false });
    setIsGameStarted(true);
  }

  function handleRestartGame() {
    setIsGameStarted(true);
    setIsGameEnded(false);
    initialCountSetted();
    initialTimeSetted();
  }

  return (
    <div className="page">
      <div className="page__content">
        {
          isGameEnded ? (
            <EndGameScreen handleRestartGame={ handleRestartGame } />
          ) : (
            <>
              <ContentsPopup contentsPopup={ contentsPopup } handleInstructionPopupOpen={ handleInstructionPopupOpen } />
              <InstructionPopup instructionPopup={ instructionPopup } handleStartGamePopupOpen={ handleStartGamePopupOpen } />
              <StartGamePopup startGamePopup={ startGamePopup } handleStartGame={ handleStartGame } />
              <Main isGameStarted={ isGameStarted } isGameEnded={ isGameEnded } handleEndGame={ handleEndGame } />
            </>
          )
        }
      </div>
    </div>
  );
}

export default App;
