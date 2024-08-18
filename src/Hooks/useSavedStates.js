import { useEffect } from "react";

const useSavedStates = (setDispState, setSchedule, setPickedOpt, setDone) => {
  return useEffect(() => {
    setDispState(99);
    setSchedule(parseInt(localStorage.getItem("schedule")));
    setPickedOpt(parseInt(localStorage.getItem("pick")));
    setDone(JSON.parse(localStorage.getItem("done")));
  }, [setDispState, setSchedule, setPickedOpt, setDone]);
};
export default useSavedStates;
