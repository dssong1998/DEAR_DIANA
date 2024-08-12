import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { Schedule6Text } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import SaveStates from "../Utils/SaveStates";

const Schedule6 = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>{SchedulesObjs[5].title}</Title>
      <Text>{Schedule6Text}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 6, 1);
            setPick(1);
            setSchedule(6);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S6A1.jpeg" alt="walk" />
          <SelectBtn>
            <AnsText>{"노을 보러 가자 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer>
          <FullImg src="/image/S6A2.jpeg" alt="eat" />
          <SelectBtn
            onClick={() => {
              SaveStates(9, 6, 2);
              setPick(2);
              setSchedule(6);
              setDisp(9);
            }}
          >
            <AnsText>{"영화 보고 쉬자 !"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule6;
