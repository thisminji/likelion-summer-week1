// Timer.jsx
import { useState } from "react";
import styled from "styled-components";

function Timer() {
    const [time, setTime] = useState(10);
    const [isRunning, setIsRunning] = useState(false);

    //타이머 실행 로직
    //버튼 클릭 시 실행되는 함수
    //onClick 이벤트로 연결된다.
    const startTimer = () => {
        if (isRunning) return;  //이미 실행 중이면 아무것도 하지 않음
        setIsRunning(true); //타이머가 실행 중 이라는 걸 표기
        setTime(10); //타이머 시작할 때마다 10초로 초기화

        const timer = setInterval(() => {
            // 1초마다 이 함수 실행
            setTime((prev) => {
                // 상태값 1씩 감소
                if (prev <= 1) {
                    clearInterval(timer);  // 타이머 종료
                    setIsRunning(false);   // 실행 중 상태 해제
                    return 0;              // 0으로 마무리
                }
                return prev - 1; // 1초씩 감소
            });
        }, 1000); //1000ms마다 실행
    };

    return (
        <Container>
            <TimerButton onClick={startTimer} disabled={isRunning}>
                타이머 시작
            </TimerButton>

            <h1>Time: {time} seconds</h1>
            <h2>남은 시간: {10 - time}</h2>
        </Container>
    );
}

export default Timer;

// Styled Components
const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;



const TimerButton = styled.button`
margin:100px;
`;
