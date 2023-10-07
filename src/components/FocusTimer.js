import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function FocusTimer() {
  const [remainingTime, setRemainingTime] = useState(0);
  const [timerStatus, setTimerStatus] = useState('stopped');
  const { taskId } = useParams(); 

  useEffect(() => {
    let interval;

    if (timerStatus === 'running' && remainingTime > 0) {
      interval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timerStatus === 'completed') {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerStatus, remainingTime, taskId]);

  useEffect(() => {
   
    const fetchTaskAndSetupTimer = async () => {
      try {
        const response = await fetch(`API_URL_HERE/${taskId}`); 
        if (!response.ok) {
          throw new Error('Failed to fetch task data.');
        }
        const taskData = await response.json();
        setRemainingTime(taskData.durationInSeconds); 
        setTimerStatus('stopped');
      } catch (error) {
        console.error('Error fetching task data:', error);
      }
    };

    fetchTaskAndSetupTimer();
  }, [taskId]);

  const startTimer = () => {
    setTimerStatus('running');
  };

  const pauseTimer = () => {
    setTimerStatus('paused');
  };

  const resetTimer = () => {
    setRemainingTime(25 * 60);
    setTimerStatus('stopped');
  };

  return (
    <div className="focus-timer">
      <h2>ONE Thing Focus Timer</h2>
      <p>Remaining Time: {Math.floor(remainingTime / 60)}:{remainingTime % 60}</p>
      {timerStatus === 'running' ? (
        <button onClick={pauseTimer}>Pause</button>
      ) : (
        <>
          <button onClick={startTimer}>Start</button>
          <button onClick={resetTimer}>Reset</button>
        </>
      )}
    </div>
  );
}

export default FocusTimer;
