import React, { useRef, useState } from "react";
import { Container } from "../Components/Blocks";
import { Text, Title } from "../Components/Texts";
import { FullImg } from "../Components/Contents";
import { SchedulesObjs } from "../Components/Contents/ScheduleData";
import { DisabledBtn, NextBtn } from "../Components/Buttons";
import SaveStates from "../Utils/SaveStates";
import useTimeChecker from "../Hooks/useTimeChecker";

const Birthday = ({ pick, setDisp, setSchedule }) => {
  const [yet, setYet] = useState(false);
  useTimeChecker("19:30", setYet);

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
      {pick === 1 ? (
        yet ? (
          <DisabledBtn>19시 30분에 오픈</DisabledBtn>
        ) : (
          <NextBtn
            onClick={() => {
              SaveStates(8);
              setDisp(8);
            }}
          >
            {SchedulesObjs[8]?.title}
          </NextBtn>
        )
      ) : (
        <NextBtn
          onClick={() => {
            SaveStates(9, 9);
            setDisp(9);
            setSchedule(9);
          }}
        >
          여행 종료
        </NextBtn>
      )}
    </Container>
  );
};
export default Birthday;
