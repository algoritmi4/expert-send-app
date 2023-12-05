function StartGamePopup({ startGamePopup, handleStartGame }) {
  return (
    <div className={ `start-popup ${ startGamePopup.isOpen ? "" : "display-none" }` }>
      <div className="start-popup__animation-box">
        <div className="start-popup__err-bubble"></div>
        <div className="start-popup__person"></div>
        <div className="start-popup__hand"></div>
      </div>
      <div className="start-popup__subtitle">но иногда появятся люди, чьи выводы вполне нормальны. Если в пузырь попадут они — с тебя штраф по времени!</div>
      <button type="button" onClick={ handleStartGame } className="start-popup__button"></button>
    </div>
  )
}

export default StartGamePopup;