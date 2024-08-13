import React from "react";
import { Answer, Container, Options } from "../Components/Blocks";
import { AnsText, Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";
import { SelectBtn } from "../Components/Buttons";
import SaveStates from "../Utils/SaveStates";

const Snack = ({ setPick, setSchedule, setDisp }) => {
  return (
    <Container>
      <Title>야식 시간 | 19:30</Title>
      <Text>{`노을 보러 온다고 저녁을 너무 일찍 먹었지 !

배고플지도 모르니 야식 하나 사서 갈까 ?

숙소에서 나랑 술 한 잔 어때 ?!`}</Text>
      <Options>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 1);
            setPick(1);
            setSchedule(8);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S8A1.jpeg" alt="walk" />
          <SelectBtn>
            <AnsText>{"고등어회"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 2);
            setPick(2);
            setSchedule(8);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S8A2.jpeg" alt="eat" />
          <SelectBtn>
            <AnsText>{"닭발"}</AnsText>
          </SelectBtn>
        </Answer>
        <Answer
          onClick={() => {
            SaveStates(9, 1, 3);
            setPick(3);
            setSchedule(8);
            setDisp(9);
          }}
        >
          <FullImg src="/image/S8A3.jpeg" alt="gallery" />
          <SelectBtn>
            <AnsText>{"야식 안 먹을래"}</AnsText>
          </SelectBtn>
        </Answer>
      </Options>
    </Container>
  );
};
export default Snack;
