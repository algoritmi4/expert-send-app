import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function EndGameScreen({ handleRestartGame }) {
  const [subtitleText, setSubtitleText] = useState(
    'Кажется, кое-кто поймал паническую белку или пересмотрел слишком много «экспертных» стримов. На улицу выйди, прогуляйся!'
  );
  const { count } = useSelector(state => state.counter);

  useEffect(() => {
    if (count > 7) {
      return setSubtitleText(
        'Один из последних из нас, кто четко знает где живет своя кукуха. Настоящий ловец «экспертов»!'
      );
    }

    if (count > 3) {
      return setSubtitleText(
        'Последние нервные клетки держатся в твоей голове, но уже едва-едва. Попей чайку и подумай еще раз, прежде чем соглашаться со всем в интернете'
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="end-game">
      <div className="end-game__panel">
        <div className={ `end-game__hand-grade ${ count < 8 ? (count < 4 ? "loser" : "secondary" ) : "" }` }></div>
        <h1 className="end-game__title">{ `Запущено ${ count }/10 «экспертов»!` }</h1>
        <h2 className="end-game__subtitle">{ subtitleText }</h2>
        <button type="button" onClick={ handleRestartGame } className="end-game__restart-button"></button>
        <p className="end-game__share">Поделиться</p>
        <nav className="end-game__nav-buttons">
          <li className="end-game__nav-button">
            <div className="end-game__nav-tg-image" />
          </li>
          <li className="end-game__nav-button">
            <div className="end-game__nav-vk-image" />
          </li>
          <li className="end-game__nav-button">
            <div className="end-game__nav-ok-image" />
          </li>
        </nav>
      </div>
    </div>
  )
}

export default EndGameScreen;