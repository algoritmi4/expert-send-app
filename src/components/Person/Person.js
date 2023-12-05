import { useEffect, useState } from "react";
import { useActions } from "../../store/Hooks/useActions";

function Person({ info, handleAddPerson, setTimerError }) {
  const [sended, setSended] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [error, setError] = useState(false);
  const [exit, setExit] = useState(false);
  const [personExitTimeOut, setPersonExitTimeOut] = useState(null);
  const { countIncreased, timeSetted } = useActions();

  useEffect(() => {
    if (!info.expert) {
      setPersonExitTimeOut(setTimeout(() => {
        setExit(true);
        setTimeout(() => {
          setDeleted(true);
        }, 1000);
        handleAddPerson({ right: info.right, upper: info.upper, timeOut: 3000 });
      }, 5000));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClick() {
    if (info.expert) {
      handleAddPerson({ right: info.right, upper: info.upper, timeOut: 3000 });
      countIncreased();
      setSended(true);
      setTimeout(() => {
        setDeleted(true);
      }, 2000);
    } else {
      clearTimeout(personExitTimeOut);
      timeSetted(3);
      setTimerRed();
      handleAddPerson({ right: info.right, upper: info.upper, timeOut: 3000 });
      setError(true);
      setTimeout(() => {
        setDeleted(true);
      }, 1000);
    }
  }

  function setTimerRed() {
    setTimerError(true);

    setTimeout(() => {
      setTimerError(false);
    }, 500);
  }

  return (
    <div className={
      `person
      ${ info.upper ? (info.right ? "upper-right": "upper-left") : (info.right ? "right" : "") }
      ${ sended ? "send-animation" : "" }
      ${ deleted ? "display-none" : "" }
      ${ exit ? (info.right ? "right-exit-animation": "left-exit-animation") : "" }`
    }>
      <div
        className={
          `person__speech-bubble
          ${ info.text.length >= 30 ? (info.right ? "big-right-bubble" : "big-left-bubble") : (info.right ? "right-bubble" : "") }
          ${ sended || error || exit ? "display-none" : "" }`
        }>{ info.text }</div>
      <img onClick={ onClick } src={ info.person } className={ `person__image ${ sended ? "rotate-animation" : "" }` } alt={`Человек`} />
      <div className={
        `person__send-bubble
        ${ info.expert ? "" : "err-bubble" }
        ${ sended || error ? "" : "display-none" }
        ${ info.right ? "person__send-bubble_right" : "" }`
      }></div>
    </div>
  );
}

export default Person;