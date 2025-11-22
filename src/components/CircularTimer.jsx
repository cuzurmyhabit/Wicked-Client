import React, { useState, useEffect, useRef } from 'react';

const CircularTimer = ({ onComplete, duration = 5 }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const hasCompletedRef = useRef(false); // 중복 실행 방지

  useEffect(() => {
    hasCompletedRef.current = false; // 타이머 시작 시 리셋
    setTimeLeft(duration);
  }, [duration]);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (!hasCompletedRef.current) {
        hasCompletedRef.current = true;
        onComplete?.();
      }
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const newTime = prev - 0.1;
        return newTime < 0 ? 0 : newTime;
      });
    }, 100);

    return () => clearInterval(timer);
  }, [timeLeft, onComplete]);

  const percentage = (timeLeft / duration) * 100;
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div style={{ position: 'relative', width: '100px', height: '100px' }}>
      <svg width="100" height="100" style={{ transform: 'rotate(-90deg)' }}>
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#e0e0e0"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          fill="none"
          stroke="#4A90E2"
          strokeWidth="8"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '32px',
          fontWeight: 'bold',
          color: '#4A90E2'
        }}
      >
        {Math.ceil(timeLeft)}
      </div>
    </div>
  );
};

export default CircularTimer;