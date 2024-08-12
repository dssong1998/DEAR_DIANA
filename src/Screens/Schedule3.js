import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { Schedule3Text } from "../Components/Contents/ScheduleText";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import SaveStates from "../Utils/SaveStates";

const Schedule3 = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>{SchedulesObjs[2].title}</Title>
      <Text>{Schedule3Text}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 3, 1);
            setPick(1);
            setSchedule(3);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S3A1.jpeg" alt="walk" />
          <SelectBtn>
            <AnsText>{"나 책방 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 3, 2);
            setPick(2);
            setSchedule(3);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S3A2.jpeg" alt="eat" />
          <SelectBtn>
            <AnsText>{"나 옷 구경 !"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 3, 3);
            setPick(3);
            setSchedule(3);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S3A3.jpeg" alt="gallery" />
          <SelectBtn>
            <AnsText>{"나 고양이 !"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Schedule3;
