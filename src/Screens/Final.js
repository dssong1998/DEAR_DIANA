import React from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";
import { NextBtn } from "../Components/Buttons";

const Final = ({ setDisp }) => {
  return (
    <Container>
      <Title>제주가 대다 | 다시보기</Title>
      <Text>{`다인이를 위한 다시보기 서비스 !

전격 오픈 !`}</Text>
      <FullImg src="/image/Greeting.jpeg" alt="Greeting" />

      <NextBtn
        onClick={() => {
          setDisp(0);
        }}
      >
        여행 다시 해보기
      </NextBtn>
      <NextBtn
        onClick={() => {
          setDisp(7);
        }}
      >
        생일 편지 녹음 듣기
      </NextBtn>
    </Container>
  );
};
export default Final;
