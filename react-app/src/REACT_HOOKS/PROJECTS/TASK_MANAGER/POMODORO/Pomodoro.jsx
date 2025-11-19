import React, { useEffect, useState } from "react";
import "./Pomodoro.css";

export default function Pomodoro() {
  const [focusTime, setFocusTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const [minutes, setMinutes] = useState(focusTime);
  const [seconds, setSeconds] = useState(0);

  const [showMssg, setShowMssg] = useState(false); // false = focus, true = break
  const [isRunning, setIsRunning] = useState(false);

  // Timer logic
  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes((m) => m - 1);
        } else {
          // SWITCH MODES (FOCUS <-> BREAK)
          if (showMssg) {
            setMinutes(focusTime);
          } else {
            setMinutes(breakTime);
          }
          setSeconds(0);
          setShowMssg((v) => !v);
        }
      } else {
        setSeconds((s) => s - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, minutes, isRunning, showMssg, focusTime, breakTime]);

  // Reset
  function reset() {
    setIsRunning(false);
    setShowMssg(false);
    setMinutes(focusTime);
    setSeconds(0);
  }

  const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div className="Pomodoro">
      {!showMssg && <h1 className="Pomodoroheading">Pomodoro Timer</h1> }
      {showMssg && <div className="mssg">Break time! Session starts in</div>}

      <div className="time">
        <div className="timerCount">
          {timerMinutes} : {timerSeconds}
        </div>

        <div className="pomodoro-controls">
          <button className="start" onClick={() => setIsRunning(true)} title="Click to start timer">
            Start
          </button>

          <button className="stop" onClick={() => setIsRunning(false)} title="Click to stop timer">
            Stop
          </button>

          <button className="reset" onClick={reset} title="Click to reset timer">
            Reset
          </button>
        </div>

        <p className="status">{isRunning ? "Running" : "Stopped"}</p>
      </div>

      <div className="sliders">
        <label>Focus Time: {focusTime} min</label>
        <input type="range" min={1} max={60} value={focusTime} onChange={(e) => {
                                                                                  const value = Number(e.target.value);
                                                                                  setFocusTime(value);
                                                                                  if (!isRunning && !showMssg) {
                                                                                    setMinutes(value);
                                                                                    setSeconds(0);
                                                                                  }
                                                                                }}/>

        <label>Break Time: {breakTime} min</label>
        <input type="range" min={1} max={30} value={breakTime} onChange={(e) => {
                                                                                  const value = Number(e.target.value); 
                                                                                  setBreakTime(value);
                                                                                  if (!isRunning && showMssg) {
                                                                                    setMinutes(value);
                                                                                    setSeconds(0);
                                                                                  }
                                                                                  }}/>
      </div>
    </div>
  );
}
