import { useState } from "react";
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

function Home() {
  const [dispState, setDispState] = useState(0);
  const [schedule, setSchedule] = useState(0);
  const [pickedOpt, setPickedOpt] = useState(0);
  useSavedStates(setDispState, setSchedule, setPickedOpt);

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
      return <Birthday setDisp={setDispState} />;
    case 9:
      return (
        <Pick pick={pickedOpt} schedule={schedule} setDisp={setDispState} />
      );

    default:
      return <Greeting setDisp={setDispState} />;
  }
}

export default Home;
