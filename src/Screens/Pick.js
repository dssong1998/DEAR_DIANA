import React, { useState } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import {
  Pick1_1Text,
  Pick1_2Text,
  Pick1_3Text,
  Pick2_1Text,
  Pick2_2Text,
  Pick2_3Text,
  Pick3_1Text,
  Pick3_2Text,
  Pick3_3Text,
  Pick4_1Text,
  Pick4_2Text,
  Pick4_3Text,
  Pick5_1Text,
  Pick5_2Text,
  Pick6_1Text,
  Pick6_2Text,
} from "../Components/Contents/PickText";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import { FullImg } from "../Components/Contents";
import { DisabledBtn, NextBtn } from "../Components/Buttons";
import useTimeChecker from "../Hooks/useTimeChecker";
import SaveStates from "../Utils/SaveStates";

const Pick = ({ pick, schedule, setDisp }) => {
  const [yet, setYet] = useState(true);
  useTimeChecker(SchedulesObjs[schedule + 1]?.time, setYet);
  const TextDatas = [
    [Pick1_1Text, Pick1_2Text, Pick1_3Text],
    [Pick2_1Text, Pick2_2Text, Pick2_3Text],
    [Pick3_1Text, Pick3_2Text, Pick3_3Text],
    [Pick4_1Text, Pick4_2Text, Pick4_3Text],
    [Pick5_1Text, Pick5_2Text],
    [Pick6_1Text, Pick6_2Text],
  ];
  return (
    <Container>
      <Title>{SchedulesObjs[schedule].title}</Title>
      <FullImg src={`/image/S${schedule}A${pick}.jpeg`} alt="pickimg" />
      <Text>{TextDatas[schedule - 1][pick - 1]}</Text>
      {yet ? (
        <DisabledBtn>
          다음 일정 {SchedulesObjs[schedule + 1]?.time || "00:00"}
        </DisabledBtn>
      ) : schedule === 6 ? (
        <NextBtn
          onClick={() => {
            SaveStates(7);
            setDisp(7);
          }}
        >
          마지막 깜짝 선물 (숙소에서 눌러 !)
        </NextBtn>
      ) : (
        <NextBtn
          onClick={() => {
            SaveStates(schedule + 1);
            setDisp(schedule + 1);
          }}
        >
          다음 일정 {SchedulesObjs[schedule + 1]?.time || "00:00"}
        </NextBtn>
      )}
    </Container>
  );
};
export default Pick;
