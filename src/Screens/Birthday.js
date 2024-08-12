import React, { useRef } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";

const Birthday = () => {
  const audioRef = useRef();
  localStorage.clear();
  return (
    <Container style={{ justifyContent: "center" }}>
      <Title>나의 연인, 나의 다인</Title>
      <Text>볼륨을 최대로 올리고, 아래 사진을 눌러봐 !</Text>
      <audio src="/sound/voice.m4a" ref={audioRef} />
      <FullImg
        src="/image/birthday.jpeg"
        onClick={() => audioRef.current?.play()}
      />
    </Container>
  );
};
export default Birthday;
