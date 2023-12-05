function ContentsPopup({ contentsPopup, handleInstructionPopupOpen }) {
  function onClick() {
    handleInstructionPopupOpen();
  }

  return (
    <div className={ `cont-popup ${ contentsPopup.isOpen ? "" : "display-none" }` }>
      <div className="cont-popup__bubble">
        <div className="cont-popup__person"></div>
      </div>
      <h1 className="cont-popup__title">Отправь «Экспертов» в космос!</h1>
      <h2 className="cont-popup__subtitle">Душные кликуши появляются и тут и там. Защитись от их «экспертных» оценок — прицелься и отправляй их в космос!</h2>
      <button type="button" onClick={ onClick } className="cont-popup__button"></button>
    </div>
  )
}

export default ContentsPopup;