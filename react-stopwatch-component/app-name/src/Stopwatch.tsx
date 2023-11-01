import { useState } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa';
import './App.css';

export function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timer>();
  function handlePlayClick() {
    if (intervalId === undefined) {
      const id = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }
  const cursor = intervalId === undefined ? 'pointer' : 'default';
  return (
    <div className="wrapper">
      <div className="stopwatch">
        <div
          className="watch-face"
          style={{ cursor }}
          onClick={() => intervalId === undefined && setElapsedTime(0)}>
          <ElapsedTime time={elapsedTime} />
        </div>
      </div>
      <PlayButton
        isRunning={intervalId !== undefined}
        onClick={handlePlayClick}
      />
    </div>
  );
}
type TimeProps = {
  time: number;
};
function ElapsedTime({ time }: TimeProps) {
  return <div>{time}</div>;
}
type ButtonProps = {
  isRunning: boolean;
  onClick: () => void;
};
function PlayButton({ isRunning, onClick }: ButtonProps) {
  return (
    <div onClick={onClick} className="start-stop">
      {isRunning ? <FaPause /> : <FaPlay />}
    </div>
  );
}
