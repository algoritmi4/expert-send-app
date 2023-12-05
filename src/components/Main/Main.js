import Person from "../Person/Person";
import { useState } from "react";
import useDidMountEffect from "../../customHooks/useDidMountEffect";
import Car from "../Car/Car";
import Timer from "../Timer/Timer";
import Counter from "../Counter/Counter";
import { useActions } from "../../store/Hooks/useActions";
import { useSelector } from "react-redux";
import { rightPeople, leftPeople } from "../../utils/constants";

function MainPage({ isGameStarted, isGameEnded, handleEndGame }) {
  const [people, setPeople] = useState([]);
  const [timerError, setTimerError] = useState(false);
  const [timeInterval, setTimeInterval] = useState(null);
  const { timeSetted } = useActions();
  const { isZero } = useSelector(state => state.timer);
  const { isTen } = useSelector(state => state.counter);

  useDidMountEffect(() => {
    if (isTen || isZero) {
      handleEndGame();
      clearInterval(timeInterval);
      setPeople([]);
    }
  }, [isTen, isZero]);

  useDidMountEffect(() => {
    if (isGameStarted) {
      setTimeInterval(setInterval(() => {
        console.log('Привет')
        timeSetted(1);
      }, 1000));

      handleAddPerson({ right: false, upper: false, timeOut: 200 });

      handleAddPerson({ right: true, upper: true, timeOut: 2000 });

      handleAddPerson({ right: true, upper: false, timeOut: 4000 });
  
      handleAddPerson({ right: false, upper: true, timeOut: 6000 });
    }
  }, [isGameStarted])

  function handleAddPerson({ right, upper, timeOut }) {
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * (right ? rightPeople.length : leftPeople.length));
      const personToAdd = right ? { ...rightPeople[randomNumber] } : { ...leftPeople[randomNumber] };
      personToAdd.upper = upper;
      setPeople((state) => [...state, personToAdd]);
    }, timeOut);
  }

  return (
    <section className="game-board">
      <Counter isGameStarted={ isGameStarted } />
      <Timer timerError={ timerError } isGameStarted={ isGameStarted } />
      {
        people.map((person, index) => <Person info={ person } key={ index } handleAddPerson={ handleAddPerson } setTimerError={ setTimerError } />)
      }
      <Car isGameStarted={ isGameStarted } />
    </section>
  )
}

export default MainPage;