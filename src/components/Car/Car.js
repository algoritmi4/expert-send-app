function Car({ isGameStarted }) {
  return <div className={ `car ${ isGameStarted ? "" : "display-none"}` }></div>
}

export default Car;