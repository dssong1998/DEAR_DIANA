import React, { useState } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import {
  LastText,
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
  Pick8_1Text,
  Pick8_2Text,
  Pick8_3Text,
} from "../Components/Contents/PickText";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import { FullImg } from "../Components/Contents";
import { DisabledBtn, NextBtn } from "../Components/Buttons";
import useTimeChecker from "../Hooks/useTimeChecker";
import SaveStates from "../Utils/SaveStates";

const Pick = ({ pick, schedule, setDisp, setSchedule, setDone }) => {
  const [yet, setYet] = useState(true);
  useTimeChecker(SchedulesObjs[schedule + 1]?.time, setYet);
  const TextDatas = [
    [Pick1_1Text, Pick1_2Text, Pick1_3Text],
    [Pick2_1Text, Pick2_2Text, Pick2_3Text],
    [Pick3_1Text, Pick3_2Text, Pick3_3Text],
    [Pick4_1Text, Pick4_2Text, Pick4_3Text],
    [Pick5_1Text, Pick5_2Text],
    [Pick6_1Text, Pick6_2Text],
    [],
    [Pick8_1Text, Pick8_2Text, Pick8_3Text],
    [LastText, LastText, LastText],
  ];
  if (schedule === 9) {
    localStorage.clear();
    setDone(true);
    localStorage.setItem("done", true);
  }

  return (
    <Container>
      <Title>{SchedulesObjs[schedule].title}</Title>
      {schedule === 9 ? (
        <FullImg src={`/image/birthday.jpeg`} alt="pickimg" />
      ) : (
        <FullImg src={`/image/S${schedule}A${pick}.jpeg`} alt="pickimg" />
      )}
      <Text>{TextDatas[schedule - 1][pick - 1]}</Text>
      {schedule <= 8 ? (
        yet ? (
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
              if (schedule === 8) {
                setSchedule(9);
              }
            }}
          >
            {`${schedule === 8 ? "여행 종료" : "다음 일정"} ${
              SchedulesObjs[schedule + 1]?.time || "00:00"
            }`}
          </NextBtn>
        )
      ) : null}
    </Container>
  );
};
export default Pick;
