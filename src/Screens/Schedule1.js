import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { Schedule1Text } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import SaveStates from "../Utils/SaveStates";

const Schedule1 = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>첫번째 일정 | 08:30</Title>
      <Text>{Schedule1Text}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 1);
            setPick(1);
            setSchedule(1);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S1A1.jpeg" alt="walk" />
          <SelectBtn>
            <AnsText>{"산책하자 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 2);
            setPick(2);
            setSchedule(1);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S1A2.jpeg" alt="eat" />
          <SelectBtn>
            <AnsText>{"밥먹자 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 3);
            setPick(3);
            setSchedule(1);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S1A3.jpeg" alt="gallery" />
          <SelectBtn>
            <AnsText>{"바로 여행하자 !"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule1;
