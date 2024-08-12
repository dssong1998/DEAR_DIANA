import { useEffect } from "react";

const useTimeChecker = (targetTime, setYet) => {
  return useEffect(() => {
    const checkTime = () => {
      const cTime = new Date();
      const mm_ss = `${cTime.getHours()}:${cTime.getMinutes()}`;
      if (mm_ss >= "21:40") {
        setYet(false);
      }
    };
    const timerID = setInterval(checkTime, 1000);
    return () => clearInterval(timerID);
  }, [setYet]);
};
export default useTimeChecker;
