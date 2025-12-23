// Time.jsx
import React, { useState, useEffect } from 'react';

function TheTime() {
  const [now, setNow] = useState(new Date()); // state for current time

  useEffect(() => {
    // update time every second
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    
    return () => clearInterval(timer); // cleanup interval on unmount
  }, []);

  return (
    <div className="time-display">
      <p>The time and date is {now.toLocaleTimeString()} {now.toLocaleDateString()}</p>
    </div>
  );
}

export default TheTime;
