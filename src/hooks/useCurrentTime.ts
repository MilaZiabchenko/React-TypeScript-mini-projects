import { useState, useEffect } from 'react';

const useCurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const tick = () => setTime(new Date());

    const timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, [time]);

  return time;
};

export default useCurrentTime;
