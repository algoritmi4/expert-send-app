function InstructionPopup({ instructionPopup, handleStartGamePopupOpen }) {
  function onClick() {
    handleStartGamePopupOpen();
  }

  return (
    <div className={ `instr-popup ${ instructionPopup.isOpen ? "" : "display-none" }` }>
      <div className="instr-popup__animation-box">
        <div className="instr-popup__bubble"></div>
        <div className="instr-popup__person"></div>
        <div className="instr-popup__hand"></div>
      </div>
      <h2 className="instr-popup__subtitle">Нажимай на «экспертов» и отравляй их к далеким далям в мыльных пузырях!</h2>
      <button type="button" onClick={ onClick } className="instr-popup_button"></button>
    </div>
  )
}

export default InstructionPopup;