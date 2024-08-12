import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { Schedule4Text } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import SaveStates from "../Utils/SaveStates";

const Schedule4 = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>{SchedulesObjs[3].title}</Title>
      <Text>{Schedule4Text}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 4, 1);
            setPick(1);
            setSchedule(4);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S4A1.jpeg" alt="tea" />
          <SelectBtn>
            <AnsText>{"녹차밭 좋다 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 4, 2);
            setPick(2);
            setSchedule(4);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S4A2.jpeg" alt="activity" />
          <SelectBtn>
            <AnsText>{"액티비티 할래 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 4, 3);
            setPick(3);
            setSchedule(4);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S4A3.jpeg" alt="bookshop" />
          <SelectBtn>
            <AnsText>{"책방 가자 !"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule4;
