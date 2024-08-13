import React, { useState } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { GreetingText } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { DisabledBtn, NextBtn } from "../Components/Buttons";
import useTimeChecker from "../Hooks/useTimeChecker";
import SaveStates from "../Utils/SaveStates";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";

const Greeting = ({ setDisp }) => {
  const [yet, setYet] = useState(true);
  useTimeChecker(SchedulesObjs[1].time, setYet);

  return (
    <Container>
      <Title>{SchedulesObjs[0]?.title}</Title>
      <Text>{GreetingText}</Text>
      <FullImg src="/image/Greeting.jpeg" alt="Greeting" />
      {yet ? (
        <DisabledBtn>08시 30분에 오픈</DisabledBtn>
      ) : (
        <NextBtn
          onClick={() => {
            SaveStates(1);
            setDisp(1);
          }}
        >
          {SchedulesObjs[1]?.title}
        </NextBtn>
      )}
    </Container>
  );
};
export default Greeting;
