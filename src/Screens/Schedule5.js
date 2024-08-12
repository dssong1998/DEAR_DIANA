import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { Schedule5Text } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import SaveStates from "../Utils/SaveStates";

const Schedule5 = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>{SchedulesObjs[5].title}</Title>
      <Text>{Schedule5Text}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 5, 1);
            setPick(1);
            setSchedule(5);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S5A1.jpeg" alt="stay" />
          <SelectBtn>
            <AnsText>{"숙소로 가자 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 5, 2);
            setPick(2);
            setSchedule(5);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S5A2.jpeg" alt="more" />
          <SelectBtn>
            <AnsText>{"한군데만 더..!"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule5;
