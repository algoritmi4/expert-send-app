import { useSelector } from 'react-redux';

function Timer({ timerError, isGameStarted }) {
  const { time } = useSelector(state => state.timer);

  return (
    <div className={ `timer ${ timerError ? "error" : "" } ${ isGameStarted ? "" : "display-none" }` }>
      <h2 className="timer__time">{ `00:${ time < 10 ? "0" : "" }${ time }` }</h2>
    </div>
  )
}

export default Timer;