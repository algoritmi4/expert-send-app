import { useSelector } from "react-redux";

function Counter({ isGameStarted }) {
  const { count } = useSelector(state => state.counter);

  return (
    <div className={ `counter ${ isGameStarted ? "" : "display-none" }` }>
      <h2 className="counter__count">{ `${ count >= 10 ? "" : "0" }${ count }/10` }</h2>
    </div>
  )
}

export default Counter;