import { useEffect } from "react";

const useTimeChecker = (targetTime, setYet) => {
  return useEffect(() => {
    const checkTime = () => {
      const cTime = new Date();
      const hh = cTime.getHours();
      const mm = cTime.getMinutes();
      const hh_mm = `${hh < 10 ? `0${hh}` : hh}:${mm < 10 ? `0${mm}` : mm}`;

      if (hh_mm >= targetTime) {
        setYet(false);
      }
    };
    const timerID = setInterval(checkTime, 1000);
    return () => clearInterval(timerID);
  }, [setYet, targetTime]);
};
export default useTimeChecker;
