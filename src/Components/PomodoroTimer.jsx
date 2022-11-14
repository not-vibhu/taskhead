import "./Styles/PomodoroTimer.css";
import { useState, useRef, useEffect } from "react";

export default function PomodoroTimer() {

  let focusDuration = "1";
  let breakDuration = "0.5";

  const focusMinutes = Number(focusDuration);
  const breakMinutes = Number(breakDuration);

  const [seconds, setSeconds] = useState(0);
  const [pomodoroMode, setPomodoroMode] = useState("focus");
  const secondsRef = useRef(seconds);
  const intervalRef = useRef(null);


  let minutesLeft = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;

  if (minutesLeft < 10) minutesLeft = `0${minutesLeft}`;
  if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;

  const switchPomodoroSession = (sessionName) => {

    setPomodoroMode(sessionName);

    let newTimeInSeconds = sessionName === "focus" ? focusMinutes * 60 : breakMinutes * 60;

    setSeconds(newTimeInSeconds);
    secondsRef.current = newTimeInSeconds;

  }

  const handleSecondsUpdate = () => {
    secondsRef.current--;
    setSeconds(secondsRef.current);
  };

  const handleStopInterval = () => {
    clearInterval(intervalRef.current);
  };

  const handleStartInterval = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (secondsRef.current === 0) return clearInterval(intervalRef.current);
      handleSecondsUpdate();
    }, 1000);
  };

  useEffect(() => {
    setSeconds(focusDuration * 60);
    secondsRef.current = focusDuration * 60;
  }, []);

  return (
    <div className="pomodoro-timer-div">
      <h2>PomodoroTimer</h2>
      <h3>{pomodoroMode}</h3>
      <button onClick={() => switchPomodoroSession("focus")}>Focus Mode</button>

      <button onClick={() => switchPomodoroSession("break")}>Break Mode</button>
      <h2>{minutesLeft} : {secondsLeft}</h2>

      <button onClick={handleStartInterval}>Start</button>

      <button onClick={handleStopInterval}>Stop</button>

      <button onClick={() => {
        handleStopInterval();
        secondsRef.current = focusDuration * 60;
        setSeconds(focusDuration * 60);
      }}>Restart</button>
    </div>
  )
}
