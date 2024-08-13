import { useEffect, useState } from "react";
import Birthday from "./Screens/Birthday";
import Greeting from "./Screens/Greeting";
import Pick from "./Screens/Pick";
import Schedule1 from "./Screens/Schedule1";
import Schedule2 from "./Screens/Schedule2";
import Schedule3 from "./Screens/Schedule3";
import Schedule4 from "./Screens/Schedule4";
import Schedule5 from "./Screens/Schedule5";
import Schedule6 from "./Screens/Schedule6";
import useSavedStates from "./Hooks/useSavedStates";
import useTimeChecker from "./Hooks/useTimeChecker";
import Snack from "./Screens/Snack";

function Home() {
  const [dispState, setDispState] = useState(0);
  const [schedule, setSchedule] = useState(0);
  const [pickedOpt, setPickedOpt] = useState(0);
  const [before330, setBefore330] = useState(true);
  const [done, setDone] = useState(false);
  useSavedStates(setDispState, setSchedule, setPickedOpt, setDone);
  useTimeChecker("15:30", setBefore330);
  useEffect(() => {
    if (!done && !before330 && dispState === 9 && schedule < 5) {
      if (
        window.confirm(
          "15시 30분이 지났어!\n\n마지막 일정으로 건너뛰어도 될까 ?"
        )
      ) {
        setDispState(5);
      }
    }
  }, [before330, dispState, schedule, done]);

  switch (dispState) {
    case 0:
      return <Greeting setDisp={setDispState()} />;
    case 1:
      return (
        <Schedule1
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 2:
      return (
        <Schedule2
          pick={pickedOpt}
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 3:
      return (
        <Schedule3
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 4:
      return (
        <Schedule4
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 5:
      return (
        <Schedule5
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 6:
      return (
        <Schedule6
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 7:
      return (
        <Birthday
          setDisp={setDispState}
          pick={pickedOpt}
          setSchedule={setSchedule}
        />
      );
    case 8:
      return (
        <Snack
          setPick={setPickedOpt}
          setSchedule={setSchedule}
          setDisp={setDispState}
        />
      );
    case 9:
      return (
        <Pick
          pick={pickedOpt}
          schedule={schedule}
          setDisp={setDispState}
          setSchedule={setSchedule}
          setDone={setDone}
        />
      );

    default:
      return <Greeting setDisp={setDispState} />;
  }
}

export default Home;
