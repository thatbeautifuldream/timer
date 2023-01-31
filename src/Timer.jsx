import React, { useState } from "react";
import "./Timer.css";
import { toast } from "react-hot-toast";

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const startTimer = (duration) => {
    if (isActive) {
      return;
    }
    setIsActive(true);
    setTimeLeft(duration);
    let intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === 0) {
          clearInterval(intervalId);
          setIsActive(false);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const handleReset = () => {
    setTimeLeft(0);
    toast("She's not comming back!", {
      icon: "💔",
    });
    setIsActive(false);
  };

  function convertSeconds(seconds) {
    var convert = function (x) {
      return x < 10 ? "0" + x : x;
    };
    return (
      convert(parseInt(seconds / (60 * 60))) +
      ":" +
      convert(parseInt((seconds / 60) % 60)) +
      ":" +
      convert(seconds % 60)
    );
  }

  return (
    <div>
      <h1 className="timer">{convertSeconds(timeLeft)}</h1>
      <code>
        {isActive ? "Tick tock, timer's running!" : "Set a timer for :"}
      </code>
      <div>
        <button
          className="timer-btn"
          onClick={() => startTimer(300)}
          disabled={isActive}
        >
          5 min
        </button>
        <button
          className="timer-btn"
          onClick={() => startTimer(600)}
          disabled={isActive}
        >
          10 min
        </button>
        <button className="timer-btn" onClick={handleReset}>
          until she comes back
        </button>
      </div>
    </div>
  );
};

export default Timer;
