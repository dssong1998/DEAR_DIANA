import { useEffect } from "react";

const useTimeChecker = (targetTime, setYet) => {
  return useEffect(() => {
    const checkTime = () => {
      const cTime = new Date();
      const mm_ss = `${cTime.getHours()}:${cTime.getMinutes()}`;
      if (mm_ss >= targetTime) {
        setYet(false);
      }
    };
    const timerID = setInterval(checkTime, 1000);
    return () => clearInterval(timerID);
  }, [setYet, targetTime]);
};
export default useTimeChecker;
