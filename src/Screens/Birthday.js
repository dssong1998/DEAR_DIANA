import React, { useRef } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";

const Birthday = () => {
  //   localStorage.clear();
  const audioRef = useRef();
  return (
    <Container style={{ justifyContent: "center" }}>
      <Title>나의 연인, 나의 다인</Title>
      <Text>볼륨을 최대로 올리고, 아래 소리를 재생해봐 !</Text>
      <audio
        src="https://dssong1998.github.io/DEAR_DIANA/sound/voice.m4a"
        ref={audioRef}
        controls
      />
      <FullImg
        src="/image/birthday.jpeg"
        onClick={() => audioRef.current?.play()}
      />
    </Container>
  );
};
export default Birthday;
