import React, { useState } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { GreetingText } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { DisabledBtn, NextBtn } from "../Components/Buttons";
import useTimeChecker from "../Hooks/useTimeChecker";
import SaveStates from "../Utils/SaveStates";

const Greeting = ({ setDisp }) => {
  const [yet, setYet] = useState(true);
  useTimeChecker("07:00", setYet);

  return (
    <Container>
      <Title>여행의 시작 | 07:00</Title>
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
          첫번째 일정 | 08:30
        </NextBtn>
      )}
    </Container>
  );
};
export default Greeting;
