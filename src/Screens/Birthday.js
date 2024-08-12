import React, { useRef } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";

const Birthday = () => {
  localStorage.clear();
  const audioRef = useRef();
  return (
    <Container style={{ justifyContent: "center" }}>
      <Title>{SchedulesObjs[7].title}</Title>
      <Text>볼륨을 최대로 올리고, 아래 소리를 재생해봐 !</Text>
      <audio
        src="https://boogibooks.com/assets/sound/voice.m4a"
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
