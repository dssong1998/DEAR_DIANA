import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import {
  Schedule2_1Text,
  Schedule2_2Text,
} from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import SaveStates from "../Utils/SaveStates";

const Schedule2 = ({ pick, setPick, setSchedule, setDisp }) => {
  let hasEat;
  if (pick === 2) {
    hasEat = true;
  } else {
    hasEat = false;
  }
  return (
    <Container>
      <Title>{SchedulesObjs[1].title}</Title>
      <Text>{hasEat ? Schedule2_1Text : Schedule2_2Text}</Text>
      <Options>
        {hasEat ? (
          <Answer
            onClick={() => {
              SaveStates(9, 2, 3);
              setPick(3);
              setSchedule(2);
              setDisp(9);
            }}
          >
            <FullImg src="/image/S2A3.jpeg" alt="walk" />
            <SelectBtn>
              <AnsText>{"산책 하자 !"}</AnsText>
            </SelectBtn>
          </Answer>
        ) : (
          <Answer
            onClick={() => {
              SaveStates(9, 2, 1);
              setPick(1);
              setSchedule(2);
              setDisp(9);
            }}
          >
            <FullImg src="/image/S2A1.jpeg" alt="eat" />
            <SelectBtn>
              <AnsText>{"밥 먹자 !"}</AnsText>
            </SelectBtn>
          </Answer>
        )}
        <Answer
          onClick={() => {
            SaveStates(9, 2, 2);
            setPick(2);
            setSchedule(2);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S2A2.jpeg" alt="cafe" />
          <SelectBtn>
            <AnsText>{"카페 가자 !"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule2;
