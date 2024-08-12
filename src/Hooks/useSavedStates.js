import { useEffect } from "react";

const useSavedStates = (setDispState, setSchedule, setPickedOpt) => {
  return useEffect(() => {
    setDispState(parseInt(localStorage.getItem("display")));
    setSchedule(parseInt(localStorage.getItem("schedule")));
    setPickedOpt(parseInt(localStorage.getItem("pick")));
  }, [setDispState, setSchedule, setPickedOpt]);
};
export default useSavedStates;
