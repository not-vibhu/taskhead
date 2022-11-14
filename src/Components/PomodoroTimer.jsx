import { useState, useRef, useEffect } from "react";

export default function PomodoroTimer() {

  let focusDuration = 1;

  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(seconds);
  const intervalRef = useRef(null);


  let minutesLeft = Math.floor(seconds / 60);
  let secondsLeft = seconds % 60;
  if (minutesLeft < 10) minutesLeft = `0${minutesLeft}`;
  if (secondsLeft < 10) secondsLeft = `0${secondsLeft}`;

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
      if (secondsRef.current === 0) console.log("Time OVer");
      handleSecondsUpdate();
    }, 1000);
  };

  useEffect(() => {
    setSeconds(focusDuration * 60);
    secondsRef.current = focusDuration * 60;
  }, []);

  return (
    <div>PomodoroTimer
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
